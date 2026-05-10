# La Lora Web — Agente del Proyecto Web

> Este archivo define las reglas, patrones y mejores prácticas para el desarrollo de la aplicación web de La Lora (landing page + panel de administración).

---

## 1. Arquitectura y Stack Tecnológico

- **Framework:** Next.js 16 (App Router), React 19
- **Lenguaje:** TypeScript (Strict Mode)
- **Estilos:** Tailwind CSS 4
- **Animaciones:** Motion (motion/react)
- **Data Fetching:** TanStack React Query 5
- **Estado Local:** Zustand
- **Iconos:** Lucide React
- **Deploy:** Static Export (`output: 'export'`)

### Estructura de Carpetas

```
src/
  app/                     # Next.js App Router
    (landing)/             # Rutas públicas (landing, about, partners, contact, restaurants)
      layout.tsx           # Navbar + Footer wrapper
      page.tsx             # Home
      about/page.tsx
      partners/page.tsx
      contact/page.tsx
      terms/page.tsx
      restaurants/page.tsx
      restaurant/[id]/page.tsx
    login/                 # Página de login
    forgot-password/       # Recuperación de contraseña
    (admin)/               # Rutas protegidas (dashboard, orders, products, etc.)
      layout.tsx           # AdminSidebar + Header wrapper
      page.tsx             # Dashboard default
      tables/page.tsx
      cashier/page.tsx
      kitchen/page.tsx
      menu/page.tsx
      users/page.tsx
  components/
    layout/                # Navbar, Footer, AdminSidebar
    ui/                    # Componentes reutilizables
  lib/                     # Utilidades, fetch wrapper, auth helpers
  hooks/                   # TanStack Query hooks
  types/                   # Tipos TypeScript (sincronizados con backend DTOs)
```

---

## 2. Reglas de Implementación Obligatorias

### 2.1 Actualizaciones Quirúrgicas
- Modificar solo lo necesario. Seguir patrones de nombrado y código existentes.

### 2.2 Type Safety
- Siempre usar tipos e interfaces correctos para cambios relacionados con datos.
- Sincronizar tipos con los DTOs del backend (`lalorabacknest/AGENTS.md`).
- **NUNCA** usar `any` sin justificación explícita.

### 2.3 UI/UX
- Usar clases utilitarias de Tailwind CSS.
- Elementos interactivos deben tener estados `hover:` y `focus:`.
- Animaciones con `motion` (motion/react) — preservar todas las animaciones existentes.
- Diseño visual sigue las reglas de `DESIGN.md`.

### 2.4 Performance
- Usar React Query para cache y data fetching.
- Componentes de servidor (Server Components) por defecto en Next.js.
- Usar `'use client'` solo cuando sea estrictamente necesario (interactividad, hooks, motion).
- Optimizar renders con `useMemo`, `useCallback` cuando sea necesario.

### 2.5 Seguridad
- **NUNCA** loguear ni commitear variables `.env` o tokens sensibles.
- Token JWT en `localStorage` (simplifica hidración; cookie httpOnly requiere API routes intermedias).
- Protección de rutas `/admin/*` via client-side auth (verificar token en localStorage y redirigir).

---

## 3. Contrato API (Web ↔ Backend)

### 3.1 Formato de Respuesta del Backend

**TODAS** las respuestas del backend siguen este formato (vía `SuccessResponseInterceptor`):

```json
{
  "success": true,
  "data": { ... },
  "message": "Operation successful"
}
```

**La web DEBE extraer `response.data` de este wrapper** en todos sus hooks y utilidades de fetch.

### 3.2 Formato de Error

```json
{
  "success": false,
  "message": "Error description",
  "statusCode": 400,
  "errors": [ ... ]
}
```

### 3.3 Autenticación
- **Header**: `Authorization: Bearer <access_token>`
- **Refresh**: Endpoint dedicado para renovar tokens expirados.
- **Roles con acceso web**: `SUPER_ADMIN`, `ADMIN`, `CASHIER`.
- **Roles sin acceso web**: `WAITER`, `KITCHEN` (usan la app móvil).

### 3.4 Headers Requeridos

| Header | Descripción |
|---|---|
| `Authorization` | Bearer token para endpoints protegidos |
| `X-Request-Id` | UUID único por request (generado por backend, opcional en web) |
| `Content-Type` | `application/json` |

---

## 4. API Actions y Hooks

### 4.1 Fetch Wrapper
**TODAS** las llamadas a API DEBEN usar el wrapper `lib/api.ts`. Nunca crear fetch directo.

```typescript
// Ejemplo de uso
const response = await api.get('/admin/products');
const data = response.data; // Extraer del wrapper { success, data, message }
```

### 4.2 Estructura de API Actions

```
lib/
├── api.ts                   # Fetch wrapper (get, post, put, delete)
├── auth.ts                  # Helpers de auth (login, logout, refresh, getToken)
└── utils.ts                 # cn() helper de shadcn

hooks/
├── useAuth.ts               # Hook de autenticación
├── useOrders.ts             # Hook de órdenes
├── useProducts.ts           # Hook de productos
├── useCategories.ts         # Hook de categorías
├── useZones.ts              # Hook de zonas
├── useTables.ts             # Hook de mesas
├── useUsers.ts              # Hook de usuarios
└── useDashboard.ts          # Hook de estadísticas del dashboard
```

### 4.3 TanStack Query Hooks

Todos los hooks de data fetching con cache DEBEN estar en `hooks/`:

```typescript
// Ejemplo de estructura de hook
export function useProducts(companyId: string) {
  return useQuery({
    queryKey: ['products', companyId],
    queryFn: () => fetchProducts(companyId),
  });
}
```

---

## 5. Delegación al Backend

**Cuando necesites un nuevo endpoint o cambio en el backend:**
1. Delegar primero a `lalorabacknest` usando su `AGENTS.md`.
2. El backend define el contrato (endpoint, DTOs, respuesta).
3. Luego implementar el consumo en la web con el wrapper `api.ts` y hooks correspondientes.

**Referencia del backend:** `../lalorabacknest/AGENTS.md`

---

## 6. Convención de Commits

Formato: `tipo(scope): descripción`

| Tipo | Uso |
|---|---|
| `feat` | Nueva funcionalidad |
| `fix` | Corrección de bug |
| `docs` | Cambios en documentación |
| `style` | Formato (sin cambio lógico) |
| `refactor` | Refactorización de código |
| `test` | Añadir tests |
| `chore` | Tareas de mantenimiento |

Ejemplos:
- `feat(landing): add hero section with CTA`
- `fix(admin): fix orders table pagination`
- `refactor(api): extract fetch wrapper to lib/api.ts`

---

## 7. Comandos del Proyecto

```bash
npm run dev              # Iniciar servidor de desarrollo
npm run build            # Build de producción (static export)
npm run start            # Iniciar servidor de producción (sirve out/)
npm run lint             # Linting con ESLint
```

---

## 8. Static Export Limitations

Este proyecto usa `output: 'export'` para deploy estático. Limitaciones conocidas:
- ❌ No `proxy.ts` / middleware (protección de admin es client-side)
- ❌ No Server Actions
- ❌ No API Routes
- ❌ No `revalidate` / ISR
- ✅ Server Components funcionan (se renderizan en build time)
- ✅ Dynamic routes con `useParams` (client-side)
- ✅ Client-side navigation con `<Link>`

---

## 9. Multi-tenancy (Companies)

### 9.1 Concepto
La plataforma opera bajo un modelo multi-tenant donde cada restaurante es una `Company`.

### 9.2 Roles y Alcance
| Rol | Alcance |
|---|---|
| `SUPER_ADMIN` | Ve todas las compañías. Selector de compañía en el header. |
| `ADMIN` | Solo ve datos de su compañía. |
| `CASHIER` | Solo ve datos de su compañía (órdenes, pagos, reportes básicos). |

### 9.3 Implementación
- El JWT contiene `companyId` y `role`.
- Todo request autenticado filtra datos por `companyId` implícito en el token.
- `SUPER_ADMIN` puede cambiar de compañía vía selector en el header.

---

## 10. Prohibiciones Estrictas

❌ NO loguear ni commitear `.env` o tokens sensibles
❌ NO crear fetch directo (siempre usar `lib/api.ts`)
❌ NO ignorar el wrapper de respuesta `{ success, data, message }`
❌ NO hardcodear URLs de API
❌ NO usar `any` sin justificación
❌ NO commitear código sin tests asociados (para lógica de negocio)

---

## 11. Design System

El diseño visual sigue las reglas definidas en `DESIGN.md`. Puntos clave:
- **Mismos tokens** que la app móvil (`laloraapp/DESIGN.md`) para coherencia visual.
- **Adaptaciones web**: `hover:` en lugar de `active:`, layouts de página completos.
- **Tailwind v4** con `@theme` block en `globals.css`.
- **Motion** para todas las animaciones y transiciones.

**Referencia de diseño:** `./DESIGN.md`

---

## 12. Knowledge Cache Log

*[2026-05-10] Migración completa de Vite → Next.js 16 App Router con static export. Preservadas todas las animaciones de motion, diseño visual, y estructura de páginas/admin. Tailwind v4 con @theme block.*

---

**Última actualización**: 2026-05-10
