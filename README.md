# ClothesApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# SPA-CarpeDiem

Aplicación de gestión de usuarios con autenticación y permisos basada en Angular y Firebase.

## Contenido 

1. Características
2. Requisitos Previos
3. Instalación
4. Configuración
5. Uso de la aplicación
6. Estructura del Proyecto
7. Próximas mejoras

## Características

- Autenticación de usuarios (correo/contraseña y Google).
- Gestión de permisos y roles (administrador)
- Protección de rutas mediante guards
- Almacenamiento de usuarios en firestore
- Diseño modular en Angular para fácil escalabilidad.
- Despliegue de la aplicación con firebase hosting.

## Requisitos Previos

Asegúrate de tener instalado lo siguiente antes de comenzar:

- Node.js(v16 o superior)
- Angular CLI (v17)
  ```
    npm install -g @angular/cli
  ```
- Una cuenta en Firebase y un proyecto configurado.

## Instalación

1. Clonar el repositorio
2. Instalar dependencias
  ```
npm install
  ```
3. Configurar Firebase
   Crea un archivo src/environments/environment.ts con tus credenciales de Firebase:
   
   ```
   export const environment = {
    firebase: {
      apiKey: "TU_API_KEY",
      authDomain: "TU_AUTH_DOMAIN",
      projectId: "TU_PROJECT_ID",
      storageBucket: "TU_STORAGE_BUCKET",
      messagingSenderId: "TU_MESSAGING_SENDER_ID",
      appId: "TU_APP_ID",
    },
    production: false,
    };
   ```
4.Ejecutar la aplicación
  ```
    ng serve
  ```
Abre el navegador en http://localhost:4200.

## Uso de la Aplicación

### Registro e Inicio de Sesión
- Registra un usuario nuevo usando un correo electrónico y contraseña o inicia sesión con Google.
- Los usuarios administradores tendrán permisos adicionales para acceder a secciones protegidas.
### Gestión de permisos
- Los usuarios sin rol de administrador serán redirigidos automáticamente a la página de inicio o al login si intentan acceder a áreas restringidas.
### Guardias de Rutas
- El guard permissionsGuard protege las rutas sensibles:
  - Usuario no autenticado → Redirige a /login.
  - Usuario autenticado pero sin permisos → Redirige a /.

## Estructura del proyecto

La estructura principal es la siguiente:

```
src/
├── app/
│   ├── guards/                # Guards como permissionsGuard
│   ├── services/              # Servicios como UserService
│   ├── components/            # Componentes de Angular (Login, Registro)
│   ├── modules/               # Módulos de Angular
│   └── app.module.ts          # Configuración principal del módulo
├── environments/              # Configuración de Firebase (dev/prod)
├── assets/                    # Recursos estáticos
├── index.html                 # Archivo HTML principal
└── main.ts                    # Punto de entrada de la aplicación
```

## Próximas Mejoras

- Gestión avanzada de roles: Implementar un sistema con más niveles de permisos.
- Notificaciones en tiempo real: Usar Firebase Realtime Database o Firestore.
- Mejoras de UI/UX: Integrar una librería como Angular Material o TailwindCSS.


    

