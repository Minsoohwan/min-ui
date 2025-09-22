import React from "react";

export interface CheckBoxProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "width" | "height" | "value" | "defaultValue"
  > {
  width?: React.CSSProperties["width"];
  height?: React.CSSProperties["height"];
  visible?: boolean;
  value?: boolean | null; // tri-state: true/false/null
  enableThreeState?: boolean;
  label?: React.ReactNode;
  onInitialized?: (el: HTMLInputElement | null) => void;
  validationMessages?: string[] | undefined | null;
}

export const CheckBox = React.forwardRef<HTMLInputElement, CheckBoxProps>(
  (
    {
      className = "",
      width,
      height,
      disabled,
      visible = true,
      value,
      enableThreeState,
      defaultChecked,
      onChange,
      onInitialized,
      style,
      label,
      validationMessages = [], // 추가
      ...rest
    },
    ref
  ) => {
    const computedStyle: React.CSSProperties = {
      ...style,
      ...(width != null ? { width } : {}),
      ...(height != null ? { height } : {}),
    };

    const [triState, setTriState] = React.useState<boolean | null>(
      enableThreeState && value === null
        ? null
        : typeof value === "boolean"
          ? value
          : Boolean(defaultChecked)
    );

    // Sync internal state only when prop 'value' changes
    React.useEffect(() => {
      if (enableThreeState && value === null) {
        setTriState((prev) => (prev === null ? prev : null));
      } else if (typeof value === "boolean") {
        setTriState((prev) => (prev === value ? prev : value));
      }
    }, [value, enableThreeState]);

    // Recompute visualization state based on current triState (no native indeterminate)
    React.useEffect(() => {
      setIsIndeterminateVisual(Boolean(enableThreeState && triState === null));
    }, [enableThreeState, triState]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setTriState(e.target.checked);
      onChange?.(e);
    };

    const isInvalid = React.useMemo(
      () => Array.isArray(validationMessages) && validationMessages.length > 0,
      [validationMessages]
    );
    const base = "inline-flex items-center gap-2 select-none text-sm";
    const boxClass = [
      "border",
      disabled
        ? "opacity-60 cursor-not-allowed pointer-events-none"
        : "cursor-pointer",
    ]
      .filter(Boolean)
      .join(" ");

    const innerRef = React.useRef<HTMLInputElement | null>(null);
    const setRefs = (node: HTMLInputElement | null) => {
      innerRef.current = node;
      if (typeof ref === "function") ref(node);
      else if (ref)
        (ref as React.MutableRefObject<HTMLInputElement | null>).current = node;
    };

    React.useEffect(() => {
      onInitialized?.(innerRef.current);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [isIndeterminateVisual, setIsIndeterminateVisual] =
      React.useState<boolean>(Boolean(enableThreeState && triState === null));

    React.useEffect(() => {
      setIsIndeterminateVisual(Boolean(enableThreeState && triState === null));
    }, [enableThreeState, triState]);

    return (
      <div style={{ width: computedStyle.width }}>
        <label
          className={`${base} ${visible ? "" : "invisible"} ${className}`.trim()}
        >
          <span className="relative inline-flex items-center">
            <input
              ref={setRefs}
              type="checkbox"
              checked={Boolean(triState)}
              onChange={handleChange}
              disabled={disabled}
              className={boxClass}
              style={{ ...computedStyle, width: undefined }}
              {...rest}
            />
            {isIndeterminateVisual ? (
              <span
                aria-hidden
                className={`pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-1/2 w-1/2 ${
                  disabled ? "bg-zinc-300" : "bg-blue-500"
                }`}
              />
            ) : null}
          </span>
          {label}
        </label>
        {isInvalid ? (
          <div className="mt-1 space-y-0.5">
            {validationMessages!.map((msg, idx) => (
              <div key={idx} className="text-xs text-red-600">
                {msg}
              </div>
            ))}
          </div>
        ) : null}
      </div>
    );
  }
);

CheckBox.displayName = "CheckBox";

export default CheckBox;
