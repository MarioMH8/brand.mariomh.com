<h1 align="center">
  @mariomh/label
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
npm install --save @mariomh/label
```

**Usando bun**

```bash
bun add @mariomh/label
```

## Como usarlo

Puedes acceder a los variants de las fuentes

```ts
import variants from '@mariomh/label/variants';

const className = variants({
  // Opciones
  weight: 'medium',
});
```

**Usando `class-name`**

```ts
import cn from '@mariomh/label/class-name';

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
import Label from '@mariomh/label/astro';
---

<Label weight='medium'> cupidatat </Label>
```

**Usando React**

```tsx
import Label from '@mariomh/label/react';
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
