<h1 align="center">
  @mariomh/select
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
npm install --save @mariomh/select
```

**Usando bun**

```bash
bun add @mariomh/select
```

## Como usarlo

Puedes acceder a los variants de las fuentes

```ts
import variants from '@mariomh/select/variants';

const className = variants({
  // Opciones
  dimension: 'sm',
});
```

**Usando `class-name`**

```ts
import cn from '@mariomh/select/class-name';

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
import Select from '@mariomh/select/astro';
---

<Select dimension='sm'> cupidatat </Select>
```

**Usando React**

```tsx
import Select from '@mariomh/select/react';
import type { ReactNode } from 'react';

export default function MyComponent(): ReactNode {
  return <Select dimension='sm'>cupidatat</Select>;
}
```

## Variantes

| Variante    | Descripción                         | Valores                                                                            |
|-------------|-------------------------------------|------------------------------------------------------------------------------------|
| `dimension` | Cambia el tamaño de la fuente       | `unset`, `xs`, `sm`, `base`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`, `6xl`, `huge` |
| `intent`    | Establece el color                  | `primary`                                                                          |
