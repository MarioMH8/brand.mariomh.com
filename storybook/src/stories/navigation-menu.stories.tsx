import package_ from "@mariomh/navigation-menu/package.json";
import {
  NavigationMenu,
  NavigationMenuLink,
} from "@mariomh/navigation-menu/react";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  component: NavigationMenu,
  parameters: {
    category: "Átomo",
    exports: ["astro", "react"],
    import: `import { NavigationMenu, NavigationMenuLink } from '@mariomh/navigation-menu/react';`,
    package: (package_ satisfies unknown satisfies { name: string }).name,
  },
  render: (properties) => (
    <NavigationMenu {...properties}>
      <NavigationMenuLink href="#">Inicio</NavigationMenuLink>
      <NavigationMenuLink href="#">Servicios</NavigationMenuLink>
      <NavigationMenuLink active href="#">
        Blog
      </NavigationMenuLink>
    </NavigationMenu>
  ),
  tags: ["autodocs"],
  title: "Organismos/Menú de navegación",
} satisfies Meta<typeof NavigationMenu>;

const Default: StoryObj<typeof meta> = {
  name: "Por defecto",
};

export { Default };

export default meta;
