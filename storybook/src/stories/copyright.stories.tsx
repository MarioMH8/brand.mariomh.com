import package_ from "@mariomh/copyright/package.json";
import component from "@mariomh/copyright/react";
import {
  asChild,
  dimensionFont,
  from,
  noSelect,
  to,
  weight,
} from "@mariomh/storybook/argument-types";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  argTypes: {
    asChild,
    dimension: dimensionFont,
    from,
    noSelect,
    to,
    weight,
  },
  component,
  parameters: {
    category: "Molécula",
    exports: ["astro", "react"],
    package: (package_ as unknown as { name: string }).name,
  },
  tags: ["autodocs"],
  title: "Moléculas/Copyright",
} as Meta<typeof component>;

export const Default: StoryObj<typeof meta> = {
  name: "Por defecto",
};

export default meta;
