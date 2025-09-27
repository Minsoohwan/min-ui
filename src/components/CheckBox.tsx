import React from "react";
import ValidationMessages from "./ValidationMessages";

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
      ...(width != null ? { width } : { width: "100%" }),
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
    const base = "min-ui-checkbox-container";
    const boxClass = [
      "min-ui-checkbox",
      disabled
        ? "min-ui-opacity-60 min-ui-cursor-not-allowed min-ui-pointer-events-none"
        : "min-ui-cursor-pointer",
      isInvalid ? "error" : "",
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
      <div
        className="min-ui-checkbox-wrapper"
        style={{ width: computedStyle.width }}
      >
        <label
          className={`${base} min-ui-checkbox-label ${visible ? "" : "min-ui-invisible"} ${disabled ? "disabled" : ""} ${className}`.trim()}
        >
          <span className="min-ui-relative min-ui-inline-flex min-ui-items-center">
            <input
              ref={setRefs}
              type="checkbox"
              checked={Boolean(triState)}
              onChange={handleChange}
              disabled={disabled}
              className={boxClass}
              style={{ ...computedStyle, width: undefined, height: undefined }}
              {...rest}
            />
            {isIndeterminateVisual ? (
              <span
                aria-hidden
                className={`min-ui-checkbox-indeterminate ${
                  disabled ? "disabled" : ""
                }`}
              />
            ) : null}
          </span>
          <span className="min-ui-checkbox-label-text">{label}</span>
        </label>
        <ValidationMessages visible={isInvalid} messages={validationMessages} />
      </div>
    );
  }
);

CheckBox.displayName = "CheckBox";

export default CheckBox;
