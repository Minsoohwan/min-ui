import React from "react";
import ValidationMessages from "./ValidationMessages";
import TextBox from "./TextBox";
import SelectBox from "./SelectBox";
import CheckBox from "./CheckBox";
import CheckBoxGroup from "./CheckBoxGroup";

export type EditorKind = "TextBox" | "SelectBox" | "CheckBox" | "CheckBoxGroup";
export type EditorType = EditorKind | "none";
export type EditorResolver<T = any> = (
  row: T,
  rowIndex: number,
  value: any
) => EditorType;

export interface EditInfo<T = any> {
  editor: EditorType | EditorResolver<T>;
  displayValue?: (value: any, row: T, rowIndex: number) => React.ReactNode;
  /** NOTE: prefer editorProps; editoProps is accepted for backward compatibility */
  editorProps?: any;
  editoProps?: any;
}

export interface TableColumn<T = any> {
  key: keyof T | string;
  header: React.ReactNode;
  width?: React.CSSProperties["width"];
  align?: "left" | "center" | "right";
  render?: (value: any, row: T, rowIndex: number) => React.ReactNode;
  edit?: EditInfo<T>;
}

export interface TableProps<T = any> {
  columns: TableColumn<T>[];
  data: T[];
  rowKey?: (row: T, index: number) => React.Key;
  width?: React.CSSProperties["width"];
  height?: React.CSSProperties["height"];
  visible?: boolean;
  className?: string;
  style?: React.CSSProperties;
  striped?: boolean;
  bordered?: boolean;
  hoverable?: boolean;
  emptyText?: React.ReactNode;
  validationMessages?: string[] | null | undefined;
  onInitialized?: (el: HTMLDivElement | null) => void;
  /** 전체 편집 모드 여부 */
  editing?: boolean;
  /** 셀 값 변경 알림 */
  onCellChange?: (args: {
    rowIndex: number;
    colIndex: number;
    column: TableColumn<T>;
    key: keyof T | string;
    value: any;
    row: T;
  }) => void;
}

export function Table<T = any>(props: TableProps<T>) {
  const {
    columns,
    data,
    rowKey,
    width,
    height,
    visible = true,
    className = "",
    style,
    striped = true,
    bordered = true,
    hoverable = true,
    emptyText = "No data",
    validationMessages,
    onInitialized,
    editing = false,
    onCellChange,
  } = props;

  const isInvalid = React.useMemo(
    () => Array.isArray(validationMessages) && validationMessages.length > 0,
    [validationMessages]
  );

  const wrapperRef = React.useRef<HTMLDivElement | null>(null);
  React.useEffect(() => {
    onInitialized?.(wrapperRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!visible) return null;

  const computedStyle: React.CSSProperties = {
    ...style,
    ...(width != null ? { width } : { width: "100%" }),
    ...(height != null ? { height } : {}),
  };

  // Manage active cell: show editor only when cell is focused
  const [activeCell, setActiveCell] = React.useState<{
    rowIndex: number;
    colIndex: number;
  } | null>(null);

  const isCellActive = React.useCallback(
    (rowIndex: number, colIndex: number) =>
      Boolean(
        activeCell &&
          activeCell.rowIndex === rowIndex &&
          activeCell.colIndex === colIndex
      ),
    [activeCell]
  );

  const handleCellFocus = (rowIndex: number, colIndex: number) => () => {
    if (!editing) return;
    setActiveCell({ rowIndex, colIndex });
  };

  const handleCellBlur = (e: React.FocusEvent<HTMLTableCellElement>) => {
    const next = e.relatedTarget as Node | null;
    if (!e.currentTarget.contains(next)) setActiveCell(null);
  };

  return (
    <div
      ref={wrapperRef}
      className={`min-ui-table-wrapper ${className}`.trim()}
      style={{ width: computedStyle.width }}
    >
      <div
        className={`min-ui-table-container ${isInvalid ? "min-ui-table-invalid" : ""}`.trim()}
        style={{ height: computedStyle.height }}
      >
        <table
          className={`min-ui-table ${striped ? "min-ui-table-striped" : ""} ${
            bordered ? "min-ui-table-bordered" : ""
          } ${hoverable ? "min-ui-table-hover" : ""} ${
            isInvalid ? "min-ui-table-invalid" : ""
          }`.trim()}
        >
          <colgroup>
            {columns.map((col, idx) => (
              <col key={idx} style={{ width: col.width }} />
            ))}
          </colgroup>
          <thead className="min-ui-table-thead">
            <tr>
              {columns.map((col, idx) => (
                <th
                  key={idx}
                  className={`min-ui-table-th min-ui-text-${col.align ?? "left"}`}
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="min-ui-table-tbody">
            {data.length === 0 ? (
              <tr className="min-ui-table-empty-row">
                <td className="min-ui-table-empty" colSpan={columns.length}>
                  {emptyText}
                </td>
              </tr>
            ) : (
              data.map((row, rowIndex) => {
                const key = rowKey ? rowKey(row, rowIndex) : rowIndex;
                return (
                  <tr key={key} className="min-ui-table-tr">
                    {columns.map((col, colIndex) => {
                      const value = (row as any)[col.key as any];
                      const edit = col.edit;

                      const defaultDisplay = col.render
                        ? col.render(value, row, rowIndex)
                        : (value as React.ReactNode);

                      const resolvedEditor: EditorType = (() => {
                        if (!edit) return "none";
                        const e = edit.editor as any;
                        return typeof e === "function"
                          ? e(row, rowIndex, value)
                          : (e as EditorType);
                      })();

                      // Build default textual display when edit is configured
                      const toDisplayValue = (): React.ReactNode => {
                        if (!edit) return defaultDisplay;
                        if (edit.displayValue)
                          return edit.displayValue(value, row, rowIndex);

                        const props = {
                          ...(edit.editoProps ?? {}),
                          ...(edit.editorProps ?? {}),
                        } as any;

                        const safeText = (): string => {
                          if (value == null) return "";
                          if (Array.isArray(value)) return value.join(", ");
                          if (typeof value === "object") {
                            const items = Array.isArray(props?.items)
                              ? props.items
                              : [];
                            if (items.length > 0) {
                              const normalized = items.map((it: any) =>
                                typeof it === "object" && it !== null
                                  ? it
                                  : { value: it, display: String(it) }
                              );
                              const rec = value as any;
                              const labels = normalized
                                .filter((it: any) => rec?.[it.value] === true)
                                .map((it: any) => it.display);
                              if (labels.length) return labels.join(", ");
                            }
                            try {
                              return JSON.stringify(value);
                            } catch {
                              return String(value);
                            }
                          }
                          return String(value);
                        };

                        switch (resolvedEditor) {
                          case "TextBox":
                            return value == null ? "" : String(value);
                          case "SelectBox": {
                            const items = Array.isArray(props.items)
                              ? props.items
                              : [];
                            const normalized = items.map((it: any) =>
                              typeof it === "object" && it !== null
                                ? it
                                : { value: it, display: String(it) }
                            );
                            if (props.multiple) {
                              const arr = Array.isArray(value) ? value : [];
                              const labels = arr
                                .map(
                                  (v: any) =>
                                    normalized.find(
                                      (it: any) =>
                                        String(it.value) === String(v)
                                    )?.display ?? String(v)
                                )
                                .filter((x: any) => x != null && x !== "");
                              return labels.length ? labels.join(", ") : "";
                            }
                            const found = normalized.find(
                              (it: any) => String(it.value) === String(value)
                            );
                            return found
                              ? found.display
                              : value == null
                                ? ""
                                : String(value);
                          }
                          case "none":
                            return React.isValidElement(defaultDisplay)
                              ? defaultDisplay
                              : safeText();
                          case "CheckBox":
                            return String(Boolean(value));
                          case "CheckBoxGroup": {
                            const items = Array.isArray(props.items)
                              ? props.items
                              : [];
                            const normalized = items.map((it: any) =>
                              typeof it === "object" && it !== null
                                ? it
                                : { value: it, display: String(it) }
                            );
                            const rec = (value as any) || {};
                            const labels = normalized
                              .filter((it: any) => rec[it.value] === true)
                              .map((it: any) => it.display);
                            return labels.length ? labels.join(", ") : "";
                          }
                          default:
                            return React.isValidElement(defaultDisplay)
                              ? defaultDisplay
                              : safeText();
                        }
                      };

                      const displayContent = toDisplayValue();

                      const mergedEditorProps = (() => {
                        const base = { width: "100%" } as any;
                        const legacy = (edit?.editoProps ?? {}) as any;
                        const modern = (edit?.editorProps ?? {}) as any;
                        const mergedStyle = {
                          width: "100%",
                          minWidth: 0,
                          ...(legacy?.style ?? {}),
                          ...(modern?.style ?? {}),
                        } as React.CSSProperties;
                        return {
                          ...base,
                          ...legacy,
                          ...modern,
                          style: mergedStyle,
                        } as any;
                      })();

                      const handleEmit = (newValue: any) => {
                        onCellChange?.({
                          rowIndex,
                          colIndex,
                          column: col,
                          key: col.key,
                          value: newValue,
                          row,
                        });
                      };

                      let cellContent: React.ReactNode = displayContent;
                      const active =
                        editing &&
                        edit &&
                        resolvedEditor !== "none" &&
                        isCellActive(rowIndex, colIndex);
                      if (active && edit) {
                        switch (resolvedEditor) {
                          case "TextBox": {
                            cellContent = (
                              <TextBox
                                text={value == null ? "" : String(value)}
                                onChange={(e) =>
                                  handleEmit(
                                    (e.target as HTMLInputElement).value
                                  )
                                }
                                {...mergedEditorProps}
                              />
                            );
                            break;
                          }
                          case "SelectBox": {
                            cellContent = (
                              <SelectBox
                                value={value}
                                onChange={(v) => handleEmit(v)}
                                {...mergedEditorProps}
                              />
                            );
                            break;
                          }
                          case "CheckBox": {
                            cellContent = (
                              <CheckBox
                                value={Boolean(value)}
                                onChange={(e) =>
                                  handleEmit(
                                    (e.target as HTMLInputElement).checked
                                  )
                                }
                                {...mergedEditorProps}
                              />
                            );
                            break;
                          }
                          case "CheckBoxGroup": {
                            cellContent = (
                              <CheckBoxGroup
                                value={(value as any) ?? {}}
                                onChange={(v) => handleEmit(v)}
                                {...mergedEditorProps}
                              />
                            );
                            break;
                          }
                          default: {
                            cellContent = displayContent;
                          }
                        }
                      }

                      const tdClasses: string[] = [
                        "min-ui-table-td",
                        `min-ui-text-${col.align ?? "left"}`,
                      ];
                      if (active) tdClasses.push("min-ui-table-td-editing");
                      if (resolvedEditor === "SelectBox")
                        tdClasses.push("min-ui-table-td-overflow-visible");

                      return (
                        <td
                          key={colIndex}
                          className={tdClasses.join(" ")}
                          tabIndex={editing && edit ? 0 : undefined}
                          onFocus={handleCellFocus(rowIndex, colIndex)}
                          onClick={handleCellFocus(rowIndex, colIndex)}
                          onBlur={handleCellBlur}
                        >
                          {cellContent}
                        </td>
                      );
                    })}
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
      <ValidationMessages visible={isInvalid} messages={validationMessages} />
    </div>
  );
}

export default Table;
