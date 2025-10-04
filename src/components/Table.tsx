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

export interface CellMergeInfo {
  rowSpan?: number;
  colSpan?: number;
}

export interface TableColumn<T = any> {
  key: keyof T | string;
  header: React.ReactNode;
  width?: React.CSSProperties["width"];
  align?: "left" | "center" | "right";
  headerAlign?: "left" | "center" | "right";
  dataField?: keyof T | string;
  render?: (value: any, row: T, rowIndex: number) => React.ReactNode;
  edit?: EditInfo<T>;
  children?: TableColumn<T>[];
  /** 셀 병합 정보를 반환하는 함수 */
  getCellMerge?: (value: any, row: T, rowIndex: number) => CellMergeInfo | null;
}

export type SelectMode = "single" | "multiple" | "none";

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
  /** 행 선택 모드 */
  selectMode?: SelectMode;
  /** 선택된 행들의 키 값들 (multiple일 때 배열, single일 때 단일 값) */
  selectedRowKeys?: React.Key | React.Key[];
  /** 행 선택 변경 알림 */
  onRowSelectionChange?: (args: {
    selectedRowKeys: React.Key[];
    selectedRows: T[];
    selectMode: SelectMode;
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
    selectMode = "none",
    selectedRowKeys = [],
    onRowSelectionChange,
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

  // Flatten columns to get leaf columns only
  const flattenColumns = (cols: TableColumn<T>[]): TableColumn<T>[] => {
    const result: TableColumn<T>[] = [];
    cols.forEach((col) => {
      if (col.children && col.children.length > 0) {
        result.push(...flattenColumns(col.children));
      } else {
        result.push(col);
      }
    });
    return result;
  };

  // Get max depth of column hierarchy
  const getMaxDepth = (cols: TableColumn<T>[]): number => {
    let maxDepth = 1;
    cols.forEach((col) => {
      if (col.children && col.children.length > 0) {
        maxDepth = Math.max(maxDepth, 1 + getMaxDepth(col.children));
      }
    });
    return maxDepth;
  };

  // Build header rows for nested columns
  const buildHeaderRows = (
    cols: TableColumn<T>[],
    depth: number,
    maxDepth: number
  ): React.ReactNode[][] => {
    const rows: React.ReactNode[][] = Array.from(
      { length: maxDepth },
      () => []
    );

    const processColumn = (
      col: TableColumn<T>,
      colIndex: number,
      currentDepth: number
    ) => {
      const headerAlignment = col.headerAlign ?? col.align ?? "left";
      const hasChildren = col.children && col.children.length > 0;
      const colSpan = hasChildren ? flattenColumns([col]).length : 1;
      const rowSpan = hasChildren ? 1 : maxDepth - currentDepth + 1;

      rows[currentDepth - 1]?.push(
        <th
          key={`${currentDepth}-${colIndex}`}
          className={`min-ui-table-th min-ui-text-${headerAlignment}`}
          colSpan={colSpan}
          rowSpan={rowSpan}
        >
          {col.header}
        </th>
      );

      if (hasChildren && col.children) {
        col.children.forEach((child, childIdx) => {
          processColumn(child, childIdx, currentDepth + 1);
        });
      }
    };

    cols.forEach((col, idx) => processColumn(col, idx, depth));
    return rows;
  };

  const leafColumns = React.useMemo(() => flattenColumns(columns), [columns]);
  const maxDepth = React.useMemo(() => getMaxDepth(columns), [columns]);
  const headerRows = React.useMemo(
    () => buildHeaderRows(columns, 1, maxDepth),
    [columns, maxDepth]
  );

  // Manage active cell: show editor only when cell is focused
  const [activeCell, setActiveCell] = React.useState<{
    rowIndex: number;
    colIndex: number;
  } | null>(null);

  // Selection state management
  const normalizedSelectedKeys = React.useMemo(() => {
    if (!selectedRowKeys) return [];
    return Array.isArray(selectedRowKeys) ? selectedRowKeys : [selectedRowKeys];
  }, [selectedRowKeys]);

  const getRowKey = React.useCallback(
    (row: T, index: number): React.Key => {
      return rowKey ? rowKey(row, index) : index;
    },
    [rowKey]
  );

  const isRowSelected = React.useCallback(
    (row: T, index: number) => {
      const key = getRowKey(row, index);
      return normalizedSelectedKeys.includes(key);
    },
    [normalizedSelectedKeys, getRowKey]
  );

  const handleRowClick = React.useCallback(
    (row: T, index: number) => {
      if (selectMode === "none" || !onRowSelectionChange) return;

      const key = getRowKey(row, index);
      const newSelectedKeys = [...normalizedSelectedKeys];
      const keyIndex = newSelectedKeys.indexOf(key);

      if (selectMode === "single") {
        // Single selection: replace current selection
        onRowSelectionChange({
          selectedRowKeys: [key],
          selectedRows: [row],
          selectMode,
        });
      } else if (selectMode === "multiple") {
        // Multiple selection: toggle selection
        if (keyIndex === -1) {
          newSelectedKeys.push(key);
        } else {
          newSelectedKeys.splice(keyIndex, 1);
        }

        const selectedRows = newSelectedKeys
          .map((key) => data.find((r, i) => getRowKey(r, i) === key))
          .filter(Boolean) as T[];

        onRowSelectionChange({
          selectedRowKeys: newSelectedKeys,
          selectedRows,
          selectMode,
        });
      }
    },
    [selectMode, onRowSelectionChange, normalizedSelectedKeys, getRowKey, data]
  );

  const handleSelectAll = React.useCallback(() => {
    if (selectMode !== "multiple" || !onRowSelectionChange) return;

    const allKeys = data.map((row, index) => getRowKey(row, index));
    const isAllSelected = allKeys.every((key) =>
      normalizedSelectedKeys.includes(key)
    );

    if (isAllSelected) {
      // Deselect all
      onRowSelectionChange({
        selectedRowKeys: [],
        selectedRows: [],
        selectMode,
      });
    } else {
      // Select all
      onRowSelectionChange({
        selectedRowKeys: allKeys,
        selectedRows: data,
        selectMode,
      });
    }
  }, [
    selectMode,
    onRowSelectionChange,
    normalizedSelectedKeys,
    data,
    getRowKey,
  ]);

  const getHeaderCheckboxState = React.useMemo(() => {
    if (selectMode !== "multiple" || data.length === 0) {
      return { checked: false, indeterminate: false };
    }

    const allKeys = data.map((row, index) => getRowKey(row, index));
    const selectedCount = normalizedSelectedKeys.length;
    const totalCount = allKeys.length;

    if (selectedCount === 0) {
      return { checked: false, indeterminate: false };
    } else if (selectedCount === totalCount) {
      return { checked: true, indeterminate: false };
    } else {
      return { checked: false, indeterminate: true };
    }
  }, [selectMode, normalizedSelectedKeys, data, getRowKey]);

  const isCellActive = React.useCallback(
    (rowIndex: number, colIndex: number) =>
      Boolean(
        activeCell &&
          activeCell.rowIndex === rowIndex &&
          activeCell.colIndex === colIndex
      ),
    [activeCell]
  );

  // 병합된 셀 영역 내에 activeCell이 있는지 확인
  const isMergedCellActive = React.useCallback(
    (rowIndex: number, colIndex: number, rowSpan: number, colSpan: number) => {
      if (!activeCell) return false;

      // activeCell이 병합된 영역 내에 있는지 확인
      const isInRowRange =
        activeCell.rowIndex >= rowIndex &&
        activeCell.rowIndex < rowIndex + rowSpan;
      const isInColRange =
        activeCell.colIndex >= colIndex &&
        activeCell.colIndex < colIndex + colSpan;

      return isInRowRange && isInColRange;
    },
    [activeCell]
  );

  const handleCellFocus = (rowIndex: number, colIndex: number) => () => {
    if (!editing) return;
    setActiveCell({ rowIndex, colIndex });
  };

  const blurTimeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(
    null
  );

  React.useEffect(() => {
    // Cleanup timeout on unmount
    return () => {
      if (blurTimeoutRef.current) {
        clearTimeout(blurTimeoutRef.current);
      }
    };
  }, []);

  const handleCellBlur = (e: React.FocusEvent<HTMLTableCellElement>) => {
    const next = e.relatedTarget as Node | null;

    // Clear any pending blur
    if (blurTimeoutRef.current) {
      clearTimeout(blurTimeoutRef.current);
    }

    // Don't blur if focus is moving to something inside the cell
    if (e.currentTarget.contains(next)) {
      return;
    }

    // Check if focus is moving to another table cell
    const isMovingToTableCell =
      next instanceof Element ? next.closest(".min-ui-table-td") : null;
    if (isMovingToTableCell) {
      // Focus is moving to another cell, allow it without delay
      return;
    }

    // Delay blur to allow portal clicks (SelectBox dropdown)
    blurTimeoutRef.current = setTimeout(() => {
      // Check if focus is still outside the cell
      const currentlyFocused = document.activeElement;

      // Check if currently focused element is a SelectBox dropdown or another table cell
      const isSelectBoxDropdown = currentlyFocused?.closest(
        ".min-ui-selectbox-dropdown"
      );
      const isAnotherTableCell = currentlyFocused?.closest(".min-ui-table-td");

      if (!isSelectBoxDropdown && !isAnotherTableCell) {
        setActiveCell(null);
      }
    }, 150);
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
            {selectMode === "multiple" && (
              <col key="select" style={{ width: "40px" }} />
            )}
            {leafColumns.map((col, idx) => (
              <col key={idx} style={{ width: col.width }} />
            ))}
          </colgroup>
          <thead className="min-ui-table-thead">
            {headerRows.map((row, rowIdx) => (
              <tr key={rowIdx}>
                {rowIdx === 0 && selectMode === "multiple" && (
                  <th
                    className="min-ui-table-th min-ui-table-select-header"
                    rowSpan={maxDepth}
                  >
                    <CheckBox
                      value={
                        getHeaderCheckboxState.indeterminate
                          ? null
                          : getHeaderCheckboxState.checked
                      }
                      enableThreeState={true}
                      onChange={handleSelectAll}
                    />
                  </th>
                )}
                {row}
              </tr>
            ))}
          </thead>
          <tbody className="min-ui-table-tbody">
            {data.length === 0 ? (
              <tr className="min-ui-table-empty-row">
                <td
                  className="min-ui-table-empty"
                  colSpan={
                    leafColumns.length + (selectMode === "multiple" ? 1 : 0)
                  }
                >
                  {emptyText}
                </td>
              </tr>
            ) : (
              (() => {
                // 병합된 셀을 추적하는 맵: "rowIndex-colIndex" -> true
                const mergedCells = new Set<string>();

                // 병합 정보를 미리 계산
                data.forEach((row, ri) => {
                  leafColumns.forEach((col, ci) => {
                    const fieldKey = col.dataField ?? col.key;
                    const value = (row as any)[fieldKey as any];
                    const mergeInfo = col.getCellMerge?.(value, row, ri);

                    if (mergeInfo) {
                      const rowSpan = mergeInfo.rowSpan ?? 1;
                      const colSpan = mergeInfo.colSpan ?? 1;

                      // 병합된 영역의 모든 셀을 마크 (원본 제외)
                      for (let r = 0; r < rowSpan; r++) {
                        for (let c = 0; c < colSpan; c++) {
                          if (r !== 0 || c !== 0) {
                            mergedCells.add(`${ri + r}-${ci + c}`);
                          }
                        }
                      }
                    }
                  });
                });

                return data.map((row, rowIndex) => {
                  const key = rowKey ? rowKey(row, rowIndex) : rowIndex;
                  const isSelected = isRowSelected(row, rowIndex);
                  const rowClickable = selectMode !== "none";
                  const isRowDisabled = (row as any).disabled === true;

                  return (
                    <tr
                      key={key}
                      className={`min-ui-table-tr ${isSelected ? "min-ui-table-tr-selected" : ""} ${rowClickable && selectMode !== "multiple" && !isRowDisabled ? "min-ui-table-tr-clickable" : ""} ${isRowDisabled ? "min-ui-table-tr-disabled" : ""}`.trim()}
                      onClick={
                        selectMode !== "multiple" && !isRowDisabled
                          ? () => handleRowClick(row, rowIndex)
                          : undefined
                      }
                    >
                      {selectMode === "multiple" && (
                        <td
                          className="min-ui-table-td min-ui-table-select-cell"
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent row click
                          }}
                        >
                          <CheckBox
                            value={isSelected}
                            disabled={isRowDisabled}
                            onChange={(e) => {
                              e.stopPropagation(); // Prevent row click
                              if (!isRowDisabled) {
                                handleRowClick(row, rowIndex);
                              }
                            }}
                            onClick={(e) => {
                              e.stopPropagation(); // Prevent bubbling to row
                            }}
                          />
                        </td>
                      )}
                      {leafColumns.map((col, colIndex) => {
                        // 병합된 셀이면 렌더링하지 않음
                        const cellKey = `${rowIndex}-${colIndex}`;
                        if (mergedCells.has(cellKey)) {
                          return null;
                        }

                        const fieldKey = col.dataField ?? col.key;
                        const value = (row as any)[fieldKey as any];
                        const edit = col.edit;

                        // 병합 정보 가져오기
                        const mergeInfo = col.getCellMerge?.(
                          value,
                          row,
                          rowIndex
                        );
                        const rowSpan = mergeInfo?.rowSpan ?? 1;
                        const colSpan = mergeInfo?.colSpan ?? 1;

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
                          const fieldKey = col.dataField ?? col.key;
                          onCellChange?.({
                            rowIndex,
                            colIndex,
                            column: col,
                            key: fieldKey,
                            value: newValue,
                            row,
                          });
                        };

                        let cellContent: React.ReactNode = displayContent;
                        // 병합된 셀인 경우 병합 영역 내의 activeCell도 체크
                        const active =
                          editing &&
                          !isRowDisabled &&
                          edit &&
                          resolvedEditor !== "none" &&
                          (isCellActive(rowIndex, colIndex) ||
                            isMergedCellActive(
                              rowIndex,
                              colIndex,
                              rowSpan,
                              colSpan
                            ));
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
                            rowSpan={rowSpan}
                            colSpan={colSpan}
                            tabIndex={
                              editing && edit && !isRowDisabled ? 0 : undefined
                            }
                            onFocus={
                              !isRowDisabled
                                ? handleCellFocus(rowIndex, colIndex)
                                : undefined
                            }
                            onClick={
                              !isRowDisabled
                                ? handleCellFocus(rowIndex, colIndex)
                                : undefined
                            }
                            onBlur={!isRowDisabled ? handleCellBlur : undefined}
                          >
                            {cellContent}
                          </td>
                        );
                      })}
                    </tr>
                  );
                });
              })()
            )}
          </tbody>
        </table>
      </div>
      <ValidationMessages visible={isInvalid} messages={validationMessages} />
    </div>
  );
}

export default Table;
