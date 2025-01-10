<h1 align="center">
  @mariomh/container
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
npm install --save @mariomh/container
```

**Usando bun**

```bash
bun add @mariomh/container
```

## Como usarlo

Puedes acceder a los variants de las fuentes

```ts
import variants from '@mariomh/container/variants';

const className = variants({
  // Opciones
});
```

**Usando `class-name`**

```ts
import cn from '@mariomh/container/class-name';

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
import Container from '@mariomh/container/astro';
---

<Container> cupidatat </Container>
```

**Usando React**

```tsx
import Container from '@mariomh/container/react';
import type { ReactNode } from 'react';

export default function MyComponent(): ReactNode {
  return <Container>cupidatat</Container>;
}
```
