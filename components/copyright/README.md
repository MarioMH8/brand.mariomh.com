<h1 align="center">
  @mariomh/copyright
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
npm install --save @mariomh/copyright
```

**Usando bun**

```bash
bun add @mariomh/copyright
```

## Como usarlo

Puedes acceder a los variants de las fuentes

```ts
import variants from '@mariomh/copyright/variants';

const className = variants({
  // Opciones
  dimension: 'lg',
});
```

**Usando `class-name`**

```ts
import cn from '@mariomh/copyright/class-name';

const className = cn(
  {
    // Opciones
    dimension: 'lg',
  },
  'uppercase'
);
```

**Usando Astro**

```astro
---
import Copyright from '@mariomh/copyright/astro';
---

<Copyright dimension='lg' />
```

**Usando React**

```tsx
import Copyright from '@mariomh/copyright/react';
import type { ReactNode } from 'react';

export default function MyComponent(): ReactNode {
  return <Copyright dimension='lg' />;
}
```

## Variantes

| Variante    | Descripción                         | Valores                                                                            |
|-------------|-------------------------------------|------------------------------------------------------------------------------------|
| `dimension` | Cambia el tamaño de la fuente       | `unset`, `xs`, `sm`, `base`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`, `6xl`, `huge` |
| `noSelect`  | Evita que el texto sea seleccionado | `true`                                                                             |
