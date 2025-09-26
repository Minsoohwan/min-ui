import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import SelectBox from "./SelectBox";
import { action } from "@storybook/addon-actions";

const meta: Meta<typeof SelectBox> = {
  title: "Components/SelectBox",
  component: SelectBox,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    onChange: { action: "changed" },
    multiple: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const items = [
  { value: "a", display: "Alpha" },
  { value: "b", display: "Bravo" },
  { value: "c", display: "Charlie" },
];

export const Default: Story = {
  render: () => {
    const [val, setVal] = React.useState<string | number | null>(null);
    return (
      <SelectBox
        items={items}
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
  render: () => {
    const [val, setVal] = React.useState<Array<string | number>>(["b"]);
    return (
      <SelectBox
        items={items}
        multiple
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
  render: () => {
    const [val, setVal] = React.useState<string | number | null>(null);
    return (
      <SelectBox
        items={items}
        value={val}
        validationMessages={["Selection is required"]}
        onChange={(v) => {
          action("onChange")(v);
          setVal(v);
        }}
      />
    );
  },
};
export const Disabled: Story = {
  render: () => (
    <SelectBox
      items={items}
      value={"a"}
      disabled
      onChange={action("onChange")}
    />
  ),
};
export const SimpleStringItems: Story = {
  render: () => {
    const [val, setVal] = React.useState<string | number | null>("B");
    const simple = ["A", "B", "C"];
    return (
      <SelectBox
        items={simple}
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
  render: () => {
    const [val, setVal] = React.useState<number | null>(2);
    const numeric = [1, 2, 3];
    return (
      <SelectBox
        items={numeric}
        value={val}
        onChange={(v) => {
          action("onChange")(v);
          setVal(v as number | null);
        }}
      />
    );
  },
};
