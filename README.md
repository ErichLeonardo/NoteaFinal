# NoteaFinal

NoteaFinal es una aplicación web desarrollada con **Angular 16** para crear, visualizar, editar y eliminar notas. La aplicación incluye autenticación con Google, rutas protegidas, formularios reactivos, estilos con Bootstrap y conexión con Firebase/Firestore para guardar las notas del usuario.

## Características

- Inicio de sesión con Google.
- Protección de rutas mediante `LoginGuard`.
- Listado de notas del usuario autenticado.
- Creación de nuevas notas.
- Edición de notas mediante un formulario en modal.
- Eliminación de notas desde la lista.
- Formulario reactivo con validación del título.
- Página informativa `Acerca de` con cambio entre modo claro y oscuro.
- Configuración para Firebase, Firestore, Hosting, Functions y Service Worker.

## Tecnologías utilizadas

- Angular 16.2.6
- TypeScript
- Angular Router
- Angular Reactive Forms
- Firebase / Firestore
- AngularFire
- Google Social Login
- Bootstrap 5
- RxJS
- Karma y Jasmine para pruebas

## Estructura principal del proyecto

```text
src/
├── app/
│   ├── components/
│   │   ├── button/
│   │   ├── form-note/
│   │   ├── navbar/
│   │   └── note/
│   ├── directives/
│   │   └── highlight.directive.ts
│   ├── guards/
│   │   └── login.guard.ts
│   ├── model/
│   │   └── INote.ts
│   ├── pages/
│   │   ├── about/
│   │   ├── error404/
│   │   ├── login/
│   │   ├── new/
│   │   └── notes/
│   ├── services/
│   │   ├── login.service.ts
│   │   └── notes.service.ts
│   ├── app-routing.module.ts
│   ├── app.component.*
│   └── app.module.ts
├── assets/
├── enviroments/
│   └── environment.ts
├── index.html
└── main.ts
```

## Requisitos previos

Antes de ejecutar el proyecto necesitas tener instalado:

- Node.js
- npm
- Angular CLI

Puedes comprobar las versiones con:

```bash
node -v
npm -v
ng version
```

Si no tienes Angular CLI instalado, puedes instalarlo con:

```bash
npm install -g @angular/cli
```

## Instalación

Clona o descarga el proyecto y entra en la carpeta principal:

```bash
cd NoteaFinal-main
```

Instala las dependencias:

```bash
npm install
```

## Configuración de Firebase

La aplicación utiliza Firebase y Firestore. La configuración se encuentra en:

```text
src/enviroments/environment.ts
```

Ahí se define el objeto `firebaseConfig` con los datos del proyecto Firebase.

También existen archivos de configuración para Firebase en la raíz del proyecto:

```text
firebase.json
firestore.rules
firestore.indexes.json
database.rules.json
```

## Ejecutar la aplicación en desarrollo

Para iniciar el servidor de desarrollo ejecuta:

```bash
npm start
```

O también:

```bash
ng serve
```

Después abre el navegador en:

```text
http://localhost:4200/
```

La aplicación se recargará automáticamente cuando modifiques archivos del proyecto.

## Rutas de la aplicación

| Ruta | Descripción |
|---|---|
| `/home` | Muestra el listado de notas. |
| `/new` | Permite crear una nueva nota. |
| `/about` | Muestra información sobre el proyecto. |
| `/login` | Muestra el botón de inicio de sesión con Google. |
| `**` | Página de error 404 para rutas no existentes. |

Las rutas `/home` y `/new` están protegidas y requieren que el usuario haya iniciado sesión.

## Scripts disponibles

En el archivo `package.json` se encuentran los siguientes comandos:

```bash
npm start
```

Ejecuta la aplicación en modo desarrollo.

```bash
npm run build
```

Compila el proyecto y genera los archivos de producción en la carpeta `dist/`.

```bash
npm run watch
```

Compila el proyecto en modo observación usando la configuración de desarrollo.

```bash
npm test
```

Ejecuta las pruebas unitarias con Karma y Jasmine.

## Compilar para producción

Para generar una versión lista para producción:

```bash
npm run build
```

Los archivos generados se guardarán en:

```text
dist/
```

## Funcionamiento general

1. El usuario accede a la aplicación.
2. Si no ha iniciado sesión, el guard lo redirige a `/login`.
3. El usuario inicia sesión con Google.
4. Una vez autenticado, puede acceder a sus notas.
5. Las notas se cargan desde Firestore usando el identificador del usuario.
6. El usuario puede crear nuevas notas, editarlas o eliminarlas desde la interfaz.

## Modelo de nota

La aplicación utiliza la interfaz `INote`:

```ts
export interface INote {
  id?: string | number;
  title: string;
  description: string;
}
```

## Autor

Proyecto desarrollado por **Erich Leonardo**.
