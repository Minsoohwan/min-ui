import React from "react";
import CheckBox from "./CheckBox";
import ValidationMessages from "./ValidationMessages";

export interface CheckBoxGroupItem {
  value: any;
  display: string;
  visible?: boolean;
  disabled?: boolean;
}

export interface CheckBoxGroupProps {
  value?: Record<string, boolean | null>;
  items: CheckBoxGroupItem[] | (string | number)[];
  validationMessages?: string[];
  onChange?: (value: Record<string, boolean | null>) => void;
  visible?: boolean;
  width?: React.CSSProperties["width"];
  height?: React.CSSProperties["height"];
  enableThreeState?: boolean;
  onInitialized?: (elements: HTMLInputElement[]) => void;
  disabled?: boolean;
  direction?: "horizontal" | "vertical";
  gap?: string;
}

export const CheckBoxGroup = React.forwardRef<
  HTMLDivElement,
  CheckBoxGroupProps
>(
  (
    {
      value = {},
      items = [],
      validationMessages = [],
      onChange,
      visible = true,
      width,
      height,
      enableThreeState = false,
      onInitialized,
      disabled = false,
      direction = "vertical",
      gap,
    },
    ref
  ) => {
    const [elements, setElements] = React.useState<HTMLInputElement[]>([]);
    const isInvalid = React.useMemo(
      () => Array.isArray(validationMessages) && validationMessages.length > 0,
      [validationMessages]
    );

    React.useEffect(() => {
      if (elements.length === items.length) {
        onInitialized?.(elements);
      }
    }, [elements, items.length, onInitialized]);

    const handleChange =
      (itemValue: any) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = {
          ...value,
          [itemValue]:
            enableThreeState && value[itemValue] === false
              ? null
              : e.target.checked,
        };
        onChange?.(newValue);
      };

    const handleInitialized =
      (index: number) => (el: HTMLInputElement | null) => {
        if (el) {
          setElements((prev) => {
            const next = [...prev];
            next[index] = el;
            return next;
          });
        }
      };

    const processedItems = React.useMemo(() => {
      return items.map((item): CheckBoxGroupItem => {
        if (typeof item === "object" && item !== null) {
          return item as CheckBoxGroupItem;
        }
        return {
          value: item,
          display: String(item),
        };
      });
    }, [items]);

    if (!visible) return null;

    return (
      <div
        ref={ref}
        className={`flex ${
          direction === "horizontal" ? "flex-row" : "flex-col"
        } ${gap ? "" : "gap-2"}`}
        style={{
          width,
          height,
          ...(gap ? { gap } : {}),
        }}
      >
        {processedItems.map((item, index) => (
          <CheckBox
            key={item.value}
            label={item.display}
            value={value[item.value] ?? null}
            onChange={handleChange(item.value)}
            visible={visible || item.visible}
            disabled={disabled || item.disabled}
            enableThreeState={enableThreeState}
            onInitialized={handleInitialized(index)}
          />
        ))}
        <ValidationMessages visible={isInvalid} messages={validationMessages} />
      </div>
    );
  }
);

CheckBoxGroup.displayName = "CheckBoxGroup";

export default CheckBoxGroup;
