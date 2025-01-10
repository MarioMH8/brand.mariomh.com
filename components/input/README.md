<h1 align="center">
  @mariomh/input
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
npm install --save @mariomh/input
```

**Usando bun**

```bash
bun add @mariomh/input
```

## Como usarlo

Puedes acceder a los variants de las fuentes

```ts
import variants from '@mariomh/input/variants';

const className = variants({
  // Opciones
  intent: 'primary',
});
```

**Usando `class-name`**

```ts
import cn from '@mariomh/input/class-name';

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
import Input from '@mariomh/input/astro';
---

<Input intent='primary' />
```

**Usando React**

```tsx
import Input from '@mariomh/input/react';
import type { ReactNode } from 'react';

export default function MyComponent(): ReactNode {
  return <Input intent='primary' />;
}
```

## Variantes

| Variante    | Descripción                         | Valores                                                                            |
|-------------|-------------------------------------|------------------------------------------------------------------------------------|
| `dimension` | Cambia el tamaño de la fuente       | `unset`, `xs`, `sm`, `base`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`, `6xl`, `huge` |
| `intent`    | Establece el color                  | `primary`                                                                          |
