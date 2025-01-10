<h1 align="center">
  @mariomh/cva
</h1>

<p align="center">
  Class Variance Authority
</p>

## Table of Contents

<!-- TOC -->
* [Table of Contents](#table-of-contents)
* [Installation](#installation)
* [How to use](#how-to-use)
    * [Using Tailwind CSS](#using-tailwind-css)

## Installation

```bash
npm install --save @mariomh/cva
```

**Using bun**

```bash
bun add @mariomh/cva
```

## How to use

Check the [documentation](https://beta.cva.style/).

### Using Tailwind CSS

1. Check the version. Available for WebStorm 2023.1 and later
2. Open the settings. Go to `Languages and Frameworks` | `Style Sheets` | `Tailwind CSS`
3. Add the following to your tailwind configuration:
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
> Internally `@mariomh/cva` uses [tailwind-merge](https://github.com/dcastil/tailwind-merge) to merge Tailwind CSS
> classes without style conflicts.
