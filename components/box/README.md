<h1 align="center">
  @mariomh8/box
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
npm install --save @mariomh8/box
```

**Usando bun**

```bash
bun add @mariomh8/box
```

## Como usarlo

Puedes acceder a los variants de las fuentes

```ts
import variants from '@mariomh8/box/variants';

const className = variants({
  // Opciones
  intent: 'primary',
});
```

**Usando `class-name`**

```ts
import cn from '@mariomh8/box/class-name';

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
import Box from '@mariomh8/box/astro';
---

<Box intent='primary'> cupidatat </Box>
```

**Usando React**

```tsx
import Box from '@mariomh8/box/react';
import type { ReactNode } from 'react';

export default function MyComponent(): ReactNode {
  return <Box intent='primary'>cupidatat</Box>;
}
```

## Variantes

| Variante | Descripción                   | Valores                |
|----------|-------------------------------|------------------------|
| `intent` | Establece el color            | `primary`              |
| `round`  | Cambia el tamaño de la sombra | `sm`, `md`, `lg`, `xl` |
