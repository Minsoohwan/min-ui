import React from "react";
import ValidationMessages from "./ValidationMessages";

export type ButtonVariant = "primary" | "negative" | "default" | "custom";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  outline?: boolean;
  text?: string;
  width?: React.CSSProperties["width"];
  visible?: boolean;
  validationMessages?: string[] | null | undefined;
  onInitialized?: (el: HTMLButtonElement | null) => void;
  color?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "custom",
      outline = false,
      text = "Button",
      className = "",
      width,
      visible = true,
      disabled,
      validationMessages,
      onInitialized,
      color,
      ...rest
    }: ButtonProps,
    ref
  ) => {
    const base = "min-ui-button";
    const styles: Record<ButtonVariant, { solid: string; outline: string }> = {
      primary: {
        solid: "min-ui-button-primary",
        outline: "min-ui-button-primary-outline",
      },
      negative: {
        solid: "min-ui-button-negative",
        outline: "min-ui-button-negative-outline",
      },
      default: {
        solid: "min-ui-button-default",
        outline: "min-ui-button-default-outline",
      },
      custom: {
        solid: "",
        outline: "",
      },
    };
    const mode = React.useMemo(
      () => (outline ? "outline" : "solid"),
      [outline]
    );
    const isInvalid = React.useMemo(
      () => Array.isArray(validationMessages) && validationMessages.length > 0,
      [validationMessages]
    );
    const isDisabled = Boolean(disabled);
    const disabledClasses = isDisabled
      ? "min-ui-opacity-60 min-ui-pointer-events-none min-ui-cursor-not-allowed"
      : "";

    const computedStyle: React.CSSProperties = {
      ...rest.style,
      ...(width != null ? { width } : { width: "100%" }),
    };

    const innerRef = React.useRef<HTMLButtonElement | null>(null);
    const setRefs = (node: HTMLButtonElement | null) => {
      innerRef.current = node;
      if (typeof ref === "function") ref(node);
      else if (ref)
        (ref as React.MutableRefObject<HTMLButtonElement | null>).current =
          node;
    };

    React.useEffect(() => {
      onInitialized?.(innerRef.current);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <div
        className={`min-ui-button-wrapper ${className}`}
        style={{ width: computedStyle.width }}
      >
        <button
          ref={setRefs}
          disabled={isDisabled}
          className={`${base} ${styles[variant][mode]} ${disabledClasses} ${visible ? "" : "min-ui-invisible"} ${
            isInvalid ? "min-ui-button-invalid" : ""
          }`.trim()}
          style={{
            ...(variant === "custom" &&
              color && {
                backgroundColor: outline ? "transparent" : color,
                color: outline ? color : "white",
                borderColor: color,
                borderWidth: outline ? "1px" : undefined,
              }),
          }}
          {...rest}
        >
          {text}
        </button>
        <ValidationMessages visible={isInvalid} messages={validationMessages} />
      </div>
    );
  }
);

Button.displayName = "Button";

export default Button;
