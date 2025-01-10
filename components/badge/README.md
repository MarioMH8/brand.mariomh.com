<h1 align="center">
  @mariomh/badge
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
npm install --save @mariomh/badge
```

**Usando bun**

```bash
bun add @mariomh/badge
```

## Como usarlo

Puedes acceder a los variants de las fuentes

```ts
import variants from '@mariomh/badge/variants';

const className = variants({
  // Opciones
  intent: 'primary',
});
```

**Usando `class-name`**

```ts
import cn from '@mariomh/badge/class-name';

const className = cn(
  {
    // Opciones
    intent: 'primary',
  },
  'uppercase'
);
```

**Usando Astro**

```astro
---
import Badge from '@mariomh/badge/astro';
---

<Badge intent='primary'> cupidatat </Badge>
```

**Usando React**

```tsx
import Badge from '@mariomh/badge/react';
import type { ReactNode } from 'react';

export default function MyComponent(): ReactNode {
  return <Badge intent='primary'>cupidatat</Badge>;
}
```

## Variantes

| Variante    | Descripción                         | Valores                                                                            |
|-------------|-------------------------------------|------------------------------------------------------------------------------------|
| `dimension` | Cambia el tamaño de la fuente       | `unset`, `xs`, `sm`, `base`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`, `6xl`, `huge` |
| `intent`    | Establece el color                  | `primary`                                                                          |
| `noSelect`  | Evita que el texto sea seleccionado | `true`                                                                             |
