<h1 align="center">
  @mariomh8/focus
</h1>

<p align="center">
  Estilos y variantes relacionadas con el estado de focus.
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
npm install --save @mariomh8/focus
```

**Usando bun**

```bash
bun add @mariomh8/focus
```

## Como usarlo

Puedes acceder a los variants de las fuentes

```ts
import variants from '@mariomh8/focus/variants';

const className = variants({
  // Opciones
  intent: 'primary',
});
```

**Usando `class-name`**

```ts
import cn from '@mariomh8/focus/class-name';

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
import Focus from '@mariomh8/focus/react';
import type { ReactNode } from 'react';

export default function MyComponent(): ReactNode {
  return (
    <Focus intent='primary'>
      <span>Voluptate cupidatat cillum quis.</span>
    </Focus>
  );
}
```

## Variantes

| Variante | Descripción        | Valores   |
|----------|--------------------|-----------|
| `intent` | Establece el color | `primary` |
