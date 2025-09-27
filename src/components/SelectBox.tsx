import React from "react";
import ValidationMessages from "./ValidationMessages";
import CheckBox from "./CheckBox";

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
      ...(width != null ? { width } : {}),
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
        style={computedStyle}
        className={`min-ui-selectbox-wrapper ${className} min-ui-selectbox-container`}
      >
        {multiple ? (
          <div
            ref={containerRef}
            className="min-ui-selectbox-dropdown-container"
            style={{ height: computedStyle.height }}
          >
            <button
              type="button"
              onClick={() => setIsOpen((s) => !s)}
              disabled={disabled}
              className="min-ui-selectbox-button"
              aria-haspopup="listbox"
              aria-expanded={isOpen}
            >
              <span className="min-ui-selectbox-text">{selectedLabels}</span>
              <span
                className={`min-ui-selectbox-arrow ${isOpen ? "min-ui-selectbox-arrow-open" : ""}`}
              />
            </button>

            {isOpen && (
              <div
                role="listbox"
                aria-multiselectable
                className="min-ui-selectbox-dropdown"
              >
                {processedItems.map((it, idx) => {
                  if (it.visible === false) return null;
                  const stringVal = String(it.value);
                  const checked =
                    Array.isArray(internalValue) &&
                    internalValue.indexOf(stringVal) >= 0;
                  return (
                    <div
                      key={idx}
                      className={`min-ui-selectbox-item ${it.disabled || disabled ? "min-ui-selectbox-item-disabled" : ""}`}
                    >
                      <CheckBox
                        checked={checked}
                        disabled={disabled || it.disabled}
                        onChange={() => handleCheckboxToggle(stringVal)}
                        label={it.display}
                        width="auto"
                        className="min-ui-selectbox-checkbox"
                      />
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ) : (
          <div
            ref={containerRef}
            className="min-ui-selectbox-dropdown-container"
            style={{ height: computedStyle.height }}
          >
            <button
              type="button"
              onClick={() => setIsOpen((s) => !s)}
              disabled={disabled}
              className="min-ui-selectbox-button"
              aria-haspopup="listbox"
              aria-expanded={isOpen}
            >
              <span className="min-ui-selectbox-text">
                {processedItems.find(
                  (it) => String(it.value) === String(internalValue)
                )?.display || "--"}
              </span>
              <span
                className={`min-ui-selectbox-arrow ${isOpen ? "min-ui-selectbox-arrow-open" : ""}`}
              />
            </button>

            {isOpen && (
              <div role="listbox" className="min-ui-selectbox-dropdown">
                {processedItems.map((it, idx) => {
                  if (it.visible === false) return null;
                  const stringVal = String(it.value);
                  const checked = String(internalValue) === stringVal;
                  return (
                    <div
                      key={idx}
                      className={`min-ui-selectbox-item ${it.disabled || disabled ? "min-ui-selectbox-item-disabled" : ""}`}
                      onClick={() => {
                        if (!it.disabled && !disabled) {
                          setInternalValue(stringVal);
                          onChange?.(
                            stringVal === "" ? null : parseValue(stringVal)
                          );
                          setIsOpen(false);
                        }
                      }}
                    >
                      {multiple ? (
                        <CheckBox
                          checked={checked}
                          disabled={disabled || it.disabled}
                          onChange={() => {
                            setInternalValue(stringVal);
                            onChange?.(
                              stringVal === "" ? null : parseValue(stringVal)
                            );
                            setIsOpen(false);
                          }}
                          label={it.display}
                          width="auto"
                          className="min-ui-selectbox-checkbox"
                        />
                      ) : (
                        <span className="min-ui-selectbox-item-label">
                          {it.display}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
        <ValidationMessages visible={isInvalid} messages={validationMessages} />
      </div>
    );
  }
);

SelectBox.displayName = "SelectBox";

export default SelectBox;
