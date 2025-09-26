import type { Meta, StoryObj } from "@storybook/react";
import { CheckBoxGroup } from "./CheckBoxGroup";
import type { CheckBoxGroupProps } from "./CheckBoxGroup";
import { action } from "@storybook/addon-actions";
import React from "react";

const meta: Meta<typeof CheckBoxGroup> = {
  title: "Components/CheckBoxGroup",
  component: CheckBoxGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ padding: "1rem" }}>
        <Story />
      </div>
    ),
  ],
  args: {
    items: [
      { value: "1", display: "Option 1" },
      { value: "2", display: "Option 2" },
      { value: "3", display: "Option 3" },
    ],
    direction: "vertical",
    gap: "0.5rem",
    width: "fit-content",
    height: "fit-content",
    disabled: false,
    enableThreeState: false,
  },
  argTypes: {
    onChange: { action: "changed" },
    direction: {
      control: "radio",
      options: ["horizontal", "vertical"],
      description: "Layout direction of checkboxes",
    },
    gap: {
      control: "text",
      description: 'CSS gap value (e.g., "1rem", "10px")',
    },
    items: {
      control: "object",
      description: "Array of items to display as checkboxes",
    },
    width: {
      control: "text",
      description: "Width of the checkbox group (CSS value)",
      table: {
        type: { summary: "string | number" },
      },
    },
    height: {
      control: "text",
      description: "Height of the checkbox group (CSS value)",
      table: {
        type: { summary: "string | number" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof CheckBoxGroup>;

export const Default: Story = {
  render: function Render(args) {
    const [value, setValue] = React.useState<Record<string, boolean | null>>({
      "1": false,
      "2": true,
      "3": false,
    });

    const handleChange: CheckBoxGroupProps["onChange"] = (newValue) => {
      args.onChange?.(newValue);
      setValue(newValue);
    };

    return (
      <CheckBoxGroup
        items={args.items}
        {...(args.direction && { direction: args.direction })}
        {...(args.gap && { gap: args.gap })}
        width={args.width}
        height={args.height}
        {...(args.disabled !== undefined && { disabled: args.disabled })}
        {...(args.enableThreeState !== undefined && {
          enableThreeState: args.enableThreeState,
        })}
        {...(args.validationMessages && {
          validationMessages: args.validationMessages,
        })}
        value={value}
        onChange={handleChange}
      />
    );
  },
};

export const WithValidation: Story = {
  args: {
    validationMessages: ["Please select at least one option"],
  },
  render: function Render(args) {
    const [value, setValue] = React.useState<Record<string, boolean | null>>({
      "1": false,
      "2": false,
      "3": false,
    });

    const handleChange: CheckBoxGroupProps["onChange"] = (newValue) => {
      args.onChange?.(newValue);
      setValue(newValue);
    };

    return (
      <CheckBoxGroup
        items={args.items}
        {...(args.direction && { direction: args.direction })}
        {...(args.gap && { gap: args.gap })}
        width={args.width}
        height={args.height}
        {...(args.disabled !== undefined && { disabled: args.disabled })}
        {...(args.enableThreeState !== undefined && {
          enableThreeState: args.enableThreeState,
        })}
        {...(args.validationMessages && {
          validationMessages: args.validationMessages,
        })}
        value={value}
        onChange={handleChange}
      />
    );
  },
};

export const ThreeState: Story = {
  args: {
    enableThreeState: true,
  },
  render: (args) => {
    const [value, setValue] = React.useState<Record<string, boolean | null>>({
      "1": true,
      "2": null,
      "3": false,
    });
    return (
      <CheckBoxGroup
        items={args.items}
        {...(args.direction && { direction: args.direction })}
        {...(args.gap && { gap: args.gap })}
        width={args.width}
        height={args.height}
        {...(args.disabled !== undefined && { disabled: args.disabled })}
        {...(args.enableThreeState !== undefined && {
          enableThreeState: args.enableThreeState,
        })}
        {...(args.validationMessages && {
          validationMessages: args.validationMessages,
        })}
        value={value}
        onChange={(newValue) => {
          args.onChange?.(newValue);
          setValue(newValue);
        }}
      />
    );
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: function Render(args) {
    return (
      <CheckBoxGroup
        items={args.items}
        {...(args.direction && { direction: args.direction })}
        {...(args.gap && { gap: args.gap })}
        width={args.width}
        height={args.height}
        {...(args.disabled !== undefined && { disabled: args.disabled })}
        {...(args.enableThreeState !== undefined && {
          enableThreeState: args.enableThreeState,
        })}
        {...(args.validationMessages && {
          validationMessages: args.validationMessages,
        })}
        value={{ "1": true, "2": false, "3": true }}
        onChange={(value) => args.onChange?.(value)}
      />
    );
  },
};

export const WithSomeDisabled: Story = {
  args: {
    items: [
      { value: "1", display: "Option 1" },
      { value: "2", display: "Option 2", disabled: true },
      { value: "3", display: "Option 3" },
    ],
  },
  render: (args) => {
    const [value, setValue] = React.useState<Record<string, boolean | null>>({
      "1": true,
      "2": false,
      "3": true,
    });
    return (
      <CheckBoxGroup
        items={args.items}
        {...(args.direction && { direction: args.direction })}
        {...(args.gap && { gap: args.gap })}
        width={args.width}
        height={args.height}
        {...(args.disabled !== undefined && { disabled: args.disabled })}
        {...(args.enableThreeState !== undefined && {
          enableThreeState: args.enableThreeState,
        })}
        {...(args.validationMessages && {
          validationMessages: args.validationMessages,
        })}
        value={value}
        onChange={(newValue) => {
          args.onChange?.(newValue);
          setValue(newValue);
        }}
      />
    );
  },
};

export const WithCustomWidth: Story = {
  args: {
    width: 300,
  },
  render: (args) => {
    const [value, setValue] = React.useState<Record<string, boolean | null>>({
      "1": true,
      "2": false,
      "3": false,
    });
    return (
      <CheckBoxGroup
        items={args.items}
        {...(args.direction && { direction: args.direction })}
        {...(args.gap && { gap: args.gap })}
        width={args.width}
        height={args.height}
        {...(args.disabled !== undefined && { disabled: args.disabled })}
        {...(args.enableThreeState !== undefined && {
          enableThreeState: args.enableThreeState,
        })}
        {...(args.validationMessages && {
          validationMessages: args.validationMessages,
        })}
        value={value}
        onChange={(newValue) => {
          args.onChange?.(newValue);
          setValue(newValue);
        }}
      />
    );
  },
};

export const HorizontalLayout: Story = {
  args: {
    direction: "horizontal",
    gap: "2rem",
  },
  render: (args) => {
    const [value, setValue] = React.useState<Record<string, boolean | null>>({
      "1": true,
      "2": false,
      "3": false,
    });
    return (
      <CheckBoxGroup
        items={args.items}
        {...(args.direction && { direction: args.direction })}
        {...(args.gap && { gap: args.gap })}
        width={args.width}
        height={args.height}
        {...(args.disabled !== undefined && { disabled: args.disabled })}
        {...(args.enableThreeState !== undefined && {
          enableThreeState: args.enableThreeState,
        })}
        {...(args.validationMessages && {
          validationMessages: args.validationMessages,
        })}
        value={value}
        onChange={(newValue) => {
          args.onChange?.(newValue);
          setValue(newValue);
        }}
      />
    );
  },
};

export const CustomGap: Story = {
  args: {
    gap: "3rem",
  },
  render: (args) => {
    const [value, setValue] = React.useState<Record<string, boolean | null>>({
      "1": true,
      "2": false,
      "3": false,
    });
    return (
      <CheckBoxGroup
        items={args.items}
        {...(args.direction && { direction: args.direction })}
        {...(args.gap && { gap: args.gap })}
        width={args.width}
        height={args.height}
        {...(args.disabled !== undefined && { disabled: args.disabled })}
        {...(args.enableThreeState !== undefined && {
          enableThreeState: args.enableThreeState,
        })}
        {...(args.validationMessages && {
          validationMessages: args.validationMessages,
        })}
        value={value}
        onChange={(newValue) => {
          args.onChange?.(newValue);
          setValue(newValue);
        }}
      />
    );
  },
};
