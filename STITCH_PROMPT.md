# La Lora Web — Stitch Design Prompt

> Este archivo contiene la estructura completa de páginas, wireframes y especificaciones de diseño para generar los mockups visuales en Stitch (Google).

---

## 📋 Contexto del Proyecto

**La Lora** es una plataforma SaaS tipo "línea blanca" (white-label) para restaurantes y bares. Actualmente opera en Anserma, Caldas (Colombia) y se está transformando en una plataforma multi-tenant donde cualquier restaurante puede registrarse y gestionar su operación completa.

### Público Objetivo
1. **Dueños de restaurantes**: Quieren gestionar su negocio (menú, órdenes, mesas, personal).
2. **Domiciliarios**: Quieren unirse para hacer entregas.
3. **Usuarios finales**: Quieren ordenar comida a domicilio desde una app móvil.

### Referencia Visual Principal
- **Dribbble**: https://dribbble.com/shots/26946842-Food-Delivery-App-Landing-Page
- Estilo: Moderno, limpio, gradientes suaves, ilustraciones de comida, cards con sombras sutiles.

---

## 🎨 Design Tokens

### Colores de Marca

| Token | Hex | Uso |
|---|---|---|
| **Primary** | `#0A873A` | Botones principales, acentos, estados activos |
| **Primary Dark** | `#087030` | Hover de primary |
| **Dark** | `#173E35` | Sidebar admin, footer |
| **Background** | `#F6F7F7` | Fondos de página |
| **Text** | `#1B2332` | Texto principal, headings |
| **Text Muted** | `#94A3B8` | Texto secundario, labels, placeholders |
| **Border** | `#E0E6ED` | Bordes, divisores |

### Colores Semánticos

| Estado | Background | Text |
|---|---|---|
| Success | `#ECFDF5` (emerald-50) | `#059669` (emerald-600) |
| Warning | `#FEF3C7` (amber-100) | `#D97706` (amber-600) |
| Danger | `#FEF2F2` (red-50) | `#EF4444` (red-500) |
| Info | `#0A873A` con 10% opacidad | `#0A873A` |

### Tipografía

- **Font**: Inter (Google Fonts)
- **Weights**: 400 (normal), 500 (medium), 600 (semibold), 700 (bold), 800 (extrabold)

### Border Radius

- Cards: `rounded-2xl` (16px)
- Buttons/Inputs: `rounded-xl` (12px)
- Badges/Pills: `rounded-full`
- Summary Cards: `rounded-3xl` (24px)

### Sombras

- Cards: `shadow-sm`
- Hover cards: `shadow-md`
- Modals/Floating: `shadow-lg`
- Hero emphasis: `shadow-xl`
- Colored: `shadow-lora-primary/20`

---

## 🗺️ Mapa del Sitio (Sitemap)

```
La Lora Web
├── 🌐 PÚBLICO (Navbar + Footer en todas las páginas)
│   ├── / (Landing Page)
│   │   ├── Hero Section
│   │   ├── Features Section (6 cards)
│   │   ├── How It Works Section (3 pasos)
│   │   ├── Partners Preview (5 logos)
│   │   └── CTA Section
│   ├── /contact (ContactUs)
│   │   ├── Tabs: Restaurante | Domiciliario | Usuario
│   │   ├── Formulario de registro
│   │   └── Explicación para usuario final
│   ├── /partners (Aliados)
│   │   ├── Filtro por categoría
│   │   └── Grid de restaurantes aliados
│   └── /how-it-works (Cómo Funciona)
│       ├── 5 pasos para usuario final
│       └── CTA de descarga de app
│
├── 🔐 AUTENTICACIÓN
│   └── /login
│       ├── Formulario email + password
│       └── Link a registro (contact)
│
└── 🛡️ ADMIN PANEL (Sidebar + Header en todas las páginas)
    ├── /admin/dashboard
    │   ├── 4 Stat Cards (Ventas, Órdenes, Mesas, Productos)
    │   ├── Gráfico de ventas por hora
    │   ├── Gráfico de productos más vendidos
    │   └── Tabla de órdenes recientes
    ├── /admin/orders
    │   ├── Botón "Nueva Orden"
    │   └── Tabla de todas las órdenes con filtros
    ├── /admin/products
    │   ├── Botón "Agregar Producto"
    │   └── Grid/Tabla de productos
    ├── /admin/categories
    │   ├── Botón "Agregar Categoría"
    │   └── Lista de categorías
    ├── /admin/zones
    │   ├── Botón "Agregar Zona"
    │   └── Grid de zonas
    ├── /admin/tables
    │   ├── Botón "Agregar Mesa"
    │   └── Mapa/Grid de mesas con estados
    ├── /admin/users
    │   ├── Botón "Agregar Usuario"
    │   └── Tabla de usuarios con roles
    ├── /admin/reports
    │   ├── Filtros por fecha
    │   ├── Gráficos de ventas
    │   └── Tablas de datos
    └── /admin/settings
        ├── Configuración del restaurante
        ├── Gestión de horarios
        └── Integraciones
```

---

## 📐 Wireframes Detallados por Página

### 1. Landing Page (`/`)

```
┌─────────────────────────────────────────────────────────────────┐
│ NAVBAR (sticky, bg-white/80 backdrop-blur)                      │
│ [Logo LL]  Inicio  Cómo Funciona  Aliados  Contacto             │
│                              [Iniciar Sesión] [Registra tu Rest]│
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  HERO SECTION                                                   │
│  bg-gradient-to-br from-lora-primary/5 to-white                 │
│  py-20 md:py-32                                                 │
│                                                                 │
│  ┌─────────────────────────┐  ┌─────────────────────────────┐  │
│  │ Gestiona tu restaurante │  │  ┌──────┐  ┌──────┐        │  │
│  │ de forma simple y       │  │  │ Menú │  │ Domic│        │  │
│  │ eficiente               │  │  └──────┘  └──────┘        │  │
│  │                         │  │  ┌──────┐  ┌──────┐        │  │
│  │ [Registra tu Rest →]   │  │  │ App  │  │ Rep  │        │  │
│  │ [Cómo Funciona]        │  │  └──────┘  └──────┘        │  │
│  └─────────────────────────┘  └─────────────────────────────┘  │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  FEATURES SECTION (py-20, bg-white)                             │
│  "¿Por qué elegir La Lora?"                                     │
│                                                                 │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐               │
│  │ ⚡ Icon    │  │ 🕐 Icon    │  │ 📊 Icon    │               │
│  │ Rápido     │  │ Tiempo Real│  │ Todo en Uno│               │
│  │ Desc...    │  │ Desc...    │  │ Desc...    │               │
│  └────────────┘  └────────────┘  └────────────┘               │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐               │
│  │ 🛡️ Icon    │  │ 📈 Icon    │  │ 👥 Icon    │               │
│  │ Seguro     │  │ Reportes   │  │ Multi-User │               │
│  │ Desc...    │  │ Desc...    │  │ Desc...    │               │
│  └────────────┘  └────────────┘  └────────────┘               │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  HOW IT WORKS (py-20, bg-lora-bg)                               │
│  "Comienza en 3 simples pasos"                                  │
│                                                                 │
│  ┌─────┐         ┌─────┐         ┌─────┐                       │
│  │  1  │─────────│  2  │─────────│  3  │                       │
│  └─────┘         └─────┘         └─────┘                       │
│  Registra      Gestiona        Conecta                          │
│  tu Rest       tu Operación    con Clientes                     │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  PARTNERS PREVIEW (py-20, bg-white)                             │
│  "Restaurantes que confían en nosotros"                         │
│                                                                 │
│  [🍽️]  [☕]  [🍕]  [🍺]  [🍦]                                 │
│                                                                 │
│                    [Ver Todos los Aliados]                      │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  CTA SECTION (py-20, bg-lora-primary, text-white)               │
│                                                                 │
│         ¿Listo para transformar tu restaurante?                 │
│         Únete a La Lora y lleva tu negocio al siguiente nivel   │
│                                                                 │
│                    [Comienza Ahora →]                           │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│ FOOTER (bg-lora-dark, text-white)                               │
│ [Logo]  Producto  Empresa  Legal    [Globe] [Mail] [Phone]     │
│ © 2026 La Lora. Todos los derechos reservados.                  │
└─────────────────────────────────────────────────────────────────┘
```

---

### 2. Contact Page (`/contact`)

```
┌─────────────────────────────────────────────────────────────────┐
│ NAVBAR (sticky)                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  CONTACTO (py-20, bg-lora-bg)                                   │
│                                                                 │
│              Contáctanos                                        │
│  ¿Eres restaurante, domiciliario o usuario?                     │
│                                                                 │
│  ┌────────────────┐ ┌────────────────┐ ┌────────────────┐      │
│  │ 🍽️ Soy Restaurante│ │ 🚴 Soy Domiciliario│ │ 👥 Soy Usuario   │      │
│  └────────────────┘ └────────────────┘ └────────────────┘      │
│        (active)                                                  │
│                                                                 │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │  Registra tu Restaurante                                  │ │
│  │                                                           │ │
│  │  Nombre Completo          Teléfono                        │ │
│  │  [________________]       [________________]              │ │
│  │                                                           │ │
│  │  Correo Electrónico                                       │ │
│  │  [__________________________________________]             │ │
│  │                                                           │ │
│  │  Nombre del Restaurante                                   │ │
│  │  [__________________________________________]             │ │
│  │                                                           │ │
│  │  Mensaje (Opcional)                                       │ │
│  │  [__________________________________________]             │ │
│  │                                                           │ │
│  │              [📤 Enviar Solicitud]                        │ │
│  └───────────────────────────────────────────────────────────┘ │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│ FOOTER                                                          │
└─────────────────────────────────────────────────────────────────┘
```

---

### 3. Partners Page (`/partners`)

```
┌─────────────────────────────────────────────────────────────────┐
│ NAVBAR (sticky)                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  NUESTROS ALIADOS (py-20, bg-lora-bg)                           │
│                                                                 │
│              Nuestros Aliados                                   │
│  Descubre los restaurantes que ya confían en La Lora            │
│                                                                 │
│  [Todos] [Comida Típica] [Cafetería] [Pizzería] [Bar] [Heladería]│
│                                                                 │
│  ┌─────────────────────┐  ┌─────────────────────┐              │
│  │ 🍽️  Restaurante El  │  │ ☕  Café de Montaña │              │
│  │     Sabor           │  │     Cafetería       │              │
│  │     [Comida Típica] │  │     [Cafetería]     │              │
│  │     Lo mejor de...  │  │     Café de origen  │              │
│  └─────────────────────┘  └─────────────────────┘              │
│  ┌─────────────────────┐  ┌─────────────────────┐              │
│  │ 🍕  Pizzería Don    │  │ 🍺  Bar La Esquina  │              │
│  │     Pepe            │  │     Bar             │              │
│  │     [Pizzería]      │  │     [Bar]           │              │
│  │     Pizzas artes... │  │     El punto de...  │              │
│  └─────────────────────┘  └─────────────────────┘              │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│ FOOTER                                                          │
└─────────────────────────────────────────────────────────────────┘
```

---

### 4. How It Works Page (`/how-it-works`)

```
┌─────────────────────────────────────────────────────────────────┐
│ NAVBAR (sticky)                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  CÓMO FUNCIONA (py-20, bg-lora-bg)                              │
│                                                                 │
│              Cómo Funciona                                      │
│  Ordenar comida a domicilio nunca fue tan fácil                 │
│                                                                 │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │  [1]  📱  Descarga la App                                 │ │
│  │        Disponible en App Store y Google Play              │ │
│  └───────────────────────────────────────────────────────────┘ │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │  [2]  🔍  Explora Restaurantes                            │ │
│  │        Descubre los mejores restaurantes en Anserma       │ │
│  └───────────────────────────────────────────────────────────┘ │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │  [3]  🛒  Elige tu Pedido                                 │ │
│  │        Navega por menús, personaliza tus platos           │ │
│  └───────────────────────────────────────────────────────────┘ │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │  [4]  🚚  Recibe en Casa                                  │ │
│  │        Un domiciliario llevará tu pedido a tu puerta      │ │
│  └───────────────────────────────────────────────────────────┘ │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │  [5]  ⭐  Califica y Comenta                               │ │
│  │        Ayuda a otros usuarios compartiendo tu experiencia │ │
│  └───────────────────────────────────────────────────────────┘ │
│                                                                 │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │  bg-lora-primary, rounded-3xl, p-12, text-white           │ │
│  │                                                           │ │
│  │         ¡Descarga la App Ahora!                           │ │
│  │    Pronto disponible en App Store y Google Play           │ │
│  │                                                           │ │
│  │    [App Store (Próximamente)] [Google Play (Próximamente)]│ │
│  └───────────────────────────────────────────────────────────┘ │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│ FOOTER                                                          │
└─────────────────────────────────────────────────────────────────┘
```

---

### 5. Login Page (`/login`)

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│                                                                 │
│                    ┌─────────────────────────┐                  │
│                    │       [LL]              │                  │
│                    │                         │                  │
│                    │   Bienvenido de Vuelta  │                  │
│                    │   Ingresa a tu cuenta   │                  │
│                    │                         │                  │
│                    │   Correo Electrónico    │                  │
│                    │   [________________]    │                  │
│                    │                         │                  │
│                    │   Contraseña            │                  │
│                    │   [________________]    │                  │
│                    │                         │                  │
│                    │   [Iniciar Sesión]      │                  │
│                    │                         │                  │
│                    │   ¿Quieres registrar    │                  │
│                    │   tu restaurante?       │                  │
│                    │   Contáctanos           │                  │
│                    └─────────────────────────┘                  │
│                                                                 │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### 6. Admin Dashboard (`/admin/dashboard`)

```
┌──────────────┬──────────────────────────────────────────────────┐
│              │  HEADER (fixed, bg-white, h-16, border-b)       │
│  [LL] La Lora│  Panel de Administración        [👤 Admin]      │
│              ├──────────────────────────────────────────────────┤
│ 📊 Dashboard │                                                  │
│ 📦 Orders    │  DASHBOARD (bg-lora-bg, p-6)                     │
│ 🍔 Products  │                                                  │
│ 📋 Categories│  ┌──────────┐ ┌──────────┐ ┌──────────┐        │
│ 🏢 Zones     │  │ Ventas   │ │ Órdenes  │ │ Mesas    │        │
│ 🪑 Tables    │  │ Hoy      │ │ Activas  │ │ Ocupadas │        │
│ 👥 Users     │  │ $1.2M    │ │ 45       │ │ 8/12     │        │
│ 📈 Reports   │  │ ↑ 12%    │ │ ↑ 8%     │ │ 67%      │        │
│ ⚙️  Settings  │  └──────────┘ └──────────┘ └──────────┘        │
│              │  ┌──────────┐                                    │
│ ──────────── │  │ Productos│                                    │
│ 🏠 Volver    │  │ 156      │                                    │
│ 🚪 Logout    │  │ ↑ 3      │                                    │
│              │  └──────────┘                                    │
│              │                                                  │
│              │  ┌────────────────────────────────────────────┐ │
│              │  │ Gráfico de Ventas por Hora (Line Chart)    │ │
│              │  │                                            │ │
│              │  │  ╱╲    ╱╲                                  │ │
│              │  │ ╱  ╲  ╱  ╲                                 │ │
│              │  │╱    ╲╱    ╲                                │ │
│              │  └────────────────────────────────────────────┘ │
│              │  ┌─────────────────┐ ┌──────────────────────┐  │
│              │  │ Top Productos   │ │ Órdenes Recientes    │  │
│              │  │ (Donut Chart)   │ │                      │  │
│              │  │                 │ │ #1234 Juan EN_CURSO  │  │
│              │  │  🟢 60%         │ │ #1233 María PENDIENTE│  │
│              │  │  🟡 25%         │ │ #1232 Carlos FINALIZ │  │
│              │  │  🔴 15%         │ │                      │  │
│              │  └─────────────────┘ └──────────────────────┘  │
│              │                                                  │
└──────────────┴──────────────────────────────────────────────────┘
```

---

### 7. Admin Orders (`/admin/orders`)

```
┌──────────────┬──────────────────────────────────────────────────┐
│              │  HEADER                                           │
│  [LL] La Lora│  Panel de Administración        [👤 Admin]       │
│              ├──────────────────────────────────────────────────┤
│ 📊 Dashboard │                                                  │
│ 📦 Orders    │  ÓRDENES (bg-lora-bg, p-6)                       │
│ 🍔 Products  │                                                  │
│ 📋 Categories│  Órdenes                        [+ Nueva Orden]  │
│ 🏢 Zones     │                                                  │
│ 🪑 Tables    │  ┌────────────────────────────────────────────┐ │
│ 👥 Users     │  │ Todas las Órdenes                          │ │
│ 📈 Reports   │  │                                            │ │
│ ⚙️  Settings  │  │ Orden │ Cliente │ Items │ Mesa │ Estado   │ │
│              │  │ ────────────────────────────────────────── │ │
│              │  │ #1234 │ Juan    │ 3     │ M5   │ 🟢EN_CURSO│ │
│              │  │ #1233 │ María   │ 2     │ M3   │ 🟡PENDIENT│ │
│              │  │ #1232 │ Carlos  │ 5     │ M1   │ ⚪FINALIZ │ │
│              │  │ #1231 │ Ana     │ 1     │ M8   │ 🟢EN_CURSO│ │
│              │  │ #1230 │ Pedro   │ 4     │ M2   │ 🔴CANCEL  │ │
│              │  │                                            │ │
│              │  │                    [1] 2 3 4 5             │ │
│              │  └────────────────────────────────────────────┘ │
│              │                                                  │
└──────────────┴──────────────────────────────────────────────────┘
```

---

### 8. Admin Tables (`/admin/tables`)

```
┌──────────────┬──────────────────────────────────────────────────┐
│              │  HEADER                                           │
│  [LL] La Lora│  Panel de Administración        [👤 Admin]       │
│              ├──────────────────────────────────────────────────┤
│ 📊 Dashboard │                                                  │
│ 📦 Orders    │  MESAS (bg-lora-bg, p-6)                         │
│ 🍔 Products  │                                                  │
│ 📋 Categories│  Mesas                          [+ Agregar Mesa] │
│ 🏢 Zones     │                                                  │
│ 🪑 Tables    │  ┌────────────────────────────────────────────┐ │
│ 👥 Users     │  │                                            │ │
│ 📈 Reports   │  │  ┌─────┐  ┌─────┐  ┌─────┐  ┌─────┐      │ │
│ ⚙️  Settings  │  │  │ M1  │  │ M2  │  │ M3  │  │ M4  │      │ │
│              │  │  │ 🟢  │  │ 🔴  │  │ 🟢  │  │ 🟡  │      │ │
│              │  │  │Libre│  │Ocup │  │Libre│  │Reser│      │ │
│              │  │  └─────┘  └─────┘  └─────┘  └─────┘      │ │
│              │  │                                            │ │
│              │  │  ┌─────┐  ┌─────┐  ┌─────┐  ┌─────┐      │ │
│              │  │  │ M5  │  │ M6  │  │ M7  │  │ M8  │      │ │
│              │  │  │ 🟢  │  │ 🔴  │  │ 🔴  │  │ 🟢  │      │ │
│              │  │  │Libre│  │Ocup │  │Ocup │  │Libre│      │ │
│              │  │  └─────┘  └─────┘  └─────┘  └─────┘      │ │
│              │  │                                            │ │
│              │  │  Leyenda: 🟢 Disponible  🔴 Ocupada  🟡 Reservada│ │
│              │  └────────────────────────────────────────────┘ │
│              │                                                  │
└──────────────┴──────────────────────────────────────────────────┘
```

---

## 🎯 Instrucciones para Stitch

### Prompt Principal para Stitch

```
Create a modern web application design for "La Lora" - a white-label SaaS platform for restaurant management.

DESIGN SYSTEM:
- Primary color: #0A873A (green)
- Dark accent: #173E35
- Background: #F6F7F7
- Text: #1B2332
- Font: Inter (Google Fonts)
- Border radius: 16px for cards, 12px for buttons/inputs, full for badges
- Shadows: subtle, shadow-sm for cards, shadow-md for hover

REFERENCE:
- Inspired by: https://dribbble.com/shots/26946842-Food-Delivery-App-Landing-Page
- Style: Modern, clean, soft gradients, food illustrations, subtle card shadows

PAGES TO DESIGN:

1. LANDING PAGE (/)
   - Sticky navbar with logo, navigation links, login button, CTA button
   - Hero section with gradient background, headline, subtitle, two CTA buttons, illustration card with 4 feature icons
   - Features section with 6 cards in a 3x2 grid (icon, title, description)
   - How it works section with 3 numbered steps connected by a line
   - Partners preview with 5 restaurant logos in a row
   - CTA section with green background, white text, white button
   - Footer with dark background, logo, links, social icons

2. CONTACT PAGE (/contact)
   - Three tabs: "Soy Restaurante", "Soy Domiciliario", "Soy Usuario"
   - Form with name, phone, email, business name, message fields
   - Submit button with send icon

3. PARTNERS PAGE (/partners)
   - Category filter pills
   - Grid of restaurant cards with emoji icon, name, category badge, description

4. HOW IT WORKS PAGE (/how-it-works)
   - 5 vertical steps with number circles, icons, titles, descriptions
   - Bottom CTA card with green background and download buttons

5. LOGIN PAGE (/login)
   - Centered card with logo, title, email input, password input, submit button
   - Link to contact page

6. ADMIN DASHBOARD (/admin/dashboard)
   - Fixed dark sidebar (240px) with navigation items
   - Fixed white header with title and user avatar
   - 4 stat cards with icon, value, trend indicator
   - Line chart for sales over time
   - Donut chart for top products
   - Recent orders table with status badges

7. ADMIN ORDERS (/admin/orders)
   - Table with columns: Order, Customer, Items, Table, Status, Total, Date, Actions
   - Status badges with colors (green=active, yellow=pending, gray=completed, red=cancelled)
   - "New Order" button

8. ADMIN TABLES (/admin/tables)
   - Visual grid of table cards showing status (available, occupied, reserved)
   - Color-coded status indicators
   - Legend at the bottom

IMPORTANT:
- All pages should be responsive (mobile, tablet, desktop)
- Use consistent spacing (6px grid system)
- Hover states on all interactive elements
- Smooth transitions (0.2s for micro-interactions)
- No sharp corners - everything rounded
- Clean, minimal, professional design
```

---

## 📸 Screenshots de Referencia

### De la App Móvil (para coherencia visual)

> **Nota**: Adjuntar los siguientes screenshots de la app móvil `laloraapp` para que Stitch mantenga coherencia visual:

1. **Pantalla de Admin Dashboard** - Muestra las admin summary cards con iconos, valores y tendencias.
2. **Pantalla de Menú/Productos** - Muestra las product cards con imágenes, nombres y precios.
3. **Pantalla de Órdenes** - Muestra las order cards con estados y badges.
4. **Pantalla de Mesas** - Muestra el estado de mesas con colores.
5. **Pantalla de Login** - Muestra el formulario de autenticación.
6. **ScreenHeader** - Muestra el patrón de header con título, subtítulo y botones de acción.

### Referencia Externa

- **Dribbble**: https://dribbble.com/shots/26946842-Food-Delivery-App-Landing-Page
  - Hero con gradiente suave
  - Ilustración de comida/delivery
  - Cards con sombras sutiles
  - Botones con bordes redondeados
  - Tipografía limpia y moderna

---

## 📋 Checklist de Entrega para Stitch

- [ ] Landing page completa (5 secciones + navbar + footer)
- [ ] Contact page con tabs y formulario
- [ ] Partners page con grid y filtros
- [ ] How it works page con 5 pasos
- [ ] Login page centrada
- [ ] Admin dashboard con sidebar, header, stats, charts, table
- [ ] Admin orders con tabla completa
- [ ] Admin tables con grid visual de mesas
- [ ] Versiones responsive (mobile, tablet, desktop)
- [ ] Design tokens aplicados consistentemente
- [ ] Hover states y transiciones
- [ ] Status badges con colores semánticos

---

**Última actualización**: 2026-05-04
