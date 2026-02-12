# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Our Family First is a non-profit organization website that offers psycho-educational workshops and couples counseling to help Israeli soldiers reintegrate into family life after experiencing the trauma of war. The site provides information about the organization's mission, articles, gallery, and event registrations.

## Tech Stack

- **Framework**: Next.js 14.2.5 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Headless UI (@headlessui/react)
- **Icons**: Heroicons, FontAwesome
- **Forms**: JotForm embeds via iframes

## Development Commands

```bash
# Start development server (runs on http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Project Structure

```
src/app/
├── layout.tsx          # Root layout with NavBar, Footer, metadata
├── page.tsx            # Homepage - composes UI components
├── globals.css         # Global styles, Tailwind directives
├── ui/                 # Reusable UI components
│   ├── nav-bar.tsx     # Navigation with dropdown, mobile menu
│   ├── footer.tsx
│   ├── main-hero.tsx
│   ├── our-mission.tsx
│   ├── articles.tsx
│   ├── testimonial.tsx
│   ├── massonry-gallery.tsx
│   ├── cta.tsx
│   ├── new-cta.tsx
│   └── donate/
│       └── donate-form.tsx  # Generic form component for JotForm iframes
├── donate/             # Donation page
│   └── page.tsx
├── event/              # Generic event registration page
│   └── page.tsx
└── [event-dates]/      # Date-specific event pages (aug8, aug10, aug11)
    └── page.tsx
```

## Architecture Patterns

### Component Organization

- **Page Components** (`page.tsx`): Composed of multiple UI components, minimal logic
- **UI Components** (`ui/`): Reusable, self-contained components
- **Client Components**: Marked with `"use client"` directive (NavBar, DonateForm)
- **Server Components**: Default for pages and static UI components

### Navigation & Routing

**Hash-based Navigation for Homepage Sections:**
- Navigation items with `#` hrefs scroll to sections on the homepage
- When on a different page, navigation redirects to `/{#hash}`
- Smooth scrolling enabled via `scroll-behavior: smooth` in globals.css
- Custom scroll handling in NavBar for both desktop and mobile menus

**Events Dropdown Pattern:**
- Events are listed in a Popover dropdown in the NavBar
- Update `navigation` and `events` arrays in `nav-bar.tsx` to modify menu items
- Current active events: August 10th

### Form Pages Pattern

Event registration and donation pages follow a consistent pattern:
1. Use the `GenericForm` component (aliased as `DonateForm`)
2. Pass `iframeSrc` prop with JotForm URL
3. Pass `bannerTitle` prop for the page header
4. Include custom metadata for SEO

**Example:**
```tsx
<GenericForm
  iframeSrc="https://form.jotform.com/[form-id]"
  bannerTitle="Event Registration"
/>
```

### Styling System

**Custom Colors (tailwind.config.ts):**
- `customBlue` (#0037B8) - Primary brand color, used for CTAs and headers
- `sectionBlue` (#E8ECF4) - Background for sections
- `customTeal` (#08A4B0) - Secondary accent color

**Path Alias:**
- `@/*` maps to `./src/*` - use for all imports from src directory

## Key Features & Implementation Details

### Scroll Indicator
The donate-form component includes an auto-hiding scroll indicator that:
- Appears for 5 seconds on page load
- Reminds users to scroll within the iframe
- Positioned at bottom center with bounce animation

### URL Redirects
Configured in `next.config.mjs`:
- `/augll` → `/aug11` (permanent redirect for typo correction)

### Image Assets
All images stored in `/public` directory:
- Logo: `our-family-first-logo.png`
- Article images: `article1.webp`, `article2.jpeg`, etc.
- Gallery photos: `img1.jpg` through `img18.jpg`
- CTA images: `cta-1.jpg`, `cta-2.jpg`, `cta3.jpg`

### Metadata & SEO
- Root layout includes comprehensive OpenGraph metadata
- Per-page metadata overrides in individual page.tsx files
- Apple touch icons and favicons configured

## Adding New Event Pages

To add a new event date page:

1. Create new directory: `src/app/[event-date]/`
2. Add `page.tsx` with GenericForm:
```tsx
import GenericForm from "@/app/ui/donate/donate-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Event Name | Our Family First",
  description: "Event description",
};

export default function EventPage() {
  return (
    <main>
      <GenericForm
        iframeSrc="https://form.jotform.com/[your-form-id]"
        bannerTitle="Your Event Title"
      />
    </main>
  );
}
```
3. Update `events` array in `nav-bar.tsx`:
```tsx
const events = [
  { name: "Your Event Date", href: "/your-event-route" },
  // ... existing events
];
```

## Mobile Responsiveness

- Mobile menu uses Headless UI Dialog component
- Hamburger menu visible on screens < 1024px (lg breakpoint)
- Desktop navigation visible on screens ≥ 1024px
- Donate button appears in both desktop nav and mobile menu header
