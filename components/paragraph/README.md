<h1 align="center">
  @mariomh8/paragraph
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
npm install --save @mariomh8/paragraph
```

**Usando bun**

```bash
bun add @mariomh8/paragraph
```

## Como usarlo

Puedes acceder a los variants de las fuentes

```ts
import variants from '@mariomh8/paragraph/variants';

const className = variants({
  // Opciones
  dimension: 'sm',
});
```

**Usando `class-name`**

```ts
import cn from '@mariomh8/paragraph/class-name';

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
import Paragraph from '@mariomh8/paragraph/astro';
---

<Paragraph dimension='sm'> cupidatat </Paragraph>
```

**Usando React**

```tsx
import Paragraph from '@mariomh8/paragraph/react';
import type { ReactNode } from 'react';

export default function MyComponent(): ReactNode {
  return <Paragraph dimension='sm'>cupidatat</Paragraph>;
}
```

## Variantes

| Variante    | Descripción                              | Valores                                                                            |
|-------------|------------------------------------------|------------------------------------------------------------------------------------|
| `align`     | Alineamiento del texto                   | `start`, `center`, `end`                                                           |
| `dimension` | Cambia el tamaño de la fuente            | `unset`, `xs`, `sm`, `base`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`, `6xl`, `huge` |
| `noSelect`  | Evita que el texto sea seleccionado      | `true`                                                                             |
| `variant`   | Cambia la variante de la fuente          | `bright`, `muted`                                                                  |
| `weight`    | Establece el peso de la fuente           | `light`, `base`, `medium`, `bold`                                                  |
| `wrap`       | No limitar la anchura máxima del parrafo | `true`, `false`                                                                      |
