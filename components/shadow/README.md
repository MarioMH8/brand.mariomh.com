<h1 align="center">
  @mariomh8/shadow
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
npm install --save @mariomh8/shadow
```

**Usando bun**

```bash
bun add @mariomh8/shadow
```

## Como usarlo

Puedes acceder a los variants de las fuentes

```ts
import variants from '@mariomh8/shadow/variants';

const className = variants({
  // Opciones
  dimension: 'lg',
});
```

**Usando `class-name`**

```ts
import cn from '@mariomh8/shadow/class-name';

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
import Shadow from '@mariomh8/shadow/react';
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
