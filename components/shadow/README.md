<h1 align="center">
  @mariomh/shadow
</h1>

<p align="center">
  Estilos y variantes relacionadas con las fuentes.
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
npm install --save @mariomh/shadow
```

**Usando bun**

```bash
bun add @mariomh/shadow
```

## Como usarlo

Puedes acceder a los variants de las fuentes

```ts
import variants from '@mariomh/shadow/variants';

const className = variants({
  // Opciones
  dimension: 'lg',
});
```

**Usando `class-name`**

```ts
import cn from '@mariomh/shadow/class-name';

const className = cn(
  {
    // Opciones
    dimension: 'lg',
  },
  'uppercase'
);
```

**Usando React**

```tsx
import Shadow from '@mariomh/shadow/react';
import type { ReactNode } from 'react';

export default function MyComponent(): ReactNode {
  return (
    <Shadow dimension='lg'>
      <span>Voluptate cupidatat cillum quis.</span>
    </Shadow>
  );
}
```

## Variantes

| Variante    | Descripción                   | Valores                |
|-------------|-------------------------------|------------------------|
| `dimension` | Cambia el tamaño de la sombra | `sm`, `md`, `lg`, `xl` |
