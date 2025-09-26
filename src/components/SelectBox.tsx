import React from "react";
import ValidationMessages from "./ValidationMessages";

export interface SelectBoxItem {
  value: any;
  display: string;
  visible?: boolean;
  disabled?: boolean;
}

export interface SelectBoxProps
  extends Omit<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    "width" | "height" | "value" | "defaultValue" | "onChange"
  > {
  items: SelectBoxItem[] | (string | number)[];
  value?: any;
  multiple?: boolean;
  validationMessages?: string[] | null;
  onChange?: (value: any) => void;
  visible?: boolean;
  width?: React.CSSProperties["width"];
  height?: React.CSSProperties["height"];
  onInitialized?: (el: HTMLDivElement | HTMLSelectElement | null) => void;
  disabled?: boolean;
}

export const SelectBox = React.forwardRef<
  HTMLDivElement | HTMLSelectElement,
  SelectBoxProps
>(
  (
    {
      items,
      value = null,
      multiple = false,
      validationMessages = [],
      onChange,
      visible = true,
      width,
      height,
      onInitialized,
      disabled = false,
      style,
      className = "",
      ...rest
    },
    ref
  ) => {
    const processedItems = React.useMemo<SelectBoxItem[]>(() => {
      if (!Array.isArray(items)) return [];
      return items.map((it) =>
        typeof it === "object" && it !== null
          ? (it as SelectBoxItem)
          : { value: it, display: String(it) }
      );
    }, [items]);

    // Helpers to parse/format values
    const parseValue = React.useCallback((v: string) => {
      if (/^-?\d+(\.\d+)?$/.test(v)) {
        const n = Number(v);
        return Number.isNaN(n) ? v : n;
      }
      return v;
    }, []);

    const toSelectValue = React.useCallback(
      (v: any) => {
        if (multiple) {
          if (!Array.isArray(v)) return [] as string[];
          return v.map((x: any) => (x == null ? "" : String(x)));
        } else {
          return v == null ? "" : String(v);
        }
      },
      [multiple]
    );

    // Internal state for select value (string | string[])
    const [internalValue, setInternalValue] = React.useState<string | string[]>(
      () => toSelectValue(value)
    );

    // Sync when prop value changes
    React.useEffect(() => {
      setInternalValue(toSelectValue(value));
    }, [value, toSelectValue]);

    const innerRef = React.useRef<HTMLDivElement | HTMLSelectElement | null>(
      null
    );
    const setRefs = (node: HTMLDivElement | HTMLSelectElement | null) => {
      innerRef.current = node;
      if (typeof ref === "function") (ref as any)(node);
      else if (ref)
        (
          ref as React.MutableRefObject<
            HTMLDivElement | HTMLSelectElement | null
          >
        ).current = node;
    };

    React.useEffect(() => {
      onInitialized?.(innerRef.current);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!visible) return null;

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      if (multiple) {
        const opts = Array.from(e.target.selectedOptions);
        const stringVals = opts.map((o) => String(o.value));
        const parsed = stringVals.map((sv) => parseValue(sv));
        setInternalValue(stringVals);
        onChange?.(parsed);
      } else {
        const v = e.target.value;
        setInternalValue(v);
        onChange?.(v === "" ? null : parseValue(v));
      }
    };

    const handleCheckboxToggle = (itemValue: string) => {
      const cur = Array.isArray(internalValue) ? [...internalValue] : [];
      const idx = cur.indexOf(itemValue);
      if (idx >= 0) cur.splice(idx, 1);
      else cur.push(itemValue);
      setInternalValue(cur);
      const parsed = cur.map((s) => parseValue(String(s)));
      onChange?.(parsed);
    };

    // New: dropdown state for multiple mode
    const [isOpen, setIsOpen] = React.useState(false);
    const containerRef = React.useRef<HTMLDivElement | null>(null);

    React.useEffect(() => {
      function onDoc(e: MouseEvent) {
        if (!containerRef.current) return;
        if (!containerRef.current.contains(e.target as Node)) setIsOpen(false);
      }
      document.addEventListener("mousedown", onDoc);
      return () => document.removeEventListener("mousedown", onDoc);
    }, []);

    const computedStyle: React.CSSProperties = {
      ...style,
      ...(width != null ? { width } : { width: "100%" }),
      ...(height != null ? { height } : {}),
    };

    const isInvalid =
      Array.isArray(validationMessages) && validationMessages.length > 0;

    // Helper to display selected labels
    const selectedLabels = React.useMemo(() => {
      if (!multiple) return "";
      const cur = Array.isArray(internalValue) ? internalValue : [];
      if (cur.length === 0) return "None";
      const labels = processedItems
        .filter((it) => cur.indexOf(String(it.value)) >= 0)
        .map((it) => it.display);
      return labels.length > 0 ? labels.join(", ") : `${cur.length} selected`;
    }, [internalValue, multiple, processedItems]);

    return (
      <div
        ref={setRefs}
        style={{ width: computedStyle.width }}
        className={className + "flex flex-col"}
      >
        {multiple ? (
          <div
            ref={containerRef}
            style={{ ...computedStyle, width: undefined, position: "relative" }}
            className="flex-grow"
          >
            <button
              type="button"
              onClick={() => setIsOpen((s) => !s)}
              disabled={disabled}
              className="inline-flex items-center justify-between w-full border px-3 py-2 bg-white"
              aria-haspopup="listbox"
              aria-expanded={isOpen}
            >
              <span
                style={{
                  display: "inline-block",
                  flex: 1,
                  minWidth: 0,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
                className="overflow-hidden text-ellipsis"
              >
                {selectedLabels}
              </span>
              <span style={{ marginLeft: 8 }}>{isOpen ? "▲" : "▼"}</span>
            </button>

            {isOpen && (
              <div
                role="listbox"
                aria-multiselectable
                className="absolute left-0 right-0 mt-1 z-50 border bg-white shadow max-h-60 overflow-auto"
                style={{ maxHeight: 240 }}
              >
                {processedItems.map((it, idx) => {
                  if (it.visible === false) return null;
                  const stringVal = String(it.value);
                  const checked =
                    Array.isArray(internalValue) &&
                    internalValue.indexOf(stringVal) >= 0;
                  return (
                    <label
                      key={idx}
                      className="flex items-center gap-2 px-3 py-2 hover:bg-slate-50"
                      style={{
                        cursor:
                          it.disabled || disabled ? "not-allowed" : "pointer",
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        disabled={disabled || it.disabled}
                        onChange={() => handleCheckboxToggle(stringVal)}
                      />
                      <span>{it.display}</span>
                    </label>
                  );
                })}
              </div>
            )}
          </div>
        ) : (
          <select
            ref={(node) => {
              // keep innerRef for onInitialized, while outer ref is the container
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              (innerRef as any).current = node;
            }}
            className="flex-grow"
            multiple={false}
            value={internalValue as any}
            onChange={handleSelectChange}
            disabled={disabled}
            style={{ ...computedStyle, width: undefined }}
            {...rest}
          >
            {!multiple && <option value="">--</option>}
            {processedItems.map((it, idx) =>
              it.visible === false ? null : (
                <option
                  key={idx}
                  value={String(it.value)}
                  disabled={it.disabled}
                >
                  {it.display}
                </option>
              )
            )}
          </select>
        )}
        <ValidationMessages visible={isInvalid} messages={validationMessages} />
      </div>
    );
  }
);

SelectBox.displayName = "SelectBox";

export default SelectBox;
