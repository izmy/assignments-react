import type { Meta, StoryObj } from "@storybook/react";

import { HomeIcon, Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import { Button } from "../Button";

const meta = {
    title: "Button",
    component: Button,
    argTypes: {
        onItemDelete: { action: "removed" },
        onItemLabelEdit: { action: "edited" },
    },
} as Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof Button>;
export const BasicButton: Story = {
    args: {
        children: "Button",
    },
};
export const PrimaryButton: Story = {
    args: {
        children: <Pencil1Icon />,
        intent: "primary",
    },
};

export const SecondaryButton: Story = {
    args: {
        children: <HomeIcon />,
        intent: "secondary",
    },
};

export const DangerButton: Story = {
    args: {
        children: <TrashIcon />,
        intent: "danger",
    },
};
