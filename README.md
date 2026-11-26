# Astro Starter Kit: Basics

```sh
pnpm create astro@latest -- --template basics
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## Actualizar la carta desde imágenes

El archivo de datos de la carta es `src/data/menu.json`. Cuando se reciban
imágenes de una nueva carta, estas son la única fuente para actualizar los
productos y categorías:

1. Transcribir las categorías, productos, descripciones, variantes y precios que
   aparecen en las imágenes. Respetar sus nombres y precios; no conservar ni
   agregar productos basándose en cartas anteriores.
2. Si una categoría existente aparece en las imágenes, actualizarla para que
   contenga únicamente los productos que aparecen en ellas. Retirar de esa
   categoría todos los productos anteriores que no estén en las imágenes.
3. Si una categoría existente no aparece en ninguna imagen, ocultarla con
   `"oculta": true`. No asumir que sigue a la venta.
4. Mostrar únicamente las categorías que sí aparecen en las imágenes
   (`"oculta": false`). Crear las categorías nuevas que hagan falta y ocultar
   las que ya no se ofrecen.
5. Organizar las categorías por hoja usando el campo `pagina`: las categorías
   que aparecen en una misma hoja deben compartir número de página. Como guía,
   usar aproximadamente una categoría por hoja, respetando la distribución de
   las imágenes recibidas.
6. Si un nombre, precio o descripción no se distingue con claridad, consultar
   antes de inventar o inferir el dato.

Al terminar, comprobar que `menu.json` sea JSON válido y que solo estén visibles
las categorías y productos indicados en las imágenes.

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
