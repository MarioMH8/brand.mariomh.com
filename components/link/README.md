<h1 align="center">
  @mariomh/link
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
npm install --save @mariomh/link
```

**Usando bun**

```bash
bun add @mariomh/link
```

## Como usarlo

Puedes acceder a los variants de las fuentes

```ts
import variants from '@mariomh/link/variants';

const className = variants({
  // Opciones
  dimension: 'sm',
});
```

**Usando `class-name`**

```ts
import cn from '@mariomh/link/class-name';

const className = cn(
  {
    // Opciones
    dimension: 'sm',
  },
  'uppercase'
);
```

**Usando Astro**

```astro
---
import Link from '@mariomh/link/astro';
---

<Link dimension='sm'> cupidatat </Link>
```

**Usando React**

```tsx
import Link from '@mariomh/link/react';
import type { ReactNode } from 'react';

export default function MyComponent(): ReactNode {
  return <Link dimension='sm'>cupidatat</Link>;
}
```

## Variantes

| Variante    | Descripción                               | Valores                                                                            |
|-------------|-------------------------------------------|------------------------------------------------------------------------------------|
| `dimension` | Cambia el tamaño de la fuente             | `unset`, `xs`, `sm`, `base`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`, `6xl`, `huge` |
| `noSelect`  | Evita que el texto sea seleccionado       | `true`                                                                             |
| `weight`    | Establece el peso de la fuente            | `light`, `base`, `medium`, `bold`                                                  |
