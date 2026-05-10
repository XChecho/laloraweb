---
name: Vibrant SaaS-Gastronomy
colors:
  surface: '#f5fbf1'
  surface-dim: '#d6dcd2'
  surface-bright: '#f5fbf1'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff5eb'
  surface-container: '#eaf0e5'
  surface-container-high: '#e4eae0'
  surface-container-highest: '#dee4da'
  on-surface: '#171d17'
  on-surface-variant: '#3e4a3e'
  inverse-surface: '#2c322b'
  inverse-on-surface: '#edf3e8'
  outline: '#6e7a6d'
  outline-variant: '#becaba'
  surface-tint: '#006e2d'
  primary: '#006b2b'
  on-primary: '#ffffff'
  primary-container: '#0a873a'
  on-primary-container: '#f9fff4'
  inverse-primary: '#71dd84'
  secondary: '#855300'
  on-secondary: '#ffffff'
  secondary-container: '#fea619'
  on-secondary-container: '#684000'
  tertiary: '#a23452'
  on-tertiary: '#ffffff'
  tertiary-container: '#c24c6a'
  on-tertiary-container: '#fffcff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#8dfa9e'
  primary-fixed-dim: '#71dd84'
  on-primary-fixed: '#002108'
  on-primary-fixed-variant: '#005320'
  secondary-fixed: '#ffddb8'
  secondary-fixed-dim: '#ffb95f'
  on-secondary-fixed: '#2a1700'
  on-secondary-fixed-variant: '#653e00'
  tertiary-fixed: '#ffd9de'
  tertiary-fixed-dim: '#ffb2bf'
  on-tertiary-fixed: '#3f0016'
  on-tertiary-fixed-variant: '#861d3d'
  background: '#f5fbf1'
  on-background: '#171d17'
  surface-variant: '#dee4da'
typography:
  h1:
    fontFamily: Bricolage Grotesque
    fontSize: 64px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  h2:
    fontFamily: Bricolage Grotesque
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
  h3:
    fontFamily: Bricolage Grotesque
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  section-gap: 120px
  card-padding: 32px
  container-max: 1280px
  gutter: 24px
---

## Brand & Style
The visual identity of the design system bridges the gap between the structured efficiency of modern SaaS and the sensory, appetizing world of food delivery. It evokes a feeling of freshness, speed, and premium reliability.

The design style is **High-Fidelity Modern**, characterized by:
- **Circular Motifs:** Utilizing broken circles and orbital paths to frame product photography, creating a sense of movement and "spinning up" a meal.
- **Dynamic Overlaps:** Elements like floating ingredients, "out-of-the-box" product shots, and overlapping cards create depth and a playful, tactile energy.
- **SaaS Precision:** While the aesthetic is vibrant, the underlying structure uses rigorous alignment, clear data visualization, and high-performance interface patterns common in enterprise software.

## Colors
The palette is rooted in organic, earthy tones accelerated by high-chroma accents.
- **Emerald Primary:** Represents freshness, sustainability, and the "go" signal of a successful order.
- **Amber Accent:** Used for highlights, call-to-actions, and "hot" deals. It provides a warm contrast to the deep greens.
- **Deep Forest:** Replaces standard neutrals for text and dark-mode surfaces, providing a more premium, branded feel than pure black or gray.
- **Warm Paper Background:** A subtle, off-white base that softens the UI and prevents the clinical feel of pure white (#FFFFFF), making the photography pop.

## Typography
The system employs a dual-font strategy to balance personality with readability.
- **Bricolage Grotesque:** Used for all expressive headings. Its unique, slightly quirky character widths give the brand a distinct "voice" that feels modern yet approachable.
- **Inter:** Used for all functional text, UI labels, and long-form body copy. It ensures high legibility on small screens and within dense data grids.
- **Stylistic Note:** Headings should frequently use "Split Coloring," where a key action word is highlighted in the Amber accent color to guide the eye.

## Layout & Spacing
The layout follows a **Hybrid Fluid Grid** inspired by the "Meal Monkey" structure, emphasizing large vertical sections with generous whitespace.
- **Sectioning:** Use large gaps between major content blocks to allow "floating" elements (like falling fries or leaves) to occupy the negative space.
- **Asymmetry:** Group content on one side while using the opposite side for large-scale, high-fidelity imagery wrapped in circular motifs.
- **Safe Zones:** Maintain a 12-column grid for dashboard views, but break the grid for marketing sections to create a more editorial, energetic flow.

## Elevation & Depth
Depth is created through "Colored Ambient Shadows" rather than standard gray blurs.
- **Shadow Tints:** Elevation shadows should use a semi-transparent version of the Deep Forest or Emerald colors (e.g., `rgba(23, 62, 53, 0.15)`).
- **Layering:** Use dynamic overlapping. For example, a food item should appear to sit "on top" of its card, with its own specific shadow to create a 3D effect.
- **Gradients:** Use soft radial gradients on the background to draw focus toward the center of the screen or specific CTA areas.

## Shapes
The shape language is extremely soft and organic, moving away from "tech-sharp" corners.
- **Main Containers:** Large sections (like the footer or hero image containers) use an aggressive `rounded-4xl` (48px) to feel friendly and safe.
- **Cards:** Standard UI cards use `rounded-2xl` (24px).
- **Interaction Elements:** Buttons and tags use pill-shapes (fully rounded) to contrast against the larger container radii.
- **Masking:** Circular masks are a core brand element, often used as background "halos" behind product photography.

## Components
- **Buttons:** Primary buttons are pill-shaped with a subtle Emerald-to-Dark-Emerald gradient. Use Amber for high-priority "Order Now" actions.
- **Featured Cards:** Use the `rounded-2xl` radius with a `shadow-lg` that has a subtle Emerald spread. Imagery should "pop" out of the top edge.
- **Food Category Chips:** Horizontal scrolling pill-shaped buttons. Active state uses the Emerald background with white text; inactive state uses a thin Deep Forest border.
- **Circular Progress/Status:** Use the broken-circle motif for loading states or delivery progress indicators to maintain visual consistency with the hero illustrations.
- **Input Fields:** Large, 16px-padding fields with a Warm Paper background slightly darker than the page, using a 1px Emerald border only on focus.
