# Landing AR - Dr. Andrés Rivera Ariza

Landing page profesional desarrollada con Angular y Tailwind CSS para el Dr. Andrés Rivera Ariza, especialista en Cirugía Plástica Estética y Reconstructiva.

## 🚀 Tecnologías

- **Angular** 21.1.0
- **TypeScript** 5.9.2
- **Tailwind CSS** 3.4.19
- **GSAP** 3.14.2 (Animaciones)
- **RxJS** 7.8.0

## 📋 Requisitos Previos

- **Node.js** (versión 18 o superior)
- **npm** (incluido con Node.js)

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

Para iniciar el servidor de desarrollo:

```bash
npm start
```

La aplicación estará disponible en `http://localhost:4200/`

## 🏗️ Construcción

### Build para desarrollo:
```bash
npm run build
```

### Build para GitHub Pages:
```bash
npm run build:gh-pages
```

## 🚢 Despliegue en GitHub Pages

### Opción 1: Usando el script de deploy
```bash
npm run deploy
```

Este comando:
1. Construye la aplicación con el baseHref correcto
2. Despliega automáticamente a GitHub Pages

### Opción 2: Manual

1. Construye la aplicación:
```bash
npm run build:gh-pages
```

2. Despliega manualmente:
```bash
npx angular-cli-ghpages --dir=dist/landing_ar/browser
```

### ⚠️ Importante para GitHub Pages

Si tu repositorio tiene un nombre diferente a `drarlanding`, necesitas actualizar el `baseHref` en:
- `angular.json` (configuración de producción)
- `package.json` (script build:gh-pages)

Por ejemplo, si tu repositorio se llama `mi-landing`, cambia `/drarlanding/` por `/mi-landing/` en ambos archivos.

## 📁 Estructura del Proyecto

```
drarlanding/
├── src/
│   ├── app/
│   │   ├── components/     # Componentes de la aplicación
│   │   │   ├── header/
│   │   │   ├── hero/
│   │   │   ├── about/
│   │   │   ├── specialties/
│   │   │   ├── memberships/
│   │   │   ├── contact/
│   │   │   └── footer/
│   │   ├── services/       # Servicios (animaciones)
│   │   ├── shared/         # Recursos compartidos
│   │   └── app.ts         # Componente principal
│   ├── index.html
│   └── styles.css
├── public/
│   └── images/            # Imágenes del sitio
├── angular.json
├── tailwind.config.js
└── package.json
```

## 🎨 Características

- ✅ Diseño responsive y moderno
- ✅ Animaciones con GSAP
- ✅ Optimizado para SEO
- ✅ Arquitectura Clean Code
- ✅ Componentes modulares
- ✅ Tailwind CSS para estilos

## 📝 Licencia

Este proyecto es privado.

---

Desarrollado con ❤️ usando Angular y Tailwind CSS
