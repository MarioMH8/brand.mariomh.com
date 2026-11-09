<h1 align="center">
  @mariomh8/cva
</h1>

<p align="center">
  Class Variance Authority
</p>

## Indice

<!-- TOC -->
  * [Indice](#indice)
  * [Instalación](#instalación)
  * [Como usarlo](#como-usarlo)
    * [Usando Tailwind CSS](#usando-tailwind-css)
<!-- TOC -->

## Instalación

```bash
npm install --save @mariomh8/cva
```

**Usando bun**

```bash
bun add @mariomh8/cva
```

## Como usarlo

Puedes ver la documentación completa en el siguiente [enlace](https://beta.cva.style/).

### Usando Tailwind CSS

1. Revise la versión. Disponible para WebStorm 2023.1 y posteriores.
2. Abra la configuración. Vaya a `Languages and Frameworks` | `Style Sheets` | `Tailwind CSS`.
3. Añade la siguiente configuración:
```json
{
  "experimental": {
    "classRegex": [
      ["cva\\(([^)]*)\\)", "[\"'`]?([^\"'`]+)[\"'`]?"],
      ["cx\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"]
    ]
  }
}
```
> [!NOTE]
> Internamente `@mariomh8/cva` utiliza [tailwind-merge](https://github.com/dcastil/tailwind-merge) para mergear las clases
> de Tailwind CSS sin conflictos de estilos.
