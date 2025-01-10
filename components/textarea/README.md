<h1 align="center">
  @mariomh/textarea
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
npm install --save @mariomh/textarea
```

**Usando bun**

```bash
bun add @mariomh/textarea
```

## Como usarlo

Puedes acceder a los variants de las fuentes

```ts
import variants from '@mariomh/textarea/variants';

const className = variants({
  // Opciones
  dimension: 'sm',
});
```

**Usando `class-name`**

```ts
import cn from '@mariomh/textarea/class-name';

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
import Textarea from '@mariomh/textarea/astro';
---

<Textarea dimension='sm'> cupidatat </Textarea>
```

**Usando React**

```tsx
import Textarea from '@mariomh/textarea/react';
import type { ReactNode } from 'react';

export default function MyComponent(): ReactNode {
  return <Textarea dimension='sm'>cupidatat</Textarea>;
}
```

## Variantes

| Variante    | Descripción                         | Valores                                                                            |
|-------------|-------------------------------------|------------------------------------------------------------------------------------|
| `dimension` | Cambia el tamaño de la fuente       | `unset`, `xs`, `sm`, `base`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`, `6xl`, `huge` |
| `intent`    | Establece el color                  | `primary`                                                                          |
