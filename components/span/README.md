<h1 align="center">
  @mariomh/span
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
npm install --save @mariomh/span
```

**Usando bun**

```bash
bun add @mariomh/span
```

## Como usarlo

Puedes acceder a los variants de las fuentes

```ts
import variants from '@mariomh/span/variants';

const className = variants({
  // Opciones
  variant: 'bright',
});
```

**Usando `class-name`**

```ts
import cn from '@mariomh/span/class-name';

const className = cn(
  {
    // Opciones
    variant: 'bright',
  },
  'uppercase'
);
```

**Usando Astro**

```astro
---
import Span from '@mariomh/span/astro';
---

<Span variant='bright'> cupidatat </Span>
```

**Usando React**

```tsx
import Span from '@mariomh/span/react';
import type { ReactNode } from 'react';

export default function MyComponent(): ReactNode {
  return <Span variant='bright'>cupidatat</Span>;
}
```

## Variantes

| Variante    | Descripción                               | Valores                                                                            |
|-------------|-------------------------------------------|------------------------------------------------------------------------------------|
| `dimension` | Cambia el tamaño de la fuente             | `unset`, `xs`, `sm`, `base`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`, `6xl`, `huge` |
| `noSelect`  | Evita que el texto sea seleccionado       | `true`                                                                             |
| `variant`   | Cambia la variante de la fuente           | `bright`, `muted`                                                                  |
| `weight`    | Establece el peso de la fuente            | `light`, `base`, `medium`, `bold`                                                  |
