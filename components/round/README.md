<h1 align="center">
  @mariomh8/round
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
npm install --save @mariomh8/round
```

**Usando bun**

```bash
bun add @mariomh8/round
```

## Como usarlo

Puedes acceder a los variants de las fuentes

```ts
import variants from '@mariomh8/round/variants';

const className = variants({
  // Opciones
  dimension: 'lg',
});
```

**Usando `class-name`**

```ts
import cn from '@mariomh8/round/class-name';

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
import Round from '@mariomh8/round/react';
import type { ReactNode } from 'react';

export default function MyComponent(): ReactNode {
  return (
    <Round dimension='lg'>
      <span>Voluptate cupidatat cillum quis.</span>
    </Round>
  );
}
```

## Variantes

| Variante    | Descripción                                | Valores                                                                            |
|-------------|--------------------------------------------|------------------------------------------------------------------------------------|
| `dimension` | Cambia el tamaño de la fuente              | `unset`, `xs`, `sm`, `base`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`, `6xl`, `full` |
| `only`      | Aplica el redondeado solo en cierto tamaño | `sm`                                                                               |
