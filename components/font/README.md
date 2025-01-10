<h1 align="center">
  @mariomh/font
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
npm install --save @mariomh/font
```

**Usando bun**

```bash
bun add @mariomh/font
```

## Como usarlo

Puedes acceder a los variants de las fuentes

```ts
import variants from '@mariomh/font/variants';

const className = variants({
  // Opciones
  family: 'primary',
});
```

**Usando `class-name`**

```ts
import cn from '@mariomh/font/class-name';

const className = cn(
  {
    // Opciones
    family: 'primary',
  },
  'uppercase'
);
```

**Usando React**

```tsx
import Font from '@mariomh/font/class-name';
import type { ReactNode } from 'react';

export default function MyComponent(): ReactNode {
  return (
    <Font family='primary'>
      <span>Voluptate cupidatat cillum quis.</span>
    </Font>
  );
}
```

## Variantes

| Variante    | Descripción                               | Valores                                                                            |
|-------------|-------------------------------------------|------------------------------------------------------------------------------------|
| `align`     | Alineamiento del texto                    | `start`, `center`, `end`                                                           |
| `dimension` | Cambia el tamaño de la fuente             | `unset`, `xs`, `sm`, `base`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`, `6xl`, `huge` |
| `family`    | Define la fuente del texto                | `primary`, `secondary`                                                             |
| `intent`    | Establece el color de la fuente           | `primary`, `unset`                                                                 |
| `noSelect`  | Evita que el texto sea seleccionado       | `true`                                                                             |
| `tracking`  | Establece la separación de los caracteres | `sm`, `base`, `lg`                                                                 |
| `variant`   | Cambia la variante de la fuente           | `bright`, `muted`                                                                  |
| `weight`    | Establece el peso de la fuente            | `light`, `base`, `medium`, `bold`                                                  |
