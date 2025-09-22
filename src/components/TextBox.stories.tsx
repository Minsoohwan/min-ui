import type { Meta, StoryObj } from "@storybook/react";
import { TextBox } from "./TextBox";

const meta: Meta<typeof TextBox> = {
  title: "Components/TextBox",
  component: TextBox,
  tags: ["autodocs"],
  args: {
    placeholder: "값을 입력하세요",
    disabled: false,
    readOnly: false,
    width: "fit-content",
    height: "fit-content",
    text: "",
    validationMessages: null,
  },
  argTypes: {
    onChange: { action: "change" },
    onInitialized: { action: "initialized" },
    validationMessages: { control: "object" },
  },
};

export default meta;
type Story = StoryObj<typeof TextBox>;

export const Basic: Story = {
  args: { text: "" },
};

export const WithValidation: Story = {
  args: { validationMessages: ["값을 입력해주세요."] },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const ReadOnly: Story = {
  args: { readOnly: true, text: "읽기 전용입니다" },
};

export const Sized: Story = {
  args: { width: "320px", height: "44px" },
};
