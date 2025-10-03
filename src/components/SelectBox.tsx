import React from "react";
import { createPortal } from "react-dom";
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
  /** 드롭다운을 document.body 포털로 렌더링 (overflow 무시). 기본값: true */
  usePortal?: boolean;
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
      usePortal = true,
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
    const portalRef = React.useRef<HTMLDivElement | null>(null);

    const [dropdownStyle, setDropdownStyle] =
      React.useState<React.CSSProperties>({});

    const computePosition = React.useCallback(() => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setDropdownStyle({
        position: "fixed",
        left: rect.left,
        top: rect.bottom + 4,
        width: rect.width,
        zIndex: 1000,
      });
    }, []);

    React.useEffect(() => {
      function onDoc(e: MouseEvent) {
        const target = e.target as Node;
        const c = containerRef.current;
        const p = portalRef.current;
        const insideContainer = Boolean(c && c.contains(target));
        const insidePortal = Boolean(p && p.contains(target));
        if (!insideContainer && !insidePortal) setIsOpen(false);
      }
      document.addEventListener("mousedown", onDoc);
      return () => document.removeEventListener("mousedown", onDoc);
    }, []);

    // Avoid initial flicker: compute position before first paint when opening
    React.useLayoutEffect(() => {
      if (isOpen && usePortal) {
        computePosition();
      }
    }, [isOpen, usePortal, computePosition]);

    React.useEffect(() => {
      if (!isOpen || !usePortal) return;
      computePosition();
      const onScroll = () => computePosition();
      const onResize = () => computePosition();
      window.addEventListener("scroll", onScroll, true);
      window.addEventListener("resize", onResize);
      return () => {
        window.removeEventListener("scroll", onScroll, true);
        window.removeEventListener("resize", onResize);
      };
    }, [isOpen, usePortal, computePosition]);

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

    const dropdownList = multiple ? (
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
    ) : (
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
                  onChange?.(stringVal === "" ? null : parseValue(stringVal));
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
                    onChange?.(stringVal === "" ? null : parseValue(stringVal));
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
    );

    const dropdown = isOpen
      ? usePortal
        ? createPortal(
            <div
              ref={portalRef}
              className="min-ui-selectbox-portal"
              style={dropdownStyle}
            >
              {dropdownList}
            </div>,
            document.body
          )
        : dropdownList
      : null;

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
              onClick={() =>
                setIsOpen((s) => {
                  const next = !s;
                  if (next && usePortal) computePosition();
                  return next;
                })
              }
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
            {isOpen && (usePortal ? dropdown : dropdownList)}
          </div>
        ) : (
          <div
            ref={containerRef}
            className="min-ui-selectbox-dropdown-container"
            style={{ height: computedStyle.height }}
          >
            <button
              type="button"
              onClick={() =>
                setIsOpen((s) => {
                  const next = !s;
                  if (next && usePortal) computePosition();
                  return next;
                })
              }
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
            {isOpen && (usePortal ? dropdown : dropdownList)}
          </div>
        )}
        <ValidationMessages visible={isInvalid} messages={validationMessages} />
      </div>
    );
  }
);

SelectBox.displayName = "SelectBox";

export default SelectBox;
