<h1 align="center">
  @mariomh8/label
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
npm install --save @mariomh8/label
```

**Usando bun**

```bash
bun add @mariomh8/label
```

## Como usarlo

Puedes acceder a los variants de las fuentes

```ts
import variants from '@mariomh8/label/variants';

const className = variants({
  // Opciones
  weight: 'medium',
});
```

**Usando `class-name`**

```ts
import cn from '@mariomh8/label/class-name';

const className = cn(
  {
    // Opciones
    weight: 'medium',
  },
  'uppercase'
);
```

**Usando Astro**

```astro
---
import Label from '@mariomh8/label/astro';
---

<Label weight='medium'> cupidatat </Label>
```

**Usando React**

```tsx
import Label from '@mariomh8/label/react';
import type { ReactNode } from 'react';

export default function MyComponent(): ReactNode {
  return <Label weight='medium'>cupidatat</Label>;
}
```

## Variantes

| Variante    | Descripción                               | Valores                                                                            |
|-------------|-------------------------------------------|------------------------------------------------------------------------------------|
| `dimension` | Cambia el tamaño de la fuente             | `unset`, `xs`, `sm`, `base`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`, `6xl`, `huge` |
| `noSelect`  | Evita que el texto sea seleccionado       | `true`                                                                             |
| `weight`    | Establece el peso de la fuente            | `light`, `base`, `medium`, `bold`                                                  |
