import package_ from "@mariomh/span/package.json";
import component from "@mariomh/span/react";
import {
  asChild,
  children,
  dimensionFont,
  noSelect,
  variantFont,
  weight,
} from "@mariomh/storybook/argument-types";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  args: {
    children: "exercitation",
  },
  argTypes: {
    asChild,
    children,
    dimension: dimensionFont,
    noSelect,
    variant: variantFont,
    weight,
  },
  component,
  parameters: {
    category: "Átomo",
    exports: ["astro", "react"],
    package: (package_ satisfies unknown satisfies { name: string }).name,
  },
  tags: ["autodocs"],
  title: "Átomos/Tipografía/Texto",
} satisfies Meta<typeof component>;

const Default: StoryObj<typeof meta> = {
  name: "Por defecto",
};

const Bright: StoryObj<typeof meta> = {
  args: {
    variant: "bright",
  },
  name: "Vívido",
};

const Muted: StoryObj<typeof meta> = {
  args: {
    variant: "muted",
  },
  name: "Apagado",
};

export { Default, Bright, Muted };

export default meta;
