<h1 align="center">
  @mariomh8/checkbox
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
npm install --save @mariomh8/checkbox
```

**Usando bun**

```bash
bun add @mariomh8/checkbox
```

## Como usarlo

Puedes acceder a los variants de las fuentes

```ts
import variants from '@mariomh8/checkbox/variants';

const className = variants({
  // Opciones
  intent: 'primary',
});
```

**Usando `class-name`**

```ts
import cn from '@mariomh8/checkbox/class-name';

const className = cn(
  {
    // Opciones
    intent: 'primary',
  },
  'uppercase'
);
```

**Usando React**

```tsx
import Checkbox from '@mariomh8/checkbox/react';
import type { ReactNode } from 'react';

export default function MyComponent(): ReactNode {
  return <Checkbox intent='primary' />;
}
```

## Variantes

| Variante    | Descripción                         | Valores                                                      |
|-------------|-------------------------------------|--------------------------------------------------------------|
| `dimension` | Cambia el tamaño de la fuente       | `unset`, `xs`, `sm`, `base`, `lg`, `xl`, `2xl`, `3xl`, `4xl` |
| `intent`    | Establece el color                  | `primary`                                                    |
