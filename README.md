# 🎂 Mon's Café & Bakery — Website & Order System

> **Handcrafted with Love** · Custom Cakes, Bento Cakes & Baked Goods in Saptapalli, Habra.

A responsive, single-page marketing and WhatsApp order-builder application for **Mon's Café & Bakery**. Designed with a romantic bakery aesthetic, vibrant micro-animations, product option customization modals, and a built-in AI cake assistant.

---

## ✨ Features

- **Hero & Storytelling Landing Page**: Animated floating petals effect, rotating delivery/location badges, and interactive navigation cards.
- **Product Galleries**: Interactive categories showcasing signature custom cakes (Birthday, Anniversary, Bento, Tub, Christmas) and savory/sweet treats (Brownie, Pizza, Crisscross Chicken Bun, Ice Cream Tubs).
- **Interactive Order Modal**: Multi-option selector allowing customers to customize cake weight (0.5 lb to 2 lb+), egg preference (Eggless/With Egg), 8 cake flavours (Chocolate, Mango, Rosmalai, etc.), pizza sizes/types, and ice cream flavours.
- **Direct WhatsApp Order Generation**: Generates formatted, URL-encoded `wa.me` messages sent directly to the bakery (+91 8617878810) for instant manual order processing.
- **AI Cake Assistant Widget**: Floating assistant chat widget with pre-configured chip shortcuts, rule-based offline fallback responses, and support for Google Gemini API integration.
- **Mobile-First & Responsive Design**: Smooth scrolling navigation, mobile hamburger menu, sticky WhatsApp ordering bar, and accessibility support (`prefers-reduced-motion`, ARIA roles, keyboard focus management).

---

## 🛠️ Tech Stack

- **Structure**: Semantic HTML5 with Local Business Schema (`JSON-LD`) for local SEO.
- **Styling**: Vanilla CSS3 with CSS Custom Properties (Design Tokens), Flexbox/Grid layouts, and CSS keyframe animations.
- **Scripting**: Vanilla JavaScript (ES6+), modular IIFEs, IntersectionObserver for scroll-reveal effects.
- **Typography**: Google Fonts (*Playfair Display*, *Dancing Script*, *Poppins*).

---

## 📷 Screenshots

*(Add screenshots of desktop and mobile views here before publishing)*

| Desktop View | Mobile View |
| :---: | :---: |
| `![Desktop Screenshot](assets/images/screenshot-desktop.png)` | `![Mobile Screenshot](assets/images/screenshot-mobile.png)` |

---

## 🚀 Quick Start / Local Setup

No build step or Node.js server is required. This is a static web application.

1. **Clone or Download the Repository**:
   ```bash
   git clone https://github.com/your-username/mons-cafe-bakery.git
   cd mons-cafe-bakery
   ```

2. **Run Locally**:
   - Open `index.html` directly in any web browser.
   - Alternatively, serve using VS Code **Live Server** or Python's HTTP server:
     ```bash
     python -m http.server 8000
     ```
     Then open `http://localhost:8000` in your browser.

---

## 🤖 AI Chatbot Configuration (Optional)

The AI Cake Assistant comes with built-in rule-based fallback responses for common queries (birthdays, anniversaries, bento cakes, flavours, delivery radius, pricing).

To enable live generative AI powered by **Google Gemini**:
1. Open [`script.js`](script.js).
2. Locate line `560`:
   ```javascript
   const GEMINI_API_KEY = 'YOUR_GEMINI_API_KEY_HERE';
   ```
3. Replace the empty string with your Gemini API Key.

---

## 📍 Business & Contact Info

- **Location**: Saptapalli, Habra, West Bengal, India
- **Delivery**: Free home delivery within 5 km radius of Saptapalli
- **WhatsApp / Phone**: [+91 8617878810](https://wa.me/918617878810)
- **Instagram**: [@mons_cafe.bakery](https://www.instagram.com/mons_cafe.bakery)
- **Facebook**: [Mon's Café & Bakery](https://www.facebook.com/share/1BHCJYoH86/)

---

## 📄 License

This project is created for **Mon's Café & Bakery**. All rights reserved.
