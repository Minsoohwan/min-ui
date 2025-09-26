import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import SelectBox from "./SelectBox";
import { action } from "@storybook/addon-actions";

const meta: Meta<typeof SelectBox> = {
  title: "Components/SelectBox",
  component: SelectBox,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  args: {
    items: [
      { value: "a", display: "Alpha" },
      { value: "b", display: "Bravo" },
      { value: "c", display: "Charlie" },
    ],
    multiple: false,
    disabled: false,
    width: "fit-content",
    height: "fit-content",
    validationMessages: null,
  },
  argTypes: {
    onChange: { action: "changed" },
    multiple: { control: "boolean" },
    disabled: { control: "boolean" },
    items: {
      control: "object",
      description: "Array of items to display in the select box",
    },
    width: {
      control: "text",
      description:
        "Width of the select box (CSS value like '200px', '100%', etc.)",
      table: {
        type: { summary: "string | number" },
      },
    },
    height: {
      control: "text",
      description:
        "Height of the select box (CSS value like '40px', 'auto', etc.)",
      table: {
        type: { summary: "string | number" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [val, setVal] = React.useState<string | number | null>(null);
    return (
      <SelectBox
        items={args.items}
        multiple={args.multiple}
        disabled={args.disabled}
        width={args.width}
        height={args.height}
        validationMessages={args.validationMessages}
        value={val}
        onChange={(v) => {
          action("onChange")(v);
          setVal(v);
        }}
      />
    );
  },
};
export const Multiple: Story = {
  args: {
    multiple: true,
  },
  render: (args) => {
    const [val, setVal] = React.useState<Array<string | number>>(["b"]);
    return (
      <SelectBox
        items={args.items}
        multiple={args.multiple}
        disabled={args.disabled}
        width={args.width}
        height={args.height}
        validationMessages={args.validationMessages}
        value={val}
        onChange={(v) => {
          action("onChange")(v);
          setVal((v as any) ?? []);
        }}
      />
    );
  },
};
export const WithValidation: Story = {
  args: {
    validationMessages: ["Selection is required"],
  },
  render: (args) => {
    const [val, setVal] = React.useState<string | number | null>(null);
    return (
      <SelectBox
        items={args.items}
        multiple={args.multiple}
        disabled={args.disabled}
        width={args.width}
        height={args.height}
        validationMessages={args.validationMessages}
        value={val}
        onChange={(v) => {
          action("onChange")(v);
          setVal(v);
        }}
      />
    );
  },
};
export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => (
    <SelectBox
      items={args.items}
      multiple={args.multiple}
      disabled={args.disabled}
      width={args.width}
      height={args.height}
      validationMessages={args.validationMessages}
      value={"a"}
      onChange={action("onChange")}
    />
  ),
};
export const SimpleStringItems: Story = {
  args: {
    items: ["A", "B", "C"],
  },
  render: (args) => {
    const [val, setVal] = React.useState<string | number | null>("B");
    return (
      <SelectBox
        items={args.items}
        multiple={args.multiple}
        disabled={args.disabled}
        width={args.width}
        height={args.height}
        validationMessages={args.validationMessages}
        value={val}
        onChange={(v) => {
          action("onChange")(v);
          setVal(v);
        }}
      />
    );
  },
};
export const NumericItems: Story = {
  args: {
    items: [1, 2, 3],
  },
  render: (args) => {
    const [val, setVal] = React.useState<number | null>(2);
    return (
      <SelectBox
        items={args.items}
        multiple={args.multiple}
        disabled={args.disabled}
        width={args.width}
        height={args.height}
        validationMessages={args.validationMessages}
        value={val}
        onChange={(v) => {
          action("onChange")(v);
          setVal(v as number | null);
        }}
      />
    );
  },
};

export const WithCustomSize: Story = {
  args: {
    width: "300px",
    height: "50px",
  },
  render: (args) => {
    const [val, setVal] = React.useState<string | number | null>(null);
    return (
      <SelectBox
        items={args.items}
        multiple={args.multiple}
        disabled={args.disabled}
        width={args.width}
        height={args.height}
        validationMessages={args.validationMessages}
        value={val}
        onChange={(v) => {
          action("onChange")(v);
          setVal(v);
        }}
      />
    );
  },
};
