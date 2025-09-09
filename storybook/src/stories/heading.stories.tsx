import package_ from "@mariomh/heading/package.json";
import component from "@mariomh/heading/react";
import {
  align,
  asChild,
  children,
  heading,
  huge,
  noSelect,
  weight,
} from "@mariomh/storybook/argument-types";
import type { Meta, StoryObj } from "@storybook/react-vite";

import subtitle from "../argument-types/subtitle.argument-types.ts";

const meta = {
  args: {
    children: `Voluptate consequat id voluptate`,
    heading: "h1",
  },
  argTypes: {
    align,
    asChild,
    children,
    heading,
    huge,
    noSelect,
    subtitle,
    weight,
  },
  component,
  parameters: {
    category: "Átomo",
    exports: ["astro", "react"],
    package: (package_ as unknown as { name: string }).name,
  },
  tags: ["autodocs"],
  title: "Átomos/Tipografía/Cabecera",
} as Meta<typeof component>;

const H1: StoryObj<typeof meta> = {
  name: "Cabecera 1",
};

const H2: StoryObj<typeof meta> = {
  args: {
    heading: "h2",
  },
  name: "Cabecera 2",
};

const H3: StoryObj<typeof meta> = {
  args: {
    heading: "h3",
  },
  name: "Cabecera 3",
};

const H4: StoryObj<typeof meta> = {
  args: {
    heading: "h4",
  },
  name: "Cabecera 4",
};

const H5: StoryObj<typeof meta> = {
  args: {
    heading: "h5",
  },
  name: "Cabecera 5",
};

const Huge: StoryObj<typeof meta> = {
  args: {
    children: `Voluptate`,
    heading: "h1",
    huge: true,
  },
  name: "Enorme",
};

const Subtitle: StoryObj<typeof meta> = {
  args: {
    children: `Voluptate`,
    heading: "h1",
    subtitle: true,
  },
  name: "Apagado",
};

export { H1, H2, H3, H4, H5, Huge, Subtitle };

export default meta;
