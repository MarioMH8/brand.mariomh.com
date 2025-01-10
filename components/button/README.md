<h1 align="center">
  @mariomh/button
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
npm install --save @mariomh/button
```

**Usando bun**

```bash
bun add @mariomh/button
```

## Como usarlo

Puedes acceder a los variants de las fuentes

```ts
import variants from '@mariomh/button/variants';

const className = variants({
  // Opciones
  intent: 'primary',
});
```

**Usando `class-name`**

```ts
import cn from '@mariomh/button/class-name';

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
import Button from '@mariomh/button/astro';
---

<Button intent='primary'> cupidatat </Button>
```

**Usando React**

```tsx
import Button from '@mariomh/button/react';
import type { ReactNode } from 'react';

export default function MyComponent(): ReactNode {
  return <Button intent='primary'>cupidatat</Button>;
}
```

## Variantes

| Variante    | Descripción                         | Valores                                                                    |
|-------------|-------------------------------------|----------------------------------------------------------------------------|
| `dimension` | Cambia el tamaño de la fuente       | `unset`, `xs`, `sm`, `base`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`, `6xl` |
| `intent`    | Establece el color                  | `primary`                                                                  |
| `noSelect`  | Evita que el texto sea seleccionado | `true`                                                                     |
| `variant`   | Variante del botón                  | `solid`                                                                    |
| `weight`    | Establece el peso de la fuente      | `light`, `base`, `medium`, `bold`                                          |
