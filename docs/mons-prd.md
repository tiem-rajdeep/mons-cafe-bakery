# Product Requirements Document (PRD)
## Mon's Café & Bakery — Responsive Website

**Version:** 1.0
**Date:** September 14, 2026
**Prepared for:** Mon's Café & Bakery (Home Bakery Business)
**Location:** Saptapalli, Habra, West Bengal

---

## 1. Overview

Mon's Café & Bakery is a home-based bakery business offering custom cakes and baked goods. The goal is to build a **responsive, single-page marketing and ordering website** that showcases the brand, displays product categories with images, and routes customer orders to WhatsApp for manual order processing — since the business is in its early stage and does not yet need a full e-commerce checkout/login system.

The site should feel **premium, warm, and romantic**, reflecting a handcrafted bakery aesthetic, with smooth animations and a mobile-first responsive design.

---

## 2. Business Context

- **Brand name:** Mon's Café & Bakery
- **Business type:** Home bakery
- **Location:** Saptapalli, Habra
- **Delivery:** Free home delivery within 5 km of the bakery location
- **Contact number:** +91 8617878810 (call & WhatsApp)
- **Social media:**
  - Facebook: https://www.facebook.com/share/1BHCJYoH86/
  - Instagram: https://www.instagram.com/mons_cafe.bakery
- **Products offered:** Custom cakes, bento cakes, tub cakes, fruit cakes, 2–3 tier celebration cakes, brownies, pizza, buns, ice cream, and more
- **Available cake flavours:** Chocolate, Mango, Butterscotch, Vanilla, Strawberry, Blueberry, Coffee
- **Current ordering process:** No online payment/checkout yet. Orders are captured via a guided flow that redirects to WhatsApp, where the bakery manually confirms and processes the order.

---

## 3. Goals & Objectives

| Goal | Description |
|---|---|
| Brand presence | Establish a professional, premium online presence for the bakery |
| Product discovery | Let customers easily browse cakes and other items by category with visuals |
| Low-friction ordering | Let customers configure their order (flavour, weight, veg/non-veg, etc.) and send it directly to WhatsApp without needing to sign up or pay online |
| Engagement | Use an AI chat assistant to help undecided customers get cake suggestions |
| Trust building | Highlight location, delivery radius, contact info, and social proof (Instagram/Facebook) |
| Mobile-first experience | Ensure the site is fully responsive and delightful primarily on mobile, since most customers will browse via phone |

---

## 4. Target Audience

- Local residents within Habra and nearby areas (primarily within the 5 km free-delivery radius)
- Customers looking for custom celebration cakes (birthdays, anniversaries)
- Customers browsing via mobile phone/Instagram who click through to the website
- First-time visitors unfamiliar with the brand who need convincing via visuals and "About" storytelling

---

## 5. Scope

### 5.1 In Scope (v1)
- Single-page responsive website (HTML, CSS, JavaScript)
- Hero/landing section with animated logo, brand name, tagline, location reveal, and rotating messaging
- About section
- Two main navigation paths: "Explore Cakes" and "Explore Different Items"
- Category-based product galleries with images
- WhatsApp order redirect flow with guided option selection (flavour, weight/pound, veg/non-veg, pizza options, etc.)
- AI chatbot widget for cake suggestions
- Scroll animations and smooth scrolling
- Dark, elegant premium theme using the specified color palette
- Mobile-first responsive design, then adapted to desktop
- Contact and social media links (WhatsApp, call, Facebook, Instagram)

### 5.2 Out of Scope (v1)
- Online payment gateway / checkout
- Customer login/signup or accounts
- Order tracking or order history dashboard
- Admin/CMS panel for managing products (can be a v2 consideration)
- Real backend database (v1 can be static/front-end driven, with WhatsApp as the "order system")

---

## 6. Site Structure / Information Architecture

```
Home (Single Page, with anchor-linked sections)
│
├── Hero Section
│   ├── Logo (responsive)
│   ├── Brand name: "Mon's Café & Bakery"
│   ├── Subtext: "Free home delivery within 5 km of our bakery location"
│   ├── Location reveal (fade transition): "Saptapalli, Habra"
│   └── Tagline (fade transition): "Offers premium quality at best value"
│
├── About Section
│   └── About Mon's Café & Bakery (brand story, quality promise)
│
├── Explore Section (two entry points)
│   ├── Explore Cakes → Birthday Cake, Anniversary Cake, Bento Cake, Tub Cake, Fruit Cake
│   └── Explore Different Items → Brownie, Pizza, Crisscross Chicken Bun, Ice Cream, etc.
│
├── Product Detail / Order Configuration (per item, opened on selection)
│   ├── Cake options: Weight/Pound, Veg/Non-Veg, Flavour (Chocolate, Mango, Butterscotch, Vanilla, Strawberry, Blueberry, Coffee)
│   ├── Pizza options: Size (Small 6", Medium 8", Large 10", Extra Large 12"), Pizza Type (Chicken Pizza, BBQ Chicken Pizza, Paneer Tikka pizza, Vegetarian Pizza, Paneer Cheese Burst)
│   └── "Order via WhatsApp" button → pre-filled WhatsApp message with selections
│
├── AI Chat Assistant (floating button, available site-wide)
│   └── Suggests cakes/items based on customer's described preferences
│
├── Contact / Footer
│   ├── Phone / WhatsApp: +91 8617878810
│   ├── Location: Saptapalli, Habra
│   ├── Social links: Facebook, Instagram
│   └── "Follow us for daily cake designs" prompt
```

---

## 7. Detailed Feature Requirements

### 7.1 Hero / Landing Section
- Responsive logo, scales appropriately across breakpoints
- Brand name "Mon's Café & Bakery" displayed beside/near the logo
- Below the brand name: "Free home delivery within 5 km of our bakery location"
- Animated sequence: delivery text → fades out → location "Saptapalli, Habra" fades in → fades out → tagline "Offers premium quality at best value" fades in
- This should use CSS transitions/keyframes or a lightweight JS animation sequence (e.g., timed opacity/translate transitions), not an external animation library dependency unless desired
- "About" call-to-action/nav link visible in or right after the hero

### 7.2 About Section
- Static content block introducing the bakery, its values (quality, creativity, love), and specialties (bento cakes, celebration cakes, 2–3 tier cakes, fruit cakes, pizzas, buns)
- Mentions free delivery within 5 km again for reinforcement
- Scroll-triggered entrance animation (fade/slide in)

### 7.3 Explore Section (Category Selection)
- Two large, visually distinct call-to-action cards/buttons: **"Explore Cakes"** and **"Explore Different Items"**
- Clicking either scrolls to or reveals the relevant product gallery (single-page anchor navigation, not a full page reload, to preserve smooth scrolling)

### 7.4 Product Galleries
**Cakes category:**
- Birthday Cake
- Anniversary Cake
- Bento Cake
- Tub Cake
- Fruit Cake

**Other Items category:**
- Brownie
- Pizza
- Crisscross Chicken Bun
- Ice Cream Tub
- (extensible for "and many more")

Each item displayed as a card with:
- Product image (placeholder image slots to be replaced with real bakery photos)
- Product name
- Short description (optional)
- "Order Now" / "Customize & Order" button

### 7.5 Order Configuration → WhatsApp Redirect
This is the core conversion feature.

**Flow:**
1. Customer selects a product (e.g., "Bento Cake")
2. A configuration panel/modal appears with relevant options:
   - **Cakes:** Weight (e.g., 0.5kg / 1kg / 1.5kg / 2kg / Custom), Veg / Non-Veg (egg or eggless), Flavour (Chocolate, Mango, Butterscotch, Vanilla, Strawberry, Blueberry, Coffee)
   - **Pizza:** Size (6" to 12") and Pizza Type (Chicken Pizza, BBQ Chicken Pizza, Paneer Tikka pizza, Vegetarian Pizza, Paneer Cheese Burst)
   - **Ice Cream Tub:** Flavours (Chocolate, Butterscotch, Mango, Vanilla, Blueberry, Strawberry, Paan) & Quantity
   - **Other items:** simplified option set as applicable (e.g., quantity)
3. Customer taps "Order via WhatsApp"
4. The website constructs a pre-filled WhatsApp message summarizing the selected product and options (using the `wa.me` link format with a URL-encoded message) and opens WhatsApp (app on mobile, WhatsApp Web on desktop) addressed to +91 8617878810
5. Bakery owner receives the message and manually continues the conversation to confirm order details, pricing, and payment

**Technical approach:**
- Use a `https://wa.me/918617878810?text=<encoded message>` link generated dynamically via JavaScript based on user selections
- No backend/database required for v1 — this is purely client-side

### 7.6 AI Chat Assistant
- Floating chat button (bottom corner, persistent across the page)
- Opens a chat widget where customers can describe what they want (e.g., "I want something for my daughter's 5th birthday, she loves chocolate")
- The assistant suggests relevant cakes/items from the catalog based on the input
- Suggestions should link/scroll to the relevant product card or open its order configuration
- (Implementation note: this requires an AI API call — e.g., a lightweight LLM integration — since it needs to interpret free-text customer requests, not just keyword matching)

### 7.7 Animations & Interactions
- Scroll-triggered entrance animations for sections (fade-in, slide-up) as the user scrolls down
- Smooth scrolling between sections/anchors (native `scroll-behavior: smooth` or a JS smooth-scroll implementation)
- Hover/tap micro-interactions on buttons and product cards
- Hero text fade sequence as described in 7.1

### 7.8 Responsiveness
- **Mobile-first methodology:** design and build for small screens first, then progressively enhance for tablet and desktop breakpoints
- Fully compatible with all common mobile device sizes
- Desktop layout should feel intentionally designed (not just a stretched mobile layout) — e.g., multi-column product grids, wider hero layout

### 7.9 Theme & Visual Design
- **Elegant dark, premium, warm, romantic** theme
- Color palette (see Section 8)
- Typography: elegant serif or script accent font for headings (brand/romantic feel) paired with a clean, readable sans-serif for body text — to be finalized during design phase
- Generous imagery of cakes/items as the primary visual driver

### 7.10 Contact & Social Proof
- Footer or dedicated contact section with:
  - Phone number: +91 8617878810 (click-to-call on mobile)
  - WhatsApp button/link: 8617878810
  - Location: Saptapalli, Habra
  - Facebook link: https://www.facebook.com/share/1BHCJYoH86/
  - Instagram link: https://www.instagram.com/mons_cafe.bakery
  - Prompt encouraging customers to follow social handles for daily cake designs

---

## 8. Design System — "Premium Romantic Bakery" Palette

| Color Name | Hex Code | Usage |
|---|---|---|
| Deep Berry Burgundy | `#5D1231` | Primary brand color — hero sections, navbar, buttons |
| Rich Raspberry | `#851748` | Secondary accent — hover states, highlights |
| Soft Blush Pink | `#F5E8ED` | Main background, cards, sections |
| Dusty Rose | `#DBA5A4` | Decorative elements, secondary backgrounds |
| Warm Cream | `#FFF9F3` | Clean backgrounds and content sections |
| Chocolate Brown | `#2E1B16` | Headings, body text, premium accents |
| Muted Mauve | `#A47A8D` | Subtle borders, icons, secondary text |

---

## 9. Technical Requirements

| Layer | Recommendation |
|---|---|
| Structure | Semantic HTML5 |
| Styling | CSS3 (Flexbox/Grid for layout), mobile-first media queries, CSS custom properties for the color system |
| Interactivity | Vanilla JavaScript (ES6+) for scroll animations, smooth scroll, WhatsApp link generation, chat widget UI |
| AI Chatbot | Requires an AI/LLM API integration for interpreting free-text customer queries and generating suggestions |
| Ordering | `wa.me` deep links (no backend needed for v1) |
| Images | Optimized product images (WebP where possible) with lazy loading for performance |
| Hosting | Any static hosting is sufficient for v1 (no server-side logic required) |

---

## 10. Non-Functional Requirements

- **Performance:** Fast initial load on mobile networks; optimize/compress images; lazy-load off-screen images
- **Accessibility:** Sufficient color contrast despite the dark/romantic palette; alt text on all product images; keyboard-navigable chat widget
- **SEO:** Basic on-page SEO (meta title/description, local business schema markup mentioning Habra/Saptapalli) to help local discovery
- **Browser/device compatibility:** Latest versions of Chrome, Safari, Firefox on both mobile and desktop
- **Maintainability:** Structure product data (name, image, category, options) in a simple JS object/array so new items can be added without restructuring the page

---

## 11. Content Requirements (to be supplied by the bakery)

- Logo file (vector or high-res PNG, transparent background)
- Product photography for each listed item (Birthday Cake, Anniversary Cake, Bento Cake, Tub Cake, Fruit Cake, Brownie, Pizza, Crisscross Chicken Bun, Ice Cream, etc.)
- Finalized pizza customization options (size/toppings)
- Any pricing information, if the bakery wants indicative pricing shown (currently not specified — assumed to be discussed over WhatsApp)

---

## 12. Success Metrics (v1)

- Number of WhatsApp order redirects generated from the site
- Time on site / scroll depth (engagement with product galleries)
- Instagram/Facebook click-throughs from the website
- Mobile vs. desktop traffic split (validate mobile-first priority)

---

## 13. Future Scope (v2+)

- Admin panel for the bakery owner to add/edit products and images without touching code
- Online payment integration
- Customer accounts and order history
- Delivery radius auto-check (based on customer address/pincode)
- Push notifications for order status updates
- Analytics dashboard for popular items/flavours

---

## 14. Open Questions for the Bakery Owner

1. What specific options should be offered for pizza (sizes, crust type, toppings)?
2. Should indicative pricing be shown on the site, or should all pricing be discussed only via WhatsApp?
3. Do you have professional product photos ready, or will these need to be sourced/shot?
4. Any preference for the heading/accent font (script/serif style) to match the romantic branding?