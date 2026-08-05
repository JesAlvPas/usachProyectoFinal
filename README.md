# Furniro

Proyecto Final — Curso FrontEnd USACH

## Descripción del cliente

El cliente de este proyecto es ficticio, construido especialmente para este trabajo. Se trata de una marca que buscaba modificar su identidad visual: el cliente entregó una línea visual que había encontrado en Figma, adaptándole pequeños detalles propios, para que el equipo la implementara en el desarrollo del sitio.

## Descripción del proyecto

Furniro es un ecommerce desarrollado en **Next.js**,con los estilos de Tailwind CSS, que consume la [API de DummyJSON](https://dummyjson.com/) utilizando todas las categorías de productos disponibles (no se restringe a una categoría específica).

## Integrantes

- Jesús Álvarez
- Andrés Quintero

## Instrucciones de instalación

No se requieren dependencias ni configuraciones adicionales fuera de lo estándar de un proyecto Next.js.

```bash
# Clonar el repositorio
git clone <url-del-repositorio>
cd furniro

# Instalar dependencias
npm install

# Levantar el entorno de desarrollo
npm run dev
```

La aplicación quedará disponible en `http://localhost:3000`.

## URL de producción

[Url en vercel](https://usach-proyecto-final.vercel.app/)

## Conflictos resueltos

Durante el desarrollo se presentó un conflicto de merge en la rama `jesus-02-Shop`: uno de los integrantes había creado una carpeta `components` **fuera** de la carpeta `app`, mientras que el otro la había creado **dentro** de `app`. Esto generó una duplicidad de estructura al momento de integrar los cambios.

**Resolución:** el equipo conversó y llegó a un consenso, decidiendo mantener la carpeta `components` **dentro** de `app`, unificando así la estructura del proyecto.