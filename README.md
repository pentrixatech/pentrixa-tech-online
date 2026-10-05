# Pentrixa Tech

> **Build. Innovate. Scale.**  
> High-performance official web platform and digital portfolio for Pentrixa Tech—a founder-led software engineering, applied artificial intelligence, and business intelligence studio.

---

## 1. Overview

Pentrixa Tech is an engineering studio delivering modern web platforms, custom management software, applied AI models, and real-time business intelligence solutions. This repository houses the client-side single-page application built with modern React and Vite, featuring an editorial design language, fluid responsive layouts, and zero-maintenance serverless form inquiry routing.

---

## 2. Technical Stack

- **Framework**: React 18+ (Functional Components, Hooks)
- **Bundler & Tooling**: Vite
- **Routing**: `react-router-dom` (v6+) with client-side SPA fallback
- **Styling Architecture**: Pure CSS3 (`index.css`, `App.css`) utilizing CSS variables, hardware-accelerated transforms (`translate3d`), and fluid typography via `clamp()`
- **Form Dispatch**: Serverless structured key-value inquiry dispatch via Web3Forms with automatic `mailto:` fallback
- **Typography**: 
  - Serif Headings: *Playfair Display*
  - Body & UI: *Montserrat*

---

## 3. Brand Identity & Palette

| Token | Hex Code | Role |
| :--- | :--- | :--- |
| `--bg-primary` | `#12090B` | Deep Charcoal Canvas |
| `--bg-surface` | `#1A0E11` | Card & Layer Background |
| `--bg-elevated` | `#211317` | Hover & Accordion Elevation |
| `--accent-burgundy` | `#6F3437` | Primary Action & Borders |
| `--accent-rose` | `#C9A3A0` | Accent Highlights & Badges |
| `--accent-blush` | `#E2C7C1` | Secondary Highlights & Links |
| `--text-primary` | `#F7F1ED` | High-contrast Heading Text |
| `--text-secondary` | `#CBB9B5` | Body & Paragraph Text |

---

## 4. Directory Structure

```text
pentrixa-tech/
├── frontend/
│   ├── public/
│   │   ├── favicon.svg          # Branded geometric diamond favicon
│   │   ├── robots.txt           # Search crawler directive
│   │   └── sitemap.xml          # XML sitemap indexing all routes
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/          # Logo, Button, SectionLabel, FloatingActions
│   │   │   ├── forms/           # ProjectInquiryForm
│   │   │   ├── home/            # Hero, CapabilityStrip, Services, FAQ, CTA
│   │   │   └── layout/          # Navbar, Footer, PageLoader
│   │   ├── data/                # services.js, projects.js, team.js, faqs.js, insights.js
│   │   ├── pages/               # 15 distinct routes (Home, About, Services, etc.)
│   │   ├── services/            # inquiryApi.js (Web3Forms integration)
│   │   ├── App.css              # Main application stylesheet
│   │   ├── index.css            # Global tokens & architectural background
│   │   ├── App.jsx              # Client routing tree
│   │   └── main.jsx             # React DOM entry point
│   ├── index.html               # Semantic HTML with Schema.org & Open Graph tags
│   ├── package.json
│   ├── vercel.json              # Client-side SPA rewrites
│   └── vite.config.js
└── README.md