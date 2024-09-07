import type { Meta, StoryObj } from "@storybook/react";

import { Footer } from "../Footer";
import { Header } from "../Header";
import { Layout } from "../Layout";

const meta = {
    title: "Layout",
    component: Layout,
} as Meta<typeof Layout>;

export default meta;

type Story = StoryObj<typeof Layout>;

export const Default: Story = {
    args: {
        children: (
            <>
                <Header onItemAdd={() => console.warn("unimplemented")}>Example app</Header>
                <div>Content</div>
                <Footer todoItems={0} doneItems={0} />
            </>
        ),
    },
};
