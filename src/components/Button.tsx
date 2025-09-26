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
    const base =
      "inline-flex items-center justify-center rounded px-3 py-2 text-sm font-medium transition-colors";
    const styles: Record<ButtonVariant, { solid: string; outline: string }> = {
      primary: {
        solid: "bg-blue-500 text-white hover:bg-blue-600",
        outline:
          "bg-transparent text-blue-600 border border-blue-600 hover:bg-blue-50",
      },
      negative: {
        solid: "bg-red-500 text-white hover:bg-red-600",
        outline:
          "bg-transparent text-red-600 border border-red-600 hover:bg-red-50",
      },
      default: {
        solid: "bg-zinc-100 text-zinc-900 hover:bg-zinc-200",
        outline:
          "bg-transparent text-zinc-900 border border-zinc-300 hover:bg-zinc-50",
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
      ? "opacity-60 pointer-events-none cursor-not-allowed"
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
      <div className={className} style={{ width: computedStyle.width }}>
        <button
          ref={setRefs}
          disabled={isDisabled}
          className={`${base} ${styles[variant][mode]} ${disabledClasses} ${visible ? "" : "invisible"} ${
            isInvalid ? "ring-1 ring-red-500" : ""
          }`.trim()}
          style={{
            ...computedStyle,
            width: "100%",
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
