import type { Meta, StoryObj } from "@storybook/react";
import { CheckBox } from "./CheckBox";

const meta: Meta<typeof CheckBox> = {
  title: "Components/CheckBox",
  component: CheckBox,
  tags: ["autodocs"],
  args: {
    label: "동의합니다",
    disabled: false,
    visible: true,
    width: "fit-content",
    height: "fit-content",
    value: false,
    enableThreeState: false,
    validationMessages: [],
  },
  argTypes: {
    onChange: { action: "change" },
    onInitialized: { action: "initialized" },
    validationMessages: { control: "object" },
  },
};

export default meta;
type Story = StoryObj<typeof CheckBox>;

export const Basic: Story = {
  args: {},
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const Checked: Story = {
  args: { value: true },
};

export const Hidden: Story = {
  args: { visible: false },
};

export const Sized: Story = {
  args: { width: 200, height: 24 },
};

export const Indeterminate: Story = {
  args: { enableThreeState: true, value: null, label: "부분 선택" },
};

export const WithValidation: Story = {
  args: { validationMessages: ["유효하지 않습니다."] },
};
