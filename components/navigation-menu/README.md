<h1 align="center">
  @mariomh/navigation-menu
</h1>

<p align="center">
  Estilos, variantes y componentes.
</p>

## Indice

<!-- TOC -->
  * [Indice](#indice)
  * [Instalación](#instalación)
  * [Como usarlo](#como-usarlo)
<!-- TOC -->

## Instalación

```bash
npm install --save @mariomh/navigation-menu
```

**Usando bun**

```bash
bun add @mariomh/navigation-menu
```

## Como usarlo

**Usando Astro**

```astro
---
import { NavigationMenu, NavigationMenuLI, NavigationMenuLink } from '@mariomh/navigation-menu/astro';
---

<NavigationMenu>
  <NavigationMenuLI>
    <NavigationMenuLink
	className='font-secondary'
	href='/#sobre-mi'>
      Sobre mi
    </NavigationMenuLink>
  </NavigationMenuLI>
  <NavigationMenuLI>
    <NavigationMenuLink
	className='font-secondary'
	href='/#portfolio'>
      Portfolio
    </NavigationMenuLink>
  </NavigationMenuLI>
  <NavigationMenuLI>
    <NavigationMenuLink
	className='font-secondary'
	href='/#servicios'>
      Servicios
    </NavigationMenuLink>
  </NavigationMenuLI>
</NavigationMenu>
```

**Usando React**

```tsx
import { NavigationMenu, NavigationMenuLink } from '@mariomh/navigation-menu/astro';
import type { ReactNode } from 'react';

export default function MyComponent(): ReactNode {
  return (
    <NavigationMenu>
      <NavigationMenuLink
	className='font-secondary'
	href='/#sobre-mi'>
        Sobre mi
      </NavigationMenuLink>
      <NavigationMenuLink
	className='font-secondary'
	href='/#portfolio'>
        Portfolio
      </NavigationMenuLink>
      <NavigationMenuLink
	className='font-secondary'
	href='/#servicios'>
        Servicios
      </NavigationMenuLink>
    </NavigationMenu>
  );
}
```
