# BugProctect Pro Design System

## 1. Atmosphere & Identity

BugProctect Pro feels like a professional field-service command desk: dark, controlled, safety-first, and quietly premium. The signature is a deep charcoal and emerald foundation with measured gold accents, giving pest control content a sense of technical trust rather than alarm.

## 2. Color

### Palette

| Role | Token | Light | Dark | Usage |
|------|-------|-------|------|-------|
| Surface/primary | --surface-primary | #FFFFFF | #101312 | Main page and dark bands |
| Surface/warm | --surface-warm | #F8F5EF | #17211C | Warm page backgrounds and soft panels |
| Surface/brand | --surface-brand | #0B3D2E | #082E22 | CTAs, selected states, dark green panels |
| Text/primary | --text-primary | #17211C | #FFFFFF | Headlines and primary copy |
| Text/secondary | --text-secondary | #4B5563 | #D1D5DB | Body and supporting copy |
| Text/muted | --text-muted | #6B7280 | #9CA3AF | Captions, metadata, inactive nav |
| Border/default | --border-default | #E5E7EB | #1F2937 | Cards, dividers, form controls |
| Accent/gold | --accent-gold | #C9A646 | #C9A646 | Premium accent, icons, focus details |
| Accent/orange | --accent-orange | #F28C28 | #F28C28 | Urgency marker and small alerts |
| Status/success | --status-success | #059669 | #10B981 | WhatsApp, success, active service cues |
| Status/error | --status-error | #EF4444 | #F87171 | Form errors |

### Rules

- Dark green is reserved for primary actions, selected states, and brand-heavy sections.
- Gold is an accent, not a background system.
- Warm off-white backgrounds distinguish content sections from pure white cards.

## 3. Typography

### Scale

| Level | Size | Weight | Line Height | Tracking | Usage |
|-------|------|--------|-------------|----------|-------|
| Display | 48px | 800 | 1.1 | 0 | Hero titles |
| H1 | 36px | 800 | 1.15 | 0 | Page titles |
| H2 | 28px | 800 | 1.2 | 0 | Section headers |
| H3 | 20px | 800 | 1.3 | 0 | Card and form titles |
| Body | 16px | 400 | 1.6 | 0 | Body copy |
| Body/sm | 14px | 400 | 1.5 | 0 | Secondary copy |
| Caption | 12px | 600 | 1.4 | 0.02em | Labels, nav, metadata |
| Overline | 11px | 700 | 1.3 | 0.12em | Uppercase section labels |

### Font Stack

- Primary: Inter, ui-sans-serif, system-ui, sans-serif.
- Display: Plus Jakarta Sans, Inter, sans-serif.
- Mono: JetBrains Mono, ui-monospace, SFMono-Regular, monospace.

### Rules

- Display typography is used only for hero and major section heads.
- Form labels use compact uppercase captions.

## 4. Spacing & Layout

### Base Unit

All spacing derives from a base of 4px.

| Token | Value | Usage |
|-------|-------|-------|
| --space-1 | 4px | Icon-to-label spacing |
| --space-2 | 8px | Tight inline groups |
| --space-3 | 12px | Input padding |
| --space-4 | 16px | Mobile section padding |
| --space-6 | 24px | Card padding |
| --space-8 | 32px | Content group separation |
| --space-12 | 48px | Major grid gaps |
| --space-16 | 64px | Compact page sections |
| --space-20 | 80px | Large page sections |

### Grid

- Max content width: none. Full-width page sections use responsive horizontal padding only.
- Column system: CSS grid with 1-column mobile and 12-column desktop compositions.
- Breakpoints: sm 640px, md 768px, lg 1024px, xl 1280px, 2xl 1536px.

### Rules

- Site-level wrappers should not use `max-w-*`.
- Use padding and grid columns to manage rhythm instead of fixed-width containers.
- Full-width card grids use stable min-heights and taller media panels so sections keep natural proportions on wide screens.

## 5. Components

### Header

- **Structure**: top service banner, shield pest logo mark, BugProctect Pro wordmark, compact primary nav, service dropdown, more dropdown, CTA actions.
- **Variants**: desktop nav, mobile drawer.
- **Spacing**: 16px mobile padding, 24-32px desktop padding.
- **States**: hover, active page underline, dropdown hover, focus-visible.
- **Accessibility**: buttons include labels and dropdown state.
- **Motion**: dropdowns fade and slide over 200ms.

### Logo

- **Structure**: local shield pest SVG mark inside a rounded green or warm-white brand badge. The logo mark is icon-only, with the wordmark supplied by the header and footer.
- **Variants**: dark badge for light surfaces, warm badge for dark footer surfaces, icon-only for favicon-style use.
- **States**: static in headers and footers; parent link/button owns hover and focus state.
- **Accessibility**: icon image includes descriptive alt text.

### Footer

- **Structure**: brand column, treatment links, region links, contact details, legal row.
- **Variants**: desktop 4-column, mobile stacked.
- **States**: hover underline for text links.
- **Accessibility**: external credit link opens in a new tab with `rel="noreferrer"`.

### Forms

- **Structure**: labeled inputs, select menus, validation errors, consent checks, submit CTA.
- **Variants**: dark onboarding wizard, light quote and booking forms.
- **States**: default, hover, focus, error, success/redirect.
- **Accessibility**: every input has visible label text and error copy.

### Pest Selector

- **Structure**: selectable pest photo cards paired with a larger active pest detail panel.
- **Media**: pest issue imagery is bundled from `assets/imgs/` through the shared `PEST_IMAGES` map.
- **Variants**: selected dark green card, unselected white photo card, responsive two-column mobile grid and 12-column desktop layout.
- **States**: hover lift, image zoom, selected card shadow, focus ring.
- **Accessibility**: every pest image has specific alt text; button text carries the pest name and risk.
- **Motion**: transform-based hover lift and image scale over 200-300ms.

## 6. Motion & Interaction

### Timing

| Type | Duration | Easing | Usage |
|------|----------|--------|-------|
| Micro | 150ms | ease-out | Button hover and active feedback |
| Standard | 200-300ms | ease-in-out | Dropdown and drawer transitions |
| Emphasis | 350ms | ease-out | Wizard progress and page feedback |

### Rules

- Animate transform and opacity for interaction feedback.
- Preserve smooth scroll for internal navigation.

## 7. Depth & Surface

### Strategy

Mixed. The site combines subtle borders, warm tonal shifts, and occasional shadows for elevated cards and dropdowns.

| Level | Value | Usage |
|-------|-------|-------|
| Subtle | 0 1px 2px rgba(0,0,0,0.04) | Cards at rest |
| Default | 0 2px 8px rgba(0,0,0,0.08) | Forms and elevated cards |
| Prominent | 0 8px 24px rgba(0,0,0,0.12) | Dropdowns and floating assistant |
