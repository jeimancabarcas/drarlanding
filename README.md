# Landing AR

Landing page desarrollada con Angular para presentar contenido relacionado con Realidad Aumentada (AR).

## 🚀 Tecnologías

- **Angular** 21.1.0
- **TypeScript** 5.9.2
- **RxJS** 7.8.0
- **Zone.js** 0.15.0

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (versión 18 o superior)
- **npm** (incluido con Node.js)
- **Angular CLI** (se instalará automáticamente como dependencia)

## 🛠️ Instalación

1. Clona el repositorio:
```bash
git clone <url-del-repositorio>
cd drarlanding
```

2. Instala las dependencias:
```bash
npm install
```

## 🏃 Desarrollo

Para iniciar el servidor de desarrollo, ejecuta:

```bash
npm start
# o
ng serve
```

Una vez que el servidor esté en ejecución, abre tu navegador y navega a `http://localhost:4200/`. La aplicación se recargará automáticamente cuando modifiques cualquier archivo fuente.

### Modo Watch

Para compilar el proyecto en modo watch durante el desarrollo:

```bash
npm run watch
```

## 🏗️ Construcción

Para compilar el proyecto para producción:

```bash
npm run build
# o
ng build
```

Esto compilará tu proyecto y almacenará los artefactos de construcción en el directorio `dist/`. Por defecto, la compilación de producción optimiza la aplicación para rendimiento y velocidad.

### Configuraciones de Build

- **Producción**: `ng build --configuration production` (por defecto)
- **Desarrollo**: `ng build --configuration development`

## 🧪 Testing

### Tests Unitarios

Para ejecutar los tests unitarios con [Karma](https://karma-runner.github.io):

```bash
npm test
# o
ng test
```

### Tests End-to-End

Angular CLI no incluye un framework de testing end-to-end por defecto. Puedes elegir uno que se adapte a tus necesidades.

## 📁 Estructura del Proyecto

```
drarlanding/
├── src/
│   ├── app/              # Componentes y lógica de la aplicación
│   │   ├── app.ts        # Componente principal
│   │   ├── app.html      # Template del componente principal
│   │   ├── app.css       # Estilos del componente principal
│   │   ├── app.routes.ts # Configuración de rutas
│   │   └── app.config.ts # Configuración de la aplicación
│   ├── index.html        # HTML principal
│   ├── main.ts           # Punto de entrada de la aplicación
│   └── styles.css        # Estilos globales
├── public/               # Archivos estáticos (favicon, etc.)
├── dist/                 # Archivos compilados (generados)
├── angular.json          # Configuración de Angular CLI
├── tsconfig.json         # Configuración de TypeScript
└── package.json          # Dependencias y scripts del proyecto
```

## 🎨 Formato de Código

El proyecto utiliza **Prettier** para el formato automático del código con las siguientes configuraciones:

- Ancho de línea: 100 caracteres
- Comillas simples
- Parser Angular para archivos HTML

## 📦 Generación de Componentes

Angular CLI incluye herramientas poderosas para generar código. Para generar un nuevo componente:

```bash
ng generate component nombre-del-componente
```

Para ver una lista completa de schematics disponibles (como `components`, `directives`, `pipes`, etc.):

```bash
ng generate --help
```

## 🚢 Despliegue

El proyecto está configurado para desplegarse en GitHub Pages usando `angular-cli-ghpages`.

Para desplegar:

```bash
ng deploy
```

## 📚 Recursos Adicionales

- [Documentación de Angular](https://angular.dev)
- [Angular CLI Overview y Command Reference](https://angular.dev/tools/cli)
- [Guía de TypeScript](https://www.typescriptlang.org/docs/)

## 📝 Licencia

Este proyecto es privado.

---

Desarrollado con ❤️ usando Angular
