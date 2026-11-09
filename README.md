<h1 align="center">
  Design System
</h1>

<p align="center">
  Sistema de diseño y guía de estilo de MarioMH
</p>

# Introducción

La identidad desarrollada para **Mario** genera una conexión con el pasado tecnológico como forma de comunicar
su pasión desde sus inicios y lo traslada al presente con una vuelta de tuerca a partir de una propuesta **enérgica, distintiva y moderna**.
Un sistema amable y accesible que deja entrever su gran pasión y conocimiento por la **programación**.

<p align="center">
<img src='./.docs/mariomh.png' alt='Logo de MarioMH'>
</p>

La marca gráfica se compone de un **icono y logotipo**, el primero retomando la morfología de los píxeles como forma de conexión
con las raíces tecnológicas. Se dispone en una composición que logra identificar las **M** y la **H** en el calado interior.
Un icono simple y pregnante que luego se expande en toda la identidad generando conexión y coherencia.

## Desarrollo

El repositorio usa Bun 1.4.4 y workspaces de Bun. Requisitos: Bun 1.4.4 y Git.

```bash
git clone https://github.com/MarioMH8/brand.mariomh.com.git
cd brand.mariomh.com
bun install
```

Comandos principales, ejecutados desde la raíz del repositorio:

| Tarea | Comando |
| --- | --- |
| Construir todos los workspaces | `bun run build` |
| Construir solo Storybook | `bun run build:storybook` |
| Ejecutar Storybook en desarrollo | `bun run --filter '@mariomh8/storybook' dev` |
| Ejecutar los tests | `bun run test` |
| Comprobar tipos | `bun run typecheck` |
| Comprobar tipos de Astro | `bun run typecheck:astro` |
| Lint sin escribir cambios | `bun run lint:ci` |
| Lint y corrección automática | `bun run lint:fix` |
| Construir y validar los paquetes | `bun run check:packages` |
| Añadir un changeset | `bun changeset add` |

Storybook se sirve en el puerto `6006` y su build se escribe en `storybook/storybook-static`, que está ignorado por Git.

### Autenticación en GitHub Packages

Los paquetes se publican en GitHub Packages (`https://npm.pkg.github.com/`) con el scope `@mariomh8`. El `.npmrc` del repositorio solo declara el scope y no contiene ningún token. Para instalar paquetes publicados necesitas un PAT clásico con el permiso `read:packages` en tu configuración de npm de usuario:

```ini
//npm.pkg.github.com/:_authToken=${NPM_TOKEN}
@mariomh8:registry=https://npm.pkg.github.com/
```

Exporta `NPM_TOKEN` en tu shell con el valor del token. La autenticación también es necesaria para paquetes públicos. En CI se usa `GITHUB_TOKEN` con `packages: write`, y Renovate usa el secret `RENOVATE_PACKAGES_TOKEN`.

### Documentación

- [CONTRIBUTING.md](CONTRIBUTING.md): flujo de contribución, setup y reglas de pull requests.
- [AGENTS.md](AGENTS.md): guía para agentes y punto de entrada a la documentación del repositorio.
- [docs/agents/](docs/agents/): arquitectura, convenciones, desarrollo, releases, pull requests y ramas.
- [ADR 0001](docs/adr/0001-github-packages-registry.md): decisión de publicar en GitHub Packages.
