# Plataforma de Indicadores Ambientales del Ecuador

Este proyecto es una plataforma web interactiva para la visualización y difusión de indicadores ambientales clave del Ecuador, como la **Huella Humana** y los **Bosques Riparios**. Está diseñada con un enfoque moderno, ecológico y profesional, utilizando React, Material-UI y animaciones avanzadas.

## 🌱 Características principales

- **Diseño moderno y ecológico**: Paleta de verdes (#1D2331, #CFFF4F, #2B443C), fuente Montserrat y títulos con Oswald.
- **Componentes reutilizables**: Incluye `ConceptCard` y bloques "¿Sabías que...??" con efecto glassmorphism.
- **Sistema de slides animados**: Navegación fluida por flechas usando Framer Motion.
- **Dashboards embebidos**: Visualización de datos en tiempo real mediante iframes.
- **Responsive y accesible**: Adaptado a dispositivos móviles y escritorio.

## 🚀 Tecnologías utilizadas

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Material-UI (MUI)](https://mui.com/)
- [Framer Motion](https://www.framer.com/motion/)

## 📁 Estructura del proyecto

```
frontend-tesis/
├── public/                # Archivos estáticos y HTML principal
├── src/
│   ├── assets/            # Imágenes y recursos gráficos
│   ├── components/        # Componentes reutilizables (Navbar, ConceptCard, etc.)
│   ├── pages/             # Páginas principales (Home, HuellaHumana, BosquesRiparios)
│   ├── theme.ts           # Configuración de tema y paleta de colores
│   ├── index.css          # Estilos globales
│   └── App.tsx            # Componente raíz
├── package.json           # Dependencias y scripts
└── README.md              # Este archivo
```

## 🖥️ ¿Cómo ejecutar el proyecto?

1. **Clona el repositorio:**
   ```sh
   git clone https://github.com/andresalmeida/frontend-tesis.git
   cd frontend-tesis
   ```
2. **Instala las dependencias:**
   ```sh
   npm install
   ```
3. **Inicia la aplicación:**
   ```sh
   npm start
   ```
   La app estará disponible en [http://localhost:3000](http://localhost:3000)

4. **(Opcional) Configura el backend de dashboards**
   - El iframe de dashboards apunta por defecto a `http://localhost:8000/`. Asegúrate de tener el backend corriendo en ese puerto si quieres ver los datos embebidos.

## 📊 Indicadores incluidos
- **Huella Humana:** Índice espacial de presión humana sobre ecosistemas.
- **Bosques Riparios:** Estado y conservación de bosques a lo largo de ríos y cuerpos de agua.

## 👨‍💻 Autor y créditos
- Desarrollado por **Andrés Almeida Jara**
- Inspirado y apoyado por el MAATE, PNUD, NASA y la comunidad científica ecuatoriana.

---

> Proyecto académico y de divulgación. ¡Contribuciones y sugerencias son bienvenidas!
