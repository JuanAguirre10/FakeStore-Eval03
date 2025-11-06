# 🛍️ FakeStore Catalog

Aplicación web desarrollada en React con Vite que consume la API pública de FakeStore para mostrar un catálogo de productos con funcionalidades de navegación y paginación.

## 🚀 Características

- ✅ Consumo de API REST (FakeStore API)
- ✅ Navegación entre rutas con React Router
- ✅ Página de inicio con hero y productos destacados
- ✅ Catálogo completo con paginación (8 productos por página)
- ✅ Diseño responsive y moderno
- ✅ Información detallada de productos (precio, categoría, rating)

## 🛠️ Tecnologías Utilizadas

- **React 18** - Biblioteca de JavaScript para interfaces de usuario
- **Vite** - Herramienta de construcción rápida para proyectos frontend
- **React Router DOM** - Navegación y enrutamiento
- **FakeStore API** - API pública para datos de productos
- **CSS3** - Estilos personalizados con gradientes y animaciones

## 📁 Estructura del Proyecto

```
fakestore-react/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Navbar.css
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   ├── Entities.jsx
│   │   └── Entities.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── public/
├── package.json
└── README.md
```

## 🔧 Instalación y Configuración

### Requisitos Previos

- Node.js (versión 14 o superior)
- npm o yarn

### Pasos de Instalación

1. Clonar o descargar el proyecto

2. Instalar dependencias:
```bash
npm install
```

3. Iniciar el servidor de desarrollo:
```bash
npm run dev
```

4. Abrir en el navegador:
```
http://localhost:5174
```

## 📄 Páginas y Rutas

### Home (`/`)
- Hero principal con título y descripción del proyecto
- Botón de llamada a la acción
- Muestra 6 productos destacados
- Animaciones de entrada

### Productos (`/entities`)
- Listado completo de 20 productos
- Sistema de paginación (8 productos por página)
- Información mostrada por producto:
  - Imagen
  - Título
  - Precio
  - Categoría
  - Rating y número de reviews
- Navegación entre páginas con botones anterior/siguiente

## 🎨 Características de Diseño

- Gradientes modernos (púrpura a violeta)
- Efectos hover en tarjetas de productos
- Navegación sticky en la parte superior
- Diseño responsive para móviles, tablets y escritorio
- Animaciones CSS personalizadas
- Scroll suave al cambiar de página

## 📡 API Utilizada

**FakeStore API**: https://fakestoreapi.com/products

Endpoints consumidos:
- `GET /products` - Obtiene todos los productos
- `GET /products?limit=6` - Obtiene productos limitados para Home

## 🌐 Navegación

La aplicación utiliza React Router DOM para navegación sin recarga:

- **Navbar persistente** con enlaces a todas las secciones
- **Rutas configuradas**:
  - `/` → Home
  - `/entities` → Catálogo completo

## 💡 Funcionalidades Implementadas

### Paginación
- 8 productos por página
- Botones de navegación anterior/siguiente
- Botones numéricos para cada página
- Scroll automático al inicio al cambiar de página
- Estado activo visual en página actual

### Responsive Design
- Grid adaptativo según tamaño de pantalla
- Breakpoints para móvil (480px) y tablet (768px)
- Navbar colapsable en móviles

### Gestión de Estados
- Loading state mientras carga la API
- Manejo de errores en fetch
- Estado de paginación con React hooks

## 🧩 Componentes Principales

### Navbar
Barra de navegación con logo y enlaces a las diferentes secciones.

### Home
Página principal con hero y preview de productos destacados.

### Entities
Página de catálogo completo con paginación y listado de todos los productos.

## 📦 Dependencias

```json
{
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.x.x"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.4",
    "vite": "^5.4.11"
  }
}
```

## 🚀 Scripts Disponibles

```bash
npm run dev        # Inicia el servidor de desarrollo
npm run build      # Construye la aplicación para producción
npm run preview    # Previsualiza la build de producción
```

## 📱 Compatibilidad

- Chrome (últimas 2 versiones)
- Firefox (últimas 2 versiones)
- Safari (últimas 2 versiones)
- Edge (últimas 2 versiones)


## 👨‍💻 Desarrollo

Proyecto desarrollado como parte de un ejercicio práctico de React, consumo de APIs y navegación con React Router.

## 🌐 Enlaces del Proyecto

- **🚀 Deploy en Vercel**: [https://fakestore-react-dde5lmb33-juans-projects-4f9c141b.vercel.app](https://fakestore-react-dde5lmb33-juans-projects-4f9c141b.vercel.app)
- **📁 Repositorio GitHub**: [https://github.com/JuanAguirre10/FakeStore-Eval03](https://github.com/JuanAguirre10/FakeStore-Eval03)
- **🎥 Video Demostración**: [Próximamente]

---

## 🔗 Otros enlaces

- [FakeStore API Documentation](https://fakestoreapi.com/docs)
- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [React Router Documentation](https://reactrouter.com)

---

