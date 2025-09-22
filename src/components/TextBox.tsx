import React, { useEffect } from "react";

export interface TextBoxProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "width" | "height" | "placeholder" | "value" | "defaultValue"
  > {
  validationMessages?: string[] | null | undefined;
  width?: React.CSSProperties["width"];
  height?: React.CSSProperties["height"];
  placeholder?: string;
  text?: string; // initial value
  onInitialized?: (el: HTMLInputElement | null) => void;
}

export const TextBox = React.forwardRef<HTMLInputElement, TextBoxProps>(
  (
    {
      className = "",
      validationMessages,
      width,
      height,
      disabled,
      readOnly,
      style,
      placeholder,
      text,
      onChange,
      onInitialized,
      ...rest
    },
    ref
  ) => {
    const base =
      "block rounded px-3 py-2 text-sm outline-none transition-colors border w-full";
    const normal = "border-zinc-300 focus:border-zinc-400";
    const error = "border-red-500 focus:border-red-600";
    const disabledCls = disabled
      ? "opacity-60 cursor-not-allowed pointer-events-none bg-zinc-100"
      : "";
    const readOnlyCls = readOnly ? "cursor-default bg-zinc-50" : "";

    const computedStyle: React.CSSProperties = {
      ...style,
      ...(width != null ? { width } : {}),
      ...(height != null ? { height } : {}),
    };

    const [value, setValue] = React.useState<string>(text ?? "");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
      onChange?.(e);
    };

    useEffect(() => {
      setValue(text ?? "");
    }, [text]);

    const innerRef = React.useRef<HTMLInputElement | null>(null);
    const setRefs = React.useCallback(
      (node: HTMLInputElement | null) => {
        innerRef.current = node;
        if (typeof ref === "function") ref(node);
        else if (ref)
          (ref as React.MutableRefObject<HTMLInputElement | null>).current =
            node;
      },
      [ref]
    );

    useEffect(() => {
      onInitialized?.(innerRef.current);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const isInvalid = React.useMemo(
      () => Array.isArray(validationMessages) && validationMessages.length > 0,
      [validationMessages]
    );

    return (
      <div className={className} style={{ width: computedStyle.width }}>
        <input
          ref={setRefs}
          disabled={disabled}
          readOnly={readOnly}
          className={`${base} ${isInvalid ? error : normal} ${disabledCls} ${readOnlyCls}`.trim()}
          style={{ ...computedStyle, width: "100%" }}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          {...rest}
        />
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

TextBox.displayName = "TextBox";

export default TextBox;
