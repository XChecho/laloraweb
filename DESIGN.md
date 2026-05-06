# La Lora Web — Design System

> Single source of truth for the visual design language of the La Lora web application. All UI components must follow these tokens, patterns, and conventions.

---

## 1. Design Tokens

### 1.1 Color Palette

#### Brand Colors (Tailwind config)

| Token | Hex | Tailwind | Usage |
|---|---|---|---|
| `lora-bg` | `#F6F7F7` | `bg-lora-bg` | Page backgrounds, input backgrounds |
| `lora-primary` | `#0A873A` | `bg-lora-primary` | Primary actions, active states, accents |
| `lora-primary-dark` | `#087030` | `bg-lora-primary-dark` | Hover state for primary |
| `lora-dark` | `#173E35` | `bg-lora-dark` | Dark accents, footer background |
| `lora-text` | `#1B2332` | `text-lora-text` | Primary text, headings |
| `lora-text-muted` | `#94A3B8` | `text-lora-text-muted` | Secondary text, labels, placeholders |
| `lora-border` | `#E0E6ED` | `border-lora-border` | Borders, dividers |

#### Semantic Colors

| Purpose | Background | Text | Border |
|---|---|---|---|
| **Success** | `bg-emerald-50` | `text-emerald-600` | `border-emerald-100` |
| **Warning** | `bg-amber-100` | `text-amber-600` | `border-amber-100` |
| **Danger** | `bg-red-50` | `text-red-500` | `border-red-100` |
| **Neutral** | `bg-slate-50` | `text-slate-400` | `border-slate-200` |
| **Info** | `bg-lora-primary/10` | `text-lora-primary` | `border-lora-primary/20` |

#### Overlay Colors

| Usage | Value |
|---|---|
| Modal backdrop | `bg-black/50` |
| Dropdown backdrop | `bg-black/20` |

### 1.2 Typography

**Font Family**: Inter (Google Fonts, 5 weights).

| Weight | Class | Usage |
|---|---|---|
| 400 | `font-normal` | Body text, descriptions |
| 500 | `font-medium` | Labels, secondary emphasis |
| 600 | `font-semibold` | Input text, subtitles |
| 700 | `font-bold` | Headings, button text, values |
| 800 | `font-extrabold` | Badges, tracking labels, counters |

#### Type Scale (Web)

| Size | Class | Approx px | Usage |
|---|---|---|---|
| Display | `text-6xl` | 60px | Hero title |
| H1 | `text-4xl` | 36px | Page titles |
| H2 | `text-3xl` | 30px | Section headers |
| H3 | `text-2xl` | 24px | Card titles, modal titles |
| H4 | `text-xl` | 20px | Subsection headers |
| Body | `text-base` | 16px | Body text, button text |
| Small | `text-sm` | 14px | Supporting text, prices |
| Caption | `text-xs` | 12px | Labels (uppercase), badges |

#### Label Convention
- **Uppercase labels**: `uppercase tracking-widest` for section labels and tracking headers.
- **Color**: `text-lora-text-muted` for labels, `text-lora-primary` for brand subtitles.

### 1.3 Border Radius Scale

| Value | Usage |
|---|---|
| `rounded-md` (6px) | Small interactive elements |
| `rounded-lg` (8px) | Inputs, small cards |
| `rounded-xl` (12px) | Tags, filter chips |
| `rounded-2xl` (16px) | Buttons, cards |
| `rounded-3xl` (24px) | Admin summary cards, large cards |
| `rounded-full` | Pills, badges, avatar containers |

### 1.4 Spacing

| Context | Pattern |
|---|---|
| Page horizontal padding | `px-6 md:px-8 lg:px-12` |
| Section vertical gap | `py-16` (landing), `py-8` (admin) |
| Card gap | `gap-6` |
| Intra-section gap | `mb-6` |
| Large gap | `mb-8` or `mb-12` |
| Modal internal padding | `p-6` |
| Input padding | `p-3` |
| Button vertical padding | `py-2` (sm), `py-3` (md), `py-4` (lg) |

### 1.5 Shadows

| Class | Usage |
|---|---|
| `shadow-sm` | Cards, inputs |
| `shadow-md` | Dropdowns, hover states |
| `shadow-lg` | Modals, floating elements |
| `shadow-xl` | Hero cards, emphasis |
| Colored shadows | `shadow-lora-primary/20`, `shadow-red-500/20` |

---

## 2. Layout Patterns

### 2.1 Landing Page Structure

```
┌─────────────────────────────────────────────┐
│                 Navbar (fixed)               │
├─────────────────────────────────────────────┤
│                                             │
│              Hero Section                   │
│         (gradient bg, CTA, illustration)    │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│            Features Section                 │
│           (3-card grid)                     │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│          How It Works Section               │
│          (3 steps with numbers)             │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│          Partners Preview                   │
│        (logos carousel/grid)                │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│              CTA Section                    │
│        (primary bg, white text)             │
│                                             │
├─────────────────────────────────────────────┤
│                 Footer                      │
└─────────────────────────────────────────────┘
```

### 2.2 Admin Panel Structure

```
┌──────────┬──────────────────────────────────┐
│          │           Header (fixed)         │
│ Sidebar  ├──────────────────────────────────┤
│ (fixed)  │                                  │
│          │         Content Area             │
│          │        (scrollable)              │
│          │                                  │
│          │                                  │
└──────────┴──────────────────────────────────┘
```

- **Sidebar**: 240px width, fixed left, dark background (`bg-lora-dark`).
- **Header**: 64px height, fixed top, white background, border bottom.
- **Content**: `ml-[240px] mt-[64px]`, padding `p-6`, background `bg-lora-bg`.

### 2.3 Responsive Breakpoints

| Breakpoint | Width | Behavior |
|---|---|---|
| Mobile | `< 768px` | Sidebar as drawer, single column |
| Tablet | `768px - 1024px` | Sidebar collapsible, 2 columns |
| Desktop | `> 1024px` | Sidebar visible, multi-column |

---

## 3. Component Patterns

### 3.1 Navbar (Landing)

```
┌─────────────────────────────────────────────┐
│  [Logo]  Links...           [Login] [CTA]   │
└─────────────────────────────────────────────┘
```

- **Background**: `bg-white/80 backdrop-blur-md` (sticky).
- **Links**: `text-lora-text hover:text-lora-primary transition-colors`.
- **Login Button**: `text-lora-text hover:text-lora-primary`.
- **CTA Button**: `bg-lora-primary text-white hover:bg-lora-primary-dark`.

### 3.2 Footer

```
┌─────────────────────────────────────────────┐
│  [Logo]  Links    Links    Links    Social  │
│  © 2026 La Lora. All rights reserved.       │
└─────────────────────────────────────────────┘
```

- **Background**: `bg-lora-dark text-white`.
- **Links**: `text-gray-300 hover:text-white transition-colors`.
- **Social Icons**: `w-10 h-10 rounded-full bg-white/10 hover:bg-white/20`.

### 3.3 Buttons (shadcn/ui base)

#### Primary Button
```tsx
<Button className="bg-lora-primary hover:bg-lora-primary-dark text-white">
  Label
</Button>
```
- Add `shadow-md shadow-lora-primary/20` for emphasis.

#### Secondary Button
```tsx
<Button variant="outline" className="border-lora-border text-lora-text hover:bg-lora-bg">
  Label
</Button>
```

#### Ghost Button
```tsx
<Button variant="ghost" className="text-lora-text hover:bg-lora-bg">
  Label
</Button>
```

#### Danger Button
```tsx
<Button variant="destructive">
  Label
</Button>
```

### 3.4 Cards

#### Landing Feature Card
```tsx
<Card className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
  <CardHeader>
    <div className="w-12 h-12 rounded-xl bg-lora-primary/10 flex items-center justify-center">
      <Icon className="text-lora-primary" />
    </div>
    <CardTitle>Feature Name</CardTitle>
  </CardHeader>
  <CardContent>
    <p className="text-lora-text-muted">Description</p>
  </CardContent>
</Card>
```

#### Admin Summary Card
```tsx
<Card className="bg-white rounded-2xl p-5 shadow-sm">
  <div className="flex items-center justify-between">
    <div>
      <p className="text-sm text-lora-text-muted">Label</p>
      <p className="text-2xl font-bold text-lora-text">Value</p>
    </div>
    <div className="w-10 h-10 rounded-xl bg-lora-primary/10 flex items-center justify-center">
      <Icon className="text-lora-primary" />
    </div>
  </div>
</Card>
```

### 3.5 Tables (shadcn/ui + TanStack Table)

```tsx
<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Column</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Data</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

- **Zebra striping**: `TableRow className="even:bg-lora-bg/50"`.
- **Hover**: `TableRow className="hover:bg-lora-bg"`.
- **Pagination**: Below table, centered.

### 3.6 Inputs (shadcn/ui base)

```tsx
<Input placeholder="Enter text" className="border-lora-border focus:border-lora-primary" />
```

**With icon prefix**:
```tsx
<div className="relative">
  <Icon className="absolute left-3 top-1/2 -translate-y-1/2 text-lora-text-muted" />
  <Input className="pl-10" />
</div>
```

### 3.7 Badges / Status Pills

```tsx
<Badge className="bg-emerald-50 text-emerald-600 border-emerald-100">
  CONFIRMED
</Badge>
```

| Status | Background | Text |
|---|---|---|
| PENDING | `bg-amber-100` | `text-amber-600` |
| CONFIRMED | `bg-emerald-50` | `text-emerald-600` |
| IN_PROGRESS | `bg-lora-primary/10` | `text-lora-primary` |
| CANCELLED | `bg-red-50` | `text-red-500` |
| COMPLETED | `bg-slate-100` | `text-slate-500` |

### 3.8 Modals (shadcn/ui Dialog)

```tsx
<Dialog>
  <DialogContent className="rounded-2xl p-6">
    <DialogHeader>
      <DialogTitle>Title</DialogTitle>
      <DialogDescription>Description</DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button variant="outline">Cancel</Button>
      <Button>Confirm</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

### 3.9 Sidebar (Admin)

```
┌─────────────────────┐
│  [Logo]             │
├─────────────────────┤
│  📊 Dashboard       │
│  📦 Orders          │
│  🍔 Products        │
│  📋 Categories      │
│  🏢 Zones           │
│  🪑 Tables          │
│  👥 Users           │
│  📈 Reports         │
│  ⚙️  Settings        │
├─────────────────────┤
│  [User] [Logout]    │
└─────────────────────┘
```

- **Active item**: `bg-lora-primary/10 text-lora-primary`.
- **Hover**: `hover:bg-white/5`.
- **Icon**: `w-5 h-5` (Lucide).
- **Collapsed state**: Icons only, tooltip on hover.

---

## 4. Landing Page Sections

### 4.1 Hero Section

```
┌─────────────────────────────────────────────┐
│  Gradient bg (lora-primary/5 to white)      │
│                                             │
│  [Headline: text-5xl font-bold]             │
│  [Subtitle: text-xl text-muted]             │
│  [CTA Button: primary]                      │
│                    [Illustration/Image]      │
│                                             │
└─────────────────────────────────────────────┘
```

- **Background**: `bg-gradient-to-br from-lora-primary/5 to-white`.
- **Headline**: `text-5xl md:text-6xl font-bold text-lora-text`.
- **Subtitle**: `text-xl text-lora-text-muted mt-4`.
- **CTA**: `mt-8`.
- **Illustration**: Right side on desktop, below on mobile.

### 4.2 Features Section

```
┌─────────────────────────────────────────────┐
│  Section Title (text-3xl font-bold)         │
│  Section Subtitle (text-muted)              │
│                                             │
│  [Card 1]  [Card 2]  [Card 3]               │
│                                             │
└─────────────────────────────────────────────┘
```

- **Grid**: `grid grid-cols-1 md:grid-cols-3 gap-6`.
- **Cards**: Feature cards (see 3.4).

### 4.3 How It Works Section

```
┌─────────────────────────────────────────────┐
│  Section Title                              │
│                                             │
│  [1] Step 1                                 │
│  [2] Step 2                                 │
│  [3] Step 3                                 │
│                                             │
└─────────────────────────────────────────────┘
```

- **Steps**: Vertical on mobile, horizontal on desktop.
- **Numbers**: `w-12 h-12 rounded-full bg-lora-primary text-white flex items-center justify-center text-xl font-bold`.
- **Connector line**: Between steps (desktop).

### 4.4 Partners Preview

```
┌─────────────────────────────────────────────┐
│  Section Title                              │
│                                             │
│  [Logo] [Logo] [Logo] [Logo] [Logo]         │
│                                             │
│  [See All Partners Button]                  │
└─────────────────────────────────────────────┘
```

- **Logos**: Grayscale, hover to color.
- **Grid**: `grid grid-cols-3 md:grid-cols-5 gap-8 items-center`.

### 4.5 CTA Section

```
┌─────────────────────────────────────────────┐
│  bg-lora-primary, text-white                │
│                                             │
│  [Headline: text-3xl font-bold]             │
│  [Subtitle: text-lg opacity-90]             │
│  [Button: white bg, primary text]           │
│                                             │
└─────────────────────────────────────────────┘
```

- **Background**: `bg-lora-primary`.
- **Button**: `bg-white text-lora-primary hover:bg-lora-bg`.

---

## 5. Admin Dashboard

### 5.1 Stats Cards Grid

```
┌──────────┬──────────┬──────────┬──────────┐
│ Sales    │ Orders   │ Tables   │ Products │
│ $1,234   │ 45       │ 8/12     │ 156      │
│ ↑ 12%    │ ↑ 8%     │ 67%      │ ↑ 3      │
└──────────┴──────────┴──────────┴──────────┘
```

- **Grid**: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6`.
- **Trend indicator**: Green for up, red for down.

### 5.2 Charts

- **Line Chart**: Sales over time (Recharts).
- **Donut Chart**: Top products (Recharts).
- **Container**: Card with padding, title, chart area.

### 5.3 Recent Orders Table

| Order | Customer | Status | Total | Date |
|---|---|---|---|---|
| #1234 | John | In Progress | $45.00 | 2h ago |

- **Sortable columns**.
- **Status badges** (see 3.7).
- **Pagination**: 10 items per page.

---

## 6. States & Interactions

### 6.1 Hover States

| Element | Pattern |
|---|---|
| Buttons | `hover:bg-lora-primary-dark` |
| Cards | `hover:shadow-md transition-shadow` |
| Links | `hover:text-lora-primary transition-colors` |
| Table rows | `hover:bg-lora-bg` |

### 6.2 Focus States

- **Ring**: `focus:ring-2 focus:ring-lora-primary/50 focus:outline-none`.
- **Inputs**: `focus:border-lora-primary`.

### 6.3 Disabled States

- **Opacity**: `opacity-50`.
- **Cursor**: `cursor-not-allowed`.
- **Background**: Neutral bg for disabled buttons.

### 6.4 Loading States

- **Spinner**: `Loader2` icon from Lucide with `animate-spin`.
- **Skeleton**: shadcn/ui `Skeleton` for data loading.
- **Button loading**: Spinner inside button, disabled state.

### 6.5 Empty States

```tsx
<div className="flex flex-col items-center justify-center py-20 bg-white/40 rounded-2xl border border-dashed border-slate-300">
  <Icon className="w-12 h-12 text-slate-300 mb-4" />
  <p className="text-lg font-semibold text-slate-400">No data available</p>
  <p className="text-sm text-slate-300 mt-1">Click "..." to get started</p>
</div>
```

---

## 7. Iconography

**Source**: Lucide React.

| Context | Size | Color |
|---|---|---|
| Input prefix | 18px | `text-lora-text-muted` |
| Card header icon | 20px | Context-dependent |
| Button icon | 18px | Matches button text |
| Sidebar icon | 20px | `text-white/70` (active: `text-lora-primary`) |
| Empty state | 48px | `text-slate-300` |
| Badge icon | 14px | Context-dependent |

---

## 8. Animations (Framer Motion)

### 8.1 Landing Page
- **Hero**: Fade in + slide up on load.
- **Cards**: Staggered fade in on scroll (useInView).
- **Logos**: Subtle hover scale (1.05).

### 8.2 Admin Panel
- **Sidebar items**: Hover scale (1.02).
- **Modals**: Fade in + scale up.
- **Tables**: Row hover transition.

### 8.3 Rules
- **Duration**: `0.2s` for micro-interactions, `0.4s` for page transitions.
- **Easing**: `ease-out` for enter, `ease-in` for exit.
- **Never** animate on hover for critical UI elements (accessibility).

---

## 9. Rules & Conventions

### 9.1 Mandatory
- **ALWAYS** use Tailwind CSS classes for styling.
- **ALWAYS** use shadcn/ui as base for interactive components.
- **ALWAYS** include `hover:` and `focus:` states for interactive elements.
- **ALWAYS** use `max-w-7xl mx-auto` for page content containers.
- **ALWAYS** use semantic HTML elements (`<header>`, `<main>`, `<footer>`, `<section>`).

### 9.2 Prohibitions
- ❌ NO inline `style={{}}` for layout (only for dynamic values).
- ❌ NO sharp corners — everything uses rounded borders.
- ❌ NO hard shadows — use `shadow-sm` or colored shadows with opacity.
- ❌ NO `console.log` in UI code.
- ❌ NO `any` types in component props.
- ❌ NO animations that cause motion sickness (respect `prefers-reduced-motion`).

### 9.3 Naming Conventions
- **Components**: PascalCase (`Navbar`, `FeatureCard`, `AdminSidebar`).
- **Files**: PascalCase matching component name (`.tsx`).
- **Feature folders**: lowercase (`landing/`, `admin/`, `auth/`).
- **UI shared components**: `components/ui/` (shadcn/ui).

---

## 10. Responsive Considerations

### Mobile (< 768px)
- Reduce padding: `px-4` instead of `px-6`.
- Single column layouts.
- Sidebar as drawer.
- Stack sections vertically.
- Reduce font sizes: `text-3xl` instead of `text-5xl` for hero.

### Tablet (768px - 1024px)
- 2-column grids.
- Sidebar collapsible.
- Medium font sizes.

### Desktop (> 1024px)
- Multi-column grids (3-4 columns).
- Sidebar visible.
- Full font sizes.

---

**Última actualización**: 2026-05-04
