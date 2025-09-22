import React from "react";

export type ButtonVariant = "primary" | "negative" | "default";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  outline?: boolean;
  text?: string;
  width?: React.CSSProperties["width"];
  visible?: boolean;
  onInitialized?: (el: HTMLButtonElement | null) => void;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      outline = false,
      text = "Button",
      className = "",
      width,
      visible = true,
      disabled,
      onInitialized,
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
    };
    const mode = outline ? "outline" : "solid";
    const isDisabled = Boolean(disabled);
    const disabledClasses = isDisabled
      ? "opacity-60 pointer-events-none cursor-not-allowed"
      : "";

    const computedStyle: React.CSSProperties = {
      ...rest.style,
      ...(width != null ? { width } : {}),
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
      <button
        ref={setRefs}
        disabled={isDisabled}
        className={`${base} ${styles[variant][mode]} ${disabledClasses} ${visible ? "" : "invisible"} ${className}`.trim()}
        style={computedStyle}
        {...rest}
      >
        {text}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
