## Project Overview

Our Family First is a non-profit organization website that offers psycho-educational workshops and couples counseling to help Israeli soldiers reintegrate into family life after experiencing the trauma of war. The site provides information about the organization's mission, articles, gallery, and event registrations.

This main goal of this website is to show off what our family first has accomplished so a lot of pictures to be displayed, they had a profesional video made so they want that shown off, articles, testimonial videos. people also can register for events on this website and they also want to display past events that I have either the flyers or schedules for.

## Simplicity First
Prefer simple, straightforward solutions. Any added complexity must be justified—don't over-engineer or add abstractions "just in case." If a simple function solves the problem, don't wrap it in a class.

## React & Next.js Best Practices

**Before doing any React or Next.js frontend work**, always load the following skills first:
- `vercel-react-best-practices` - React and Next.js performance optimization guidelines from Vercel Engineering
- `next-best-practices` - Next.js file conventions, RSC boundaries, data patterns, async APIs, metadata, error handling, route handlers, image/font optimization, and bundling

These skills ensure optimal performance patterns and prevent common anti-patterns in React components and Next.js applications.

**External Libraries & Documentation:**
- When working with external libraries like **shadcn** or **Tailwind CSS**, always use **Context7** to retrieve the most up-to-date documentation and code examples
- This project uses **Tailwind CSS v3** - always specify version 3 when querying documentation
- Use Context7's `resolve-library-id` and `query-docs` tools for accurate, current library information

## Tech Stack

- **Framework**: Next.js 14.2.5 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**:
  - **shadcn/ui** - Primary component library for all new UI development
  - Headless UI (@headlessui/react) - Legacy components (existing code only)
- **Icons**: Heroicons, FontAwesome
- **Forms**: JotForm embeds via iframes

**Important**: All new UI components must use shadcn/ui. Do not use Headless UI for new development.

## Architecture Patterns

### Component Organization

- **Page Components** (`page.tsx`): Composed of multiple UI components, minimal logic
- **UI Components** (`ui/`): Reusable, self-contained components
- **Client Components**: Marked with `"use client"` directive (NavBar, DonateForm)
- **Server Components**: Default for pages and static UI components

## Key Features & Implementation Details

### Image Assets
All images stored in `/public` directory:
- Logo: `our-family-first-logo.png`
- Article images: `article1.webp`, `article2.jpeg`, etc.
- Gallery photos: `img1.jpg` through `img18.jpg`
- CTA images: `cta-1.jpg`, `cta-2.jpg`, `cta3.jpg`
