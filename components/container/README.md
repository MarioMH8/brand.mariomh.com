<h1 align="center">
  @mariomh8/container
</h1>

<p align="center">
  Estilos, variantes y componentes.
</p>

## Indice

<!-- TOC -->
  * [Indice](#indice)
  * [Instalación](#instalación)
  * [Como usarlo](#como-usarlo)
<!-- TOC -->

## Instalación

```bash
npm install --save @mariomh8/container
```

**Usando bun**

```bash
bun add @mariomh8/container
```

## Como usarlo

Puedes acceder a los variants de las fuentes

```ts
import variants from '@mariomh8/container/variants';

const className = variants({
  // Opciones
});
```

**Usando `class-name`**

```ts
import cn from '@mariomh8/container/class-name';

const className = cn(
  {
    // Opciones
  },
  'uppercase'
);
```

**Usando Astro**

```astro
---
import Container from '@mariomh8/container/astro';
---

<Container> cupidatat </Container>
```

**Usando React**

```tsx
import Container from '@mariomh8/container/react';
import type { ReactNode } from 'react';

export default function MyComponent(): ReactNode {
  return <Container>cupidatat</Container>;
}
```
