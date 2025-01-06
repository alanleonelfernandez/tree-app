# Árbol Interactivo con React y TypeScript

Este es un proyecto donde se implementa un **gestor de árbol interactivo** utilizando **React** y **TypeScript**. El árbol es completamente editable, permitiendo agregar y eliminar nodos, así como colapsar o expandir cada rama. Los cambios en el árbol se guardan en `localStorage` para mantener el estado entre sesiones.

## Características

- **Modo edición**: Permite agregar y eliminar nodos del árbol.
- **Colapsar/Expandir nodos**: Facilita la navegación a través de las ramas del árbol.
- **Persistencia de datos**: Los datos del árbol se guardan en `localStorage`, lo que permite mantener el estado entre sesiones.
- **Interfaz moderna**: Diseño atractivo usando Material UI, con animaciones suaves al expandir o colapsar nodos.

## Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/alanleonelfernandez/tree-app.git
   ```

2. Navega al directorio del proyecto:
  ```bash
   cd tree-app
   ```

3. Instala las dependencias:
   ```bash
   npm install
   ```

4. Ejecuta el proyecto en modo de desarrollo:
   ```bash
   npm run dev
   ```

El proyecto estará disponible en http://localhost:3000.

--------------------------------------------------------------------------------------------------

## Estructura del Proyecto

- `src/`
  - `components/` – Contiene los componentes reutilizables, como el componente `Tree` y `TreeNode`.
  - `pages/` – Contiene las páginas de la aplicación, como `TreePage`.
  - `router/` – Maneja las rutas de la aplicación.
  - `App.tsx` – Componente principal que gestiona el enrutamiento.
  - `index.tsx` – Punto de entrada de la aplicación.

## Tecnologías

- **React** – Biblioteca para construir interfaces de usuario.
- **TypeScript** – Superset de JavaScript para un desarrollo más seguro y escalable.
- **Material UI** – Framework de diseño para React, utilizado para mejorar la apariencia y la experiencia del usuario.
- **React Router** – Para la navegación entre páginas en la aplicación.
- **Vite** – Herramienta de construcción de front-end rápida.

## Uso

### Modo Edición

En el modo edición, puedes realizar las siguientes acciones sobre el árbol:

- **Agregar un nodo hijo**: Haz clic en el botón de agregar (`+`) al lado de cualquier nodo para agregar un nuevo nodo hijo.
- **Eliminar un nodo**: Haz clic en el botón de eliminar (`-`) para borrar el nodo seleccionado.

### Modo Vista

En el modo vista, el árbol se muestra de forma estática sin permitir cambios, solo para visualización.

### Colapsar/Expandir

Puedes colapsar y expandir las ramas del árbol utilizando el botón de expansión (`+/-`), lo que facilita la navegación por árboles grandes.


## Autor

Hecho por [@alanleonelfernandez](https://github.com/alanleonelfernandez)

¡Gracias por visitar el proyecto!

