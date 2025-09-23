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
  decorators: [
    (Story) => (
      <div style={{ padding: "1rem" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof CheckBoxGroup>;

const items = [
  { value: "1", display: "Option 1" },
  { value: "2", display: "Option 2" },
  { value: "3", display: "Option 3" },
];

export const Default: Story = {
  render: function Render() {
    const [value, setValue] = React.useState<Record<string, boolean | null>>({
      "1": false,
      "2": true,
      "3": false,
    });

    const handleChange: CheckBoxGroupProps["onChange"] = (newValue) => {
      action("onChange")(newValue);
      setValue(newValue);
    };

    return (
      <CheckBoxGroup items={items} value={value} onChange={handleChange} />
    );
  },
};

export const WithValidation: Story = {
  render: function Render() {
    const [value, setValue] = React.useState<Record<string, boolean | null>>({
      "1": false,
      "2": false,
      "3": false,
    });

    const handleChange: CheckBoxGroupProps["onChange"] = (newValue) => {
      action("onChange")(newValue);
      setValue(newValue);
    };

    return (
      <CheckBoxGroup
        items={items}
        value={value}
        onChange={handleChange}
        validationMessages={["Please select at least one option"]}
      />
    );
  },
};

export const ThreeState: Story = {
  render: () => {
    const [value, setValue] = React.useState<Record<string, boolean | null>>({
      "1": true,
      "2": null,
      "3": false,
    });
    return (
      <CheckBoxGroup
        items={items}
        value={value}
        onChange={(newValue) => {
          action("onChange")(newValue);
          setValue(newValue);
        }}
        enableThreeState
      />
    );
  },
};

export const Disabled: Story = {
  render: function Render() {
    return (
      <CheckBoxGroup
        items={items}
        value={{ "1": true, "2": false, "3": true }}
        disabled
        onChange={(value) => action("onChange")(value)}
      />
    );
  },
};

export const WithSomeDisabled: Story = {
  render: () => {
    const [value, setValue] = React.useState<Record<string, boolean | null>>({
      "1": true,
      "2": false,
      "3": true,
    });
    return (
      <CheckBoxGroup
        items={[
          { value: "1", display: "Option 1" },
          { value: "2", display: "Option 2", disabled: true },
          { value: "3", display: "Option 3" },
        ]}
        value={value}
        onChange={(newValue) => {
          action("onChange")(newValue);
          setValue(newValue);
        }}
      />
    );
  },
};

export const WithCustomWidth: Story = {
  render: () => {
    const [value, setValue] = React.useState<Record<string, boolean | null>>({
      "1": true,
      "2": false,
      "3": false,
    });
    return (
      <CheckBoxGroup
        items={items}
        value={value}
        width={300}
        onChange={(newValue) => {
          action("onChange")(newValue);
          setValue(newValue);
        }}
      />
    );
  },
};
