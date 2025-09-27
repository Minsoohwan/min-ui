import React, { useEffect } from "react";
import ValidationMessages from "./ValidationMessages";

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
    const base = "min-ui-textbox";
    const normal = "";
    const error = "min-ui-textbox-error";
    const disabledCls = disabled
      ? "min-ui-opacity-60 min-ui-cursor-not-allowed min-ui-pointer-events-none"
      : "";
    const readOnlyCls = readOnly ? "min-ui-cursor-default" : "";

    const computedStyle: React.CSSProperties = {
      ...style,
      ...(width != null ? { width } : { width: "100%" }),
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
      <div
        className={`min-ui-textbox-wrapper ${className}`}
        style={{ width: computedStyle.width }}
      >
        <input
          ref={setRefs}
          disabled={disabled}
          readOnly={readOnly}
          className={`${base} ${isInvalid ? error : normal} ${disabledCls} ${readOnlyCls}`.trim()}
          style={{ height: computedStyle.height }}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          {...rest}
        />
        <ValidationMessages visible={isInvalid} messages={validationMessages} />
      </div>
    );
  }
);

TextBox.displayName = "TextBox";

export default TextBox;
