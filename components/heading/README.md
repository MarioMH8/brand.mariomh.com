<h1 align="center">
  @mariomh/heading
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
npm install --save @mariomh/heading
```

**Usando bun**

```bash
bun add @mariomh/heading
```

## Como usarlo

Puedes acceder a los variants de las fuentes

```ts
import variants from '@mariomh/heading/variants';

const className = variants({
  heading: 'h1',
  // Opciones
  intent: 'primary',
});
```

**Usando `class-name`**

```ts
import cn from '@mariomh/heading/class-name';

const className = cn(
  {
    heading: 'h1',
    // Opciones
    intent: 'primary',
  },
  'uppercase'
);
```

**Usando Astro**

```astro
---
import Heading from '@mariomh/heading/astro';
---

<Heading heading='h1'> cupidatat </Heading>
```

**Usando React**

```tsx
import Heading from '@mariomh/heading/react';
import type { ReactNode } from 'react';

export default function MyComponent(): ReactNode {
  return <Heading heading='h1'>cupidatat</Heading>;
}
```

## Variantes

| Variante   | Descripción                         | Valores                           |
|------------|-------------------------------------|-----------------------------------|
| `align`    | Alineamiento del texto              | `start`, `center`, `end`          |
| `noSelect` | Evita que el texto sea seleccionado | `true`                            |
| `heading`  | Jerarquía de la cabecera            | `h1`, `h2`, `h3`, `h4`, `h5`      |
| `huge`     | Haz la cabecera enorme              | `true`                            |
| `subtitle` | Variante de subtítulo               | `true`                            |
| `weight`   | Establece el peso de la fuente      | `light`, `base`, `medium`, `bold` |
