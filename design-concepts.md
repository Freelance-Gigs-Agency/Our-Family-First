# Our Family First - Homepage Redesign Concepts

Three bold, distinctly different homepage redesign proposals for client review. All concepts use only existing site content and images from `/public`. Each concept addresses the four primary goals: more donations, more event signups, stronger emotional impact, and a more professional/polished look.

**Target audience:** US Jewish diaspora (American Jewish donors and supporters)
**Mood:** Warm & hopeful
**Framework:** Next.js 14 + Tailwind CSS

---

## Concept A: "The Homecoming"

**Tagline:** *A single-scroll cinematic narrative that walks the visitor through the journey from battlefield to family table.*

### Design Philosophy

This concept treats the homepage as a short documentary film. Rather than discrete boxed sections, content flows through a continuous visual narrative with full-bleed photography, cinematic text reveals, and dramatic transitions. The emotional journey mirrors the soldier's journey: tension, hope, healing, reunion. For American Jewish donors, this taps into the storytelling tradition central to Jewish identity -- every gift becomes part of a living story. Inspired by award-winning documentary film websites and long-form journalism layouts.

### Color Palette

| Role | Hex | Name | Usage |
|------|-----|------|-------|
| Primary Deep | `#001D5B` | Midnight Navy | Section backgrounds, overlays |
| Primary Bright | `#0042D4` | Sapphire | Highlighted keywords in headings |
| Accent Warm | `#D4943A` | Desert Gold | ALL CTA buttons, emphasis words |
| Accent Hope | `#4FBCC7` | Hope Teal | Attribution text, secondary links |
| Background Light | `#F7F5F0` | Parchment | Mission section, light panels |
| Background Dark | `#0A1628` | Deep Night | Hero overlay, dark sections |
| Text Primary | `#1A1A2E` | Ink | Body text |
| Text Secondary | `#6B7280` | Dusk Gray | Descriptions, metadata |

The palette shifts from dark/dramatic at the top (hero) to warm/light at the bottom (CTA), mirroring the emotional arc from crisis to hope. Desert Gold provides warmth that pure blue lacks, evoking both the Israeli landscape and family warmth.

### Typography

- **Headings:** DM Serif Display (serif) -- stately, editorial authority, evokes gravitas and tradition
- **Body:** Inter (sans-serif) -- retained for familiarity, used at 18px base with generous 1.75 line-height
- **Testimonial:** DM Serif Display italic at oversized scale (3xl-5xl)
- **Scale:** Dramatic contrast. Headings at 5xl-8xl, body at lg. Creates clear visual hierarchy that commands attention.

### Section-by-Section Layout

#### 1. Navigation
- **Structure:** Fixed nav, starts transparent over the dark hero, gains white background + shadow on scroll
- **Logo:** `/OFF-New-Logo.png` on the left, white initially, transitions to color
- **Links:** Uppercase, tracked-wide, white text on transparent, transitioning to dark on white background
- **Donate button:** Desert Gold (`#D4943A`) with white text -- deliberately NOT blue, so it pops against the blue-dominant palette. Always visible.
- **Mobile:** Hamburger triggers full-screen overlay (Deep Night background) with centered large links and prominent gold donate button

#### 2. Hero -- Full Viewport Cinematic
- **Layout:** Full viewport height (`min-h-screen`). Single background image (`/hero-image.png` or `/cta-1.jpg`) full-bleed with dramatic gradient overlay from Deep Night
- **Overlay:** Gradient from 80% opacity at top, through 40% mid, to 90% bottom -- creates a vignette effect
- **Heading:** "Support our **Heroes** and their **Families**" in white, DM Serif Display at 5xl-8xl scale. "Heroes" and "Families" in Desert Gold
- **Quote:** Below heading, white text at lg-xl with 90% opacity
- **Buttons:** Two side-by-side: "Donate Now" (gold, large, rounded-full, shadow) and "Our Mission" (ghost button with white border). Ghost button scrolls down.
- **Animation:** Text fades in on load with staggered timing -- heading at 0.3s, quote at 0.6s, buttons at 0.9s. Subtle bouncing down-arrow at viewport bottom.
- **Mobile:** Text scales to 3xl, buttons stack vertically full-width
- **Images used:** `/cta-1.jpg` as background

#### 3. Mission -- Sticky Split-Screen
- **Layout:** Left half is a full-height image panel, right half is the text panel. On desktop, the left image uses `position: sticky` so it stays pinned while text scrolls past it.
- **Left panel:** `/PHOTO-2024-03-07-13-58-24.jpg` pinned in view
- **Right panel:** Parchment background (`#F7F5F0`) with generous padding
- **Heading:** "Our **Mission**" in Midnight Navy with a small Desert Gold horizontal rule below (16px wide, 4px tall)
- **Body text:** Mission text at lg size in Dusk Gray. Key phrases ("psycho-educational workshops", "couples counseling", "sense of security and stability") set in semibold Midnight Navy to break up the paragraph
- **Animation:** Text paragraphs fade in sequentially on scroll using IntersectionObserver
- **Mobile:** Image on top (4:3 aspect), text below. Sticky behavior disabled.
- **Images used:** `/PHOTO-2024-03-07-13-58-24.jpg` 

#### 4. Testimonial -- Full-Bleed Dark Section
- **Layout:** Full-bleed with emotive photo background and heavy navy overlay (85% opacity). Quote centered and oversized.
- **Background:** `/cta-2.jpg` with Deep Night overlay
- **Quote:** Large decorative quotation mark in Desert Gold (200px tall, low opacity) behind the text. Quote in DM Serif Display italic, 2xl-4xl, white, centered, max-width 4xl
- **Attribution:** "Netzach Unit, Nahal Haredi" in Hope Teal, small caps
- **Mid-page CTA:** Below the testimonial, a subtle line: *"Be part of this story."* with a Desert Gold "Donate Now" link. This capitalizes on the emotional peak.
- **Animation:** Quote text reveals line-by-line on scroll into view
- **Images used:** `/cta-2.jpg` as background

#### 5. Articles -- Editorial Feature Layout
- **Layout:** Parchment background. First article is a "featured" large card (full-width, image + text side-by-side). Remaining three articles in a row below as smaller cards.
- **Featured article:** Two-column grid with image left (rounded corners, subtle shadow) and title/description/date right
- **Smaller cards:** Vertical stack with image on top, minimal padding
- **Styling:** Dates in Hope Teal. Titles in Midnight Navy, DM Serif Display. Hover: image zooms slightly, subtle blue underline on title.
- **Mobile:** Horizontal scroll carousel with snap behavior, each card at 85vw
- **Images used:** `/OFF-article.jpeg` (featured), `/article-2-cover.webp`, `/article3.jpg`, `/article4.jpg`

#### 6. Gallery -- Film Strip Auto-Scroll
- **Layout:** Full-bleed Midnight Navy background. Two rows of images scrolling in opposite directions (CSS keyframe animation), creating a continuous film-strip effect
- **Implementation:** Wide flex container with duplicated images for seamless loop. CSS `@keyframes scroll` animation.
- **Image treatment:** Uniform 3:2 aspect ratio, rounded-lg, slight gap. On hover, image scales up and others dim.
- **Section heading:** "Our **Gallery**" in white, "Gallery" in Hope Teal, centered above the strips
- **Lightbox:** Click any image to open fullscreen modal
- **Mobile:** Single row, slower scroll speed, touch-scrollable
- **Images used:** All 22 gallery images split across two rows

#### 7. Final CTA -- Full-Screen Immersive
- **Layout:** Full viewport height. Background photo with warm gradient overlay shifting from transparent at top to Deep Night at bottom. Content centered.
- **Heading:** "Please help us support **Chayalim**, their wives, and their **families**" in white, DM Serif Display, 3xl-5xl. Keywords in Desert Gold.
- **Button:** Oversized gold donate button with shadow-2xl
- **Reassurance line:** "Every donation helps reunite a family." in white, small, 75% opacity
- **Images used:** `/cta-1.jpg` as background

#### 8. Footer
- **Layout:** Deep Night background. Three-column: logo + mission blurb (left), navigation links (center), social icons + contact (right). Copyright at bottom.
- **Colors:** Links in gray-400 with Hope Teal hover. Thin horizontal rule separating content from copyright.

### Key Design Elements
1. **Cinematic gradient overlays** on full-bleed photos -- the signature visual motif
2. **Desert Gold accent** used exclusively for CTAs -- trains the eye that gold = action
3. **Sticky split-screen** mission section creates depth and engagement
4. **Film-strip auto-scrolling gallery** creates ambient motion
5. **Staggered fade-in animations** on text triggered by scroll

### CTA Strategy
| Location | Type | Purpose |
|----------|------|---------|
| Nav | Persistent gold "Donate" button | Always accessible |
| Hero | Primary "Donate Now" + secondary scroll button | First impression conversion |
| Post-Testimonial | "Be part of this story" inline link | Mid-page emotional conversion |
| Final CTA | Full-screen immersive with oversized button | Emotional climax conversion |

**Total: 4 CTA touchpoints**, escalating in emotional intensity throughout the scroll.

### Why This Concept Works
- **Donations:** Four CTA touchpoints with gold accent creating visual urgency. Emotional narrative builds toward giving.
- **Event signups:** Events dropdown in nav; emotional arc primes visitors for action.
- **Emotional impact:** Cinematic full-bleed photography, dark overlays, and the narrative arc from crisis to hope mirrors documentary filmmaking.
- **Professionalism:** Editorial typography, generous whitespace, film-strip gallery, and sticky split-screen signal a serious, well-run organization.

---

## Concept B: "The Living Mosaic"

**Tagline:** *A vibrant grid of interlocking stories, photos, and actions that invites visitors to explore and engage at every touchpoint.*

### Design Philosophy

This concept abandons the traditional linear scroll. The homepage is a dynamic grid of cards -- photos, text blocks, testimonials, article previews, donation prompts, and event invitations -- arranged in an asymmetric bento-box layout. Every card is an entry point. The mosaic metaphor: individual tiles form a bigger picture, much like individual donations form a bigger impact. For American Jewish donors who are busy professionals scanning quickly, every viewport contains something actionable. Inspired by Apple's product pages, Notion's marketing site, and modern dashboard UIs.

### Color Palette

| Role | Hex | Name | Usage |
|------|-----|------|-------|
| Primary | `#1A56DB` | Horizon Blue | Headings, link hover, featured cards |
| Primary Dark | `#1E3A5F` | Atlantic | Footer, dark card backgrounds |
| Accent | `#E86B5A` | Coral Heart | ALL primary CTA buttons |
| Accent Secondary | `#B8C4E8` | Lavender Mist | Testimonial card background |
| Background | `#FFFFFF` | White | Main background |
| Surface | `#F3F4F6` | Cloud | Alternating section background |
| Text Primary | `#111827` | Charcoal | Headings, body text |
| Text Muted | `#6B7280` | Stone | Descriptions, metadata |

Coral Heart is the critical addition -- a warm, human accent that says "family" and "heart." Used exclusively for primary CTAs, creating a clear visual language: **coral means "take action."**

### Typography

- **Headings:** Plus Jakarta Sans (geometric sans-serif) -- modern, clean, friendly, excellent weight range. Bold 700-800 for headings.
- **Body:** Plus Jakarta Sans at regular weight 400-500 -- single typeface family for cohesion across the modular grid.
- **Labels:** Uppercase Plus Jakarta Sans at xs tracking-[0.2em] for category tags and section labels.
- **Scale:** Moderate contrast. Headings at 3xl-5xl, body at base, labels at xs. The cards themselves create hierarchy rather than extreme size differences.

### Section-by-Section Layout

#### 1. Navigation
- **Structure:** Slim, clean, white. Logo CENTERED (departure from current left-aligned). Navigation links split evenly on either side of the logo.
- **Logo:** `/OFF-New-Logo.png` centered
- **Donate button:** Coral Heart with white text, rounded-full pill shape. Far right.
- **Sticky behavior:** Becomes sticky after scrolling past hero with `backdrop-blur-md`
- **Mobile:** Hamburger left, centered logo, donate button right. Drawer slides from left.

#### 2. Hero -- Contained Bento Grid
- **Layout:** NOT full-screen. Contained section with py-20 to py-32. Bento grid: heading occupies the left 60%, two stacked photo cards on the right 40%.
- **Grid:** 5-column grid. Text spans 3 columns, images span 2.
- **Heading:** "Support our **Heroes** and their **Families**" in Charcoal. "Heroes" in Horizon Blue, "Families" in Coral Heart.
- **Quote:** In a card-like element with a left Coral border (4px).
- **Right side:** `/cta-1.jpg` (top, larger, rounded-2xl) and `/cta3.jpg` (bottom, smaller, rounded-2xl) in asymmetric stack
- **Buttons:** "Donate Now" in Coral Heart (large, rounded-full, hover scale-105). "Learn Our Story" as text link with arrow.
- **Animation:** Cards slide in from right, text fades in from left
- **Mobile:** Stacks vertically. Heading, then photos (horizontal scroll), then buttons.
- **Images used:** `/cta-1.jpg`, `/cta3.jpg`

#### 3. Mission -- Three-Card Bento Grid
- **Layout:** Cloud background. Three cards in an asymmetric grid:
  - **Card 1 (large, spans 2 columns):** Mission text + heading. White card, rounded-3xl, generous padding. Mission image (`/img5`) floats to the right within this card, with text wrapping around it.
  - **Card 2 (small, top-right):** Impact stat card -- "500+ Families Supported" (or similar metric). Horizon Blue background, white text.
  - **Card 3 (small, bottom-right):** Action card -- "Join Our Next Retreat" with arrow, linking to events. Atlantic background, white text, Coral accent arrow.
- **Interaction:** Cards lift subtly on hover (-translate-y-1)
- **Mobile:** Cards stack vertically, full-width
- **Images used:** `/img5.jpg`

#### 4. Testimonial -- Centered Quote Card
- **Layout:** White background. Single wide card centered at max-width 4xl. Card has Lavender Mist background with rounded-3xl and generous padding.
- **Quote:** Large decorative open-quote mark in Horizon Blue (8xl, 30% opacity) positioned top-left of card. Quote text in xl-2xl, medium weight, Atlantic color. Attribution in Stone, uppercase tracking-wide.
- **CTA bridge:** Below the quote card: *"Their story can continue -- with your help."* with a secondary Coral donate button. Creates a testimonial-to-action pipeline.
- **Animation:** Card scales from 95% to 100% and fades in on scroll

#### 5. Articles -- Featured + Grid Layout
- **Layout:** White background. Articles in a 2x2 bento grid where the first article is large (spans full width or 2 rows on desktop) and the remaining three are smaller.
- **Featured article:** Two-column with image left, text right. Taller image (4:3 aspect).
- **Smaller cards:** Vertical stack, image on top. Date overlaid on image as a small white pill with Horizon Blue text.
- **Hover:** Image zooms, card gains shadow-lg
- **Mobile:** Single column stack, full-width cards
- **Images used:** `/OFF-article.jpeg` (featured), `/article-2-cover.webp`, `/article3.jpg`, `/article4.jpg`

#### 6. Gallery -- Curated Bento Image Grid
- **Layout:** Cloud background. Images at varying sizes -- some 2x2, some 1x2, some 1x1 -- creating visual variety. Show 8-10 images initially.
- **Grid:** 3 columns mobile, 4 columns desktop with `auto-rows-[200px]`. Individual images span different column/row combinations.
- **Hover:** Image gains Horizon Blue overlay with expand icon
- **Button:** "View All Photos" in outlined Horizon Blue style, fills on hover
- **Lightbox:** Clean modal with white background, centered image, prev/next arrows
- **Mobile:** 2-column grid, uniform sizes, 6 images shown
- **Images used:** Select 10 strongest from all 22 gallery images, feature best at larger sizes

#### 7. Final CTA -- Blue with Photo Collage
- **Layout:** Full-width Horizon Blue background. Two-column: heading + button on left, collage of 3 overlapping photos on right.
- **Photo collage:** `/cta-1.jpg`, `/img5.jpg`, `/img14.jpg` -- each rounded-2xl with shadow-2xl, positioned with slight CSS rotations (-3deg, 2deg, -1deg) and overlapping via negative margins
- **Heading:** White, "Chayalim" and "families" in Coral Heart
- **Button:** White with Coral text, rounded-full, oversized, shadow-xl
- **Mobile:** Photos above (horizontal overlap), text and button below centered
- **Images used:** `/cta-1.jpg`, `/img5.jpg`, `/img14.jpg`

#### 8. Footer
- **Layout:** Atlantic background. Four-column: About blurb, Quick Links, Events, Social. Copyright row below with thin top border.
- **Colors:** Text in gray-300, links hover to white, social icons hover to Coral Heart
- **Mobile:** 2-column grid collapsing to stacked

### Key Design Elements
1. **Bento grid layouts** -- asymmetric card grids define every section
2. **Rounded-3xl cards** with subtle shadows -- consistent visual container throughout
3. **Coral Heart accent** reserved exclusively for CTAs -- trains the eye to associate coral with action
4. **Overlapping photo collages** -- images layered with slight rotations for warmth
5. **Cloud/White alternating backgrounds** -- creates rhythm without harsh transitions

### CTA Strategy
| Location | Type | Purpose |
|----------|------|---------|
| Nav | Persistent Coral "Donate" pill | Always accessible |
| Hero | Primary Coral "Donate Now" button | First impression conversion |
| Mission card grid | "Join Our Next Retreat" action card | Event signup (embedded naturally) |
| Post-Testimonial | Bridge sentence + secondary donate button | Emotional conversion |
| Final CTA | Full-width blue section with white button | Closing conversion |

**Total: 5 CTA touchpoints** woven naturally into the card grid.

### Why This Concept Works
- **Donations:** Coral accent creates a visual "action language." Five CTA points ensure no visitor leaves without multiple opportunities.
- **Event signups:** Event card embedded directly in the mission grid -- feels like a natural part of the story rather than a separate navigation task.
- **Emotional impact:** Bento layout keeps photos, quotes, and text always adjacent. Density of content creates a sense of activity, urgency, and scale.
- **Professionalism:** Card-based modular design is a premium web pattern (Apple, Stripe, Linear). Plus Jakarta Sans is modern and authoritative. Clean palette signals competence to donors.

---

## Concept C: "The Bridge"

**Tagline:** *A vertically unfolding journey that reveals content through dramatic scroll-triggered transitions, building an emotional bridge between the donor and the soldier's family.*

### Design Philosophy

This concept uses dramatic section transitions, scroll-linked animations, and alternating full-bleed/contained layouts. Each section has a distinct visual personality while sharing a unified design system. The "bridge" metaphor manifests literally: a visual motif of connecting lines, arcs, and pathways threads through the page, symbolizing the connection between American supporters and Israeli families. Targets donors who are moved by feeling personally connected. Inspired by charity: water's donation pages and Patagonia's activism-oriented storytelling.

### Color Palette

| Role | Hex | Name | Usage |
|------|-----|------|-------|
| Primary | `#0047CC` | Zion Blue | Headings, hero panel, featured elements |
| Primary Light | `#E0ECFF` | Morning Sky | Testimonial background |
| Accent | `#C45D3E` | Terracotta | ALL CTA buttons, emphasis, progress bar |
| Accent Soft | `#F5D5C8` | Dawn Blush | Gallery hover overlay, soft accents |
| Neutral Warm | `#F9F6F1` | Sand | Section backgrounds |
| Neutral Dark | `#1C2B3A` | Deep Slate | Footer, dark text areas |
| Text | `#0F172A` | Ink | Body text |
| Motif Line | `#94B8F0` | Thread Blue | The "bridge line" SVG, timeline |

Warmth comes from Terracotta and Dawn Blush, grounding the blue in an earthy, human palette. Thread Blue is used for the connecting-line visual motif throughout.

### Typography

- **Headings:** Playfair Display (classic serif) -- elegance, tradition, emotional gravitas. Bold weight.
- **Body:** Source Sans 3 (humanist sans-serif) -- highly readable, warm character, excellent for long text
- **Pull quotes:** Playfair Display italic at display sizes
- **Scale:** Extreme contrast for drama. Section headings at 6xl up to 80px with tight leading (0.9). Body at lg with relaxed leading. Magazine editorial feel.

### Section-by-Section Layout

#### 1. Navigation
- **Structure:** Transparent, floating over the hero. Logo left, minimal curated links right ("Mission", "Stories", "Gallery", "Events"). Donate button as outlined pill.
- **Scroll behavior:** Transitions from transparent (white text) to compact white bar with shadow. Smooth 500ms transition.
- **Donate button:** Outlined white initially, fills with Terracotta on hover. After scroll: outlined Zion Blue, fills with Terracotta on hover.
- **Progress bar:** A 1px-height Terracotta line at the very top of the viewport that fills left-to-right as the user scrolls. Gives a sense of journey progress.
- **Mobile:** Transparent overlay. Full-screen slide-over on Zion Blue background.

#### 2. Hero -- Diagonal Split
- **Layout:** Full viewport height, split diagonally. Left ~60% is a full-height photo, right ~40% is a solid Zion Blue panel with text. Diagonal achieved with CSS `clip-path: polygon(15% 0, 100% 0, 100% 100%, 0% 100%)` on the blue panel.
- **Photo side:** `/img14.jpg` with subtle blue-to-transparent gradient on right edge to blend into the diagonal
- **Blue panel content:**
  - "Support our **Heroes** and their **Families**" in white, Playfair Display, 4xl-7xl. "Heroes" and "Families" underlined with Terracotta (4px bottom border)
  - Quote in lg white at 80% opacity
  - "Donate Now" button in Terracotta (rounded-full, large, shadow-lg)
  - Event signup text link: "Register for our next retreat ->" in white at 70% opacity
- **Animation:** Diagonal clip-path animates on load -- starts as full blue screen, reveals photo as polygon shifts left over 1.2 seconds
- **Mobile:** No diagonal split. Full-bleed photo with blue gradient overlay, text centered. Soft rounded bottom edge on blue.
- **Images used:** `/img14.jpg`

#### 3. The Bridge Line (Transition Element)
- **Between hero and mission:** A curved SVG line in Thread Blue (`#94B8F0`) starts at the bottom center of the hero and curves down into the mission section
- **Along the line:** Small circular nodes containing icons (heart, house, handshake) in Terracotta
- **Animation:** Line draws itself on scroll using `stroke-dasharray` / `stroke-dashoffset` CSS animation triggered by IntersectionObserver
- **Purpose:** Represents the "bridge" between donor and family. Appears again between testimonial/articles and between gallery/final CTA -- a continuous thread through the page
- **Mobile:** Simplified to a vertical dashed line with nodes

#### 4. Mission -- Flowing Text with Wrapped Image
- **Layout:** Sand background. Centered, max-width 4xl. Mission image and text interwoven: heading and first paragraph appear, then `/img7.jpg` placed inline with text wrapping around it (CSS float-left, 45% width, rounded-2xl on desktop).
- **Heading:** "Our **Mission**" in Playfair Display at massive scale (6xl-80px), Ink color. "Mission" in Zion Blue. Thin Terracotta underline below (80px wide, 2px tall).
- **Animation:** Image slides in from the left, text fades from the right -- two sides coming together embodying the "bridge" theme
- **Mobile:** Image full-width above text, standard stack
- **Images used:** `/img7.jpg`

#### 5. Testimonial -- Full-Bleed Reveal
- **Layout:** Full-bleed Morning Sky background. Testimonial takes up nearly full viewport height. Centered horizontally and vertically. Minimal -- just the quote, nothing competing.
- **Quote:** Playfair Display italic, 3xl-5xl, Deep Slate, centered, max-width 3xl. Oversized open-quotation mark in Thread Blue (200px, 50% opacity) floats behind.
- **Attribution:** Source Sans 3, base, semibold, Terracotta, uppercase tracking-widest
- **Animation:** Quote "types itself" as user scrolls -- each line reveals via clip-path inset animation synced with scroll position. Forces slow, deliberate reading.
- **CTA:** None here. Emotional weight is left to sit. The Bridge Line below carries visitors to articles with intent building.

#### 6. Articles -- Timeline Layout
- **Layout:** White background. Articles displayed as a timeline on desktop: each article alternates left and right of a central vertical line in Thread Blue. Left articles have image left/text right; right articles flip. Central line has date-circle nodes.
- **Timeline line:** 2px border in Thread Blue, centered
- **Date circles:** 48px rounded, Zion Blue background, white text (month/year)
- **Article cards:** White, rounded-2xl, shadow-md, with image at 16:9 and rounded-xl
- **Grid:** 3 columns per article -- content / timeline / content -- alternating which side gets the card
- **Animation:** Each card slides in from its respective side on scroll
- **Mobile:** Standard vertical stack, no timeline. Cards full-width with image on top.
- **Images used:** `/OFF-article.jpeg`, `/article-2-cover.webp`, `/article3.jpg`, `/article4.jpg`

#### 7. Gallery -- Scroll-Bloom Masonry
- **Layout:** Sand background. CSS columns-3 masonry-like layout with generous spacing. 4 images shown initially, more "bloom" into view one by one as user scrolls through the section.
- **Hover:** Dawn Blush overlay with "View" text in Terracotta
- **Heading:** "Our **Gallery**" in Playfair Display with subtitle: *"Moments of healing, connection, and hope."*
- **Bloom animation:** IntersectionObserver triggers scale-up + fade-in (scale-90/opacity-0 to scale-100/opacity-100) with staggered delays based on image index (each delayed 100ms more)
- **Lightbox:** Clean modal with prev/next navigation, image counter ("3 of 22"), close button
- **Mobile:** 2 columns, 6 images initially, "Load More" button
- **Images used:** All 22 gallery images

#### 8. Final CTA -- Overlapping Card
- **Layout:** Top half is a wide photo panel (`/cta-1.jpg`) at ultra-wide aspect ratio with gradient fading to white at bottom. Bottom half: a clean white card centered on the page, overlapping the photo by ~100px using negative margin. `rounded-3xl shadow-2xl`
- **Card content:** Heading in Playfair Display centered, 2xl-3xl. "Chayalim" and "families" in Zion Blue. Large Terracotta donate button. Reassurance text: "100% of your donation goes to program delivery."
- **Bridge Line finale:** Thread Blue line enters from top, curves to center, terminates at the donate button with a heart node -- symbolizing the completed bridge from story to action
- **Mobile:** Photo full-width, card below with standard padding
- **Images used:** `/cta-1.jpg`

#### 9. Footer
- **Layout:** Deep Slate background. Compact and elegant. Logo centered at top. Single row of nav links centered below. Social icons centered below that. Copyright at bottom. All stacked and centered.
- **Colors:** Text in gray-400, links hover to Thread Blue, social icons hover to Terracotta
- **Bridge Line:** The Thread Blue line continues from the CTA into the footer, terminating at the logo -- the bridge completes its full circle

### Key Design Elements
1. **The Bridge Line** -- continuous SVG thread weaving through the entire page with draw-on-scroll animation
2. **Diagonal clip-path hero** -- angled split between photo and blue panel creates instant dynamism
3. **Scroll-triggered content reveals** -- every section has scroll-activated animations (typing text, sliding cards, blooming images)
4. **Timeline articles** -- alternating left-right layout with central Thread Blue line transforms articles into a story of impact over time
5. **Overlapping CTA card** -- bridges between photo and footer, physically overlapping both

### CTA Strategy
| Location | Type | Purpose |
|----------|------|---------|
| Nav | Outlined donate pill (transitions to Terracotta on hover) | Always accessible |
| Hero | Large Terracotta "Donate Now" + event signup text link | First impression + event signup |
| Final CTA | Overlapping card with largest button on page | Emotional payoff of entire journey |

**Total: 3 explicit CTA touchpoints** (quality over quantity). The scroll progress bar and bridge line create continuous subconscious momentum toward the final CTA. Visitors who scroll 80% are psychologically primed by commitment bias to complete the journey.

### Why This Concept Works
- **Donations:** Entire page is an emotional funnel. Progress bar creates commitment bias. Overlapping card CTA commands attention as the culmination of the journey.
- **Event signups:** Event link in hero (high visibility) + events in nav. Timeline articles implicitly communicate "we hold events regularly."
- **Emotional impact:** Scroll-triggered animations mean content is *discovered*, not just seen. Typing-reveal testimonial forces slow reading. Bridge Line creates tangible sense of connection.
- **Professionalism:** Playfair Display + Source Sans 3 is an editorial-quality pairing. Scroll animations demonstrate technical sophistication. Terracotta/Sand palette is modern and timeless, avoiding "startup blue" cliche. Bridge Line is a unique brand element.

---

## Comparison Matrix

| Dimension | A: The Homecoming | B: The Living Mosaic | C: The Bridge |
|-----------|-------------------|---------------------|---------------|
| **Layout** | Full-bleed cinematic scroll | Bento card grid | Scroll-triggered storytelling |
| **Visual Hierarchy** | Image-dominant, text overlaid | Cards as containers, equal weight | Dramatic typography, earned reveals |
| **Image Approach** | Full-bleed backgrounds, film strip | Card thumbnails, collages | Floating/wrapped, timeline markers |
| **Emotional Trigger** | Immersion (documentary) | Scope/Activity (mosaic of impact) | Journey/Connection (personal bridge) |
| **Interactions** | Parallax, sticky split, auto-scroll | Hover lifts, bento exploration | Scroll-linked animation, typing reveals |
| **CTA Count** | 4 | 5 | 3 |
| **Technical Complexity** | Medium | Low-Medium | High |
| **Mobile Adaptation** | Stacks well, loses parallax | Cards stack naturally (best mobile) | Simplifies to standard scroll |
| **Typography** | DM Serif Display + Inter | Plus Jakarta Sans | Playfair Display + Source Sans 3 |
| **Color Warmth** | Navy + Desert Gold | Blue + Coral Heart | Blue + Terracotta |
| **Best Strength** | Emotional impact + donations | Event signups + professionalism | Uniqueness + emotional connection |

---

## Shared Across All Concepts

These elements apply to whichever concept is chosen:

- **All existing text content preserved exactly** (hero, mission, testimonial, articles, CTA)
- **All images from `/public` only** -- no new assets needed
- **Next.js 14 App Router + Tailwind CSS** framework
- **Responsive design** -- all concepts specify mobile, tablet, and desktop layouts
- **Accessibility** -- semantic HTML, proper contrast ratios, keyboard navigation, aria labels
- **Performance** -- Next.js Image optimization, lazy loading, CSS animations (no heavy JS libraries)
- **Smooth scrolling** and hash-based navigation retained for internal links
