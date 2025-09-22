import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    text: "Button",
    disabled: false,
    outline: false,
    width: "fit-content",
    visible: true,
  },
  argTypes: {
    onInitialized: { action: "initialized" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { variant: "primary" },
};

export const Negative: Story = {
  args: { variant: "negative" },
};

export const Default: Story = {
  args: { variant: "default" },
};
