<h1 align="center">
  @mariomh8/logo
</h1>

<p align="center">
  Estilos, variantes y componentes.
</p>

## Indice

<!-- TOC -->
  * [Indice](#indice)
  * [Instalación](#instalación)
  * [Como usarlo](#como-usarlo)
  * [Variantes](#variantes)
<!-- TOC -->

## Instalación

```bash
npm install --save @mariomh8/logo
```

**Usando bun**

```bash
bun add @mariomh8/logo
```

## Como usarlo

**Usando Astro**

```astro
---
import Logo from '@mariomh8/logo/astro';
---

<Logo dimension='sm' />
```

**Usando React**

```tsx
import Logo from '@mariomh8/logo/react';
import type { ReactNode } from 'react';

export default function MyComponent(): ReactNode {
  return <Logo dimension='sm' />;
}
```

## Variantes

| Variante    | Descripción                         | Valores                    |
|-------------|-------------------------------------|----------------------------|
| `dimension` | Cambia el tamaño de la fuente       | `xs`, `sm`, `base`, `lg`   |
| `isotipo`   | Evita que el texto sea seleccionado | `dark`, `light`, `primary` |
| `logotipo`  | Establece el peso de la fuente      | `dark`, `light`, `primary` |
| `variant`   | Establece el peso de la fuente      | `isotipo`, `logotipo`      |
