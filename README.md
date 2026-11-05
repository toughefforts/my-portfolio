# Sachin Sharma — Developer Portfolio & Technical Showcase

<p align="left">
  <a href="https://my-portfolio-sepia-kappa-25.vercel.app/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Live_Portfolio-Visit_Website_↗-fa4d56?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Portfolio Website" />
  </a>
  <a href="https://my-portfolio-sepia-kappa-25.vercel.app/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Production-Live_%26_Operational-10b981?style=for-the-badge&logo=statuspage&logoColor=white" alt="Deployment Status" />
  </a>
  <a href="https://my-portfolio-sepia-kappa-25.vercel.app/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Next.js_16-Turbopack-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js 16" />
  </a>
</p>

A modern, high-performance web portfolio built to present full-stack engineering work, system architecture case studies, educational credentials, and interactive user interface experiments. The project pairs a Next.js 16 frontend with an optional Python FastAPI microservice for database persistence and email notifications.

> 🌐 **Live Production Deployment:** [https://my-portfolio-sepia-kappa-25.vercel.app/](https://my-portfolio-sepia-kappa-25.vercel.app/)

---

## Table of Contents

- [1. Project Overview](#1-project-overview)
- [2. Key Features](#2-key-features)
- [3. Technology Stack](#3-technology-stack)
- [4. System Architecture](#4-system-architecture)
- [5. Repository Structure](#5-repository-structure)
- [6. File-by-File Documentation](#6-file-by-file-documentation)
  - [6.1 Frontend Application](#61-frontend-application)
  - [6.2 Backend Microservice](#62-backend-microservice)
- [7. Pages and User Interface Sections](#7-pages-and-user-interface-sections)
- [8. Animation & Motion Engineering](#8-animation--motion-engineering)
- [9. Responsive Design & Breakpoints](#9-responsive-design--breakpoints)
- [10. Blog System & Dedicated Asset Management](#10-blog-system--dedicated-asset-management)
- [11. API & Backend Architecture](#11-api--backend-architecture)
- [12. Environment Variables & Security](#12-environment-variables--security)
- [13. Installation & Local Setup](#13-installation--local-setup)
- [14. Available Scripts](#14-available-scripts)
- [15. Build & Production Deployment](#15-build--production-deployment)
- [16. Codebase Conventions & Maintenance Guidelines](#16-codebase-conventions--maintenance-guidelines)
- [17. Contributing](#17-contributing)
- [18. Troubleshooting](#18-troubleshooting)
- [19. Security Policy](#19-security-policy)
- [20. Maintenance Notes](#20-maintenance-notes)
- [21. License](#21-license)

---

## 1. Project Overview

This repository houses the personal portfolio and interactive engineering playground of Sachin Sharma, a full-stack developer based in Delhi, India.

Rather than relying on cookie-cutter templates or bloated component kits, this site was engineered from the ground up to demonstrate production-grade front-end craft, sub-pixel motion choreography, and clean software architecture. It solves a specific problem: presenting diverse engineering skills—ranging from backend relational databases to complex client-side Canvas and WebGL-style physics—inside a single coherent, editorial-style web experience that stays fast, accessible, and responsive across every device size.

Visitors can explore real case studies with interactive sandboxes, examine verified academic credentials inside a 3D isometric laptop mockup, read technical articles with dedicated reading indicators, inspect a panoramic bonsai technology tree, and send direct project inquiries that automatically trigger server-side SMTP email alerts.

---

## 2. Key Features

### User Interface & Navigation

- **Clean URL Navigation**: The application uses URL path rewrites (`/about`, `/projects`, `/contact`) combined with programmatic smooth scrolling. Visitors see clean, readable URLs without `#` hash fragments cluttering the address bar.
- **Sticky Glassmorphic Header**: An adaptive navigation bar that monitors scroll position to apply background blur, track the currently visible section with an active scroll-spy indicator, and collapse into a smooth mobile drawer on touch devices.
- **Inverted Blend-Mode Cursor**: A custom pointer that tracks mouse movement with a continuous `requestAnimationFrame` lerp loop. It uses CSS `mix-blend-mode: difference` to invert seamlessly over light backgrounds, dark typography, and vibrant photography, expanding when hovering interactive elements.

### Interactive Visualizations & Motion

- **Physics-Driven Intro Preloader**: A five-second entrance sequence built with GSAP. An animated red dot drops, squashes upon contact with typography, rebounds across three dampening bounces, and arcs into its resting place inside the primary header wordmark before lifting the page curtain.
- **Avatar X-Ray Scope with Alpha Hit Testing**: The hero character portrait includes a circular flashlight lens that reveals the avatar's internal skeleton. To prevent the scope from triggering over empty transparent image margins, an offscreen `128x171` HTML5 canvas samples the raw alpha channel in real time.
- **3D Isometric Laptop Degree Viewer**: Coursework and degrees are housed inside a 3D CSS laptop model. As the section scrolls into the viewport, the laptop lid lifts open automatically, allowing visitors to cycle through actual course projects and syllabus modules.
- **Panoramic Bonsai Tech Tree**: A horizontal skills layout that maps glowing neon medallions and handcrafted SVG brand shields along Japanese cherry blossom branches, complete with ambient falling crimson leaves.

### Content & Communication

- **Publication Reading Terminal**: In-depth articles with live reading-time estimates, a real-time progress bar, dynamic table of contents tracking, and before-and-after image comparisons.
- **Interactive Live Previews**: Dedicated `/preview/[id]` routes that simulate live web applications inside responsive device frames (laptop, tablet, phone) with active controls and mock data.
- **Automated SMTP Contact System**: Contact form submissions are processed through a Next.js server-side route that verifies fields, strips whitespace, and dispatches an HTML email to the site owner via Gmail SMTP with a one-click `reply-to` header.

---

## 3. Technology Stack

Every package in this codebase serves a distinct, deliberate purpose:

### Frontend Technologies

| Package                   | Version             | Purpose                                                                                                                  |
| :------------------------ | :------------------ | :----------------------------------------------------------------------------------------------------------------------- |
| **Next.js**               | `16.3.4`            | App Router framework handling server components, page routing, static site generation, and serverless edge API handlers. |
| **React**                 | `19.2.8`            | Core UI library for component composition and state management.                                                          |
| **React DOM**             | `19.2.8`            | Renderer for React tree elements in the browser DOM.                                                                     |
| **TypeScript**            | `^5`                | Strict static typing across all components, utility helpers, and dataset definitions.                                    |
| **Tailwind CSS**          | `^4`                | Utility-first styling engine utilizing `@tailwindcss/postcss` for zero-runtime CSS generation.                           |
| **Framer Motion**         | `^13.2.0`           | Handles layout animations, drag physics, modal drawers, and spring-based UI transitions.                                 |
| **GSAP**                  | `^3.15.0`           | Powers timeline-based choreography, the intro preloader physics sequence, and scroll triggers.                           |
| **Lenis**                 | `^1.3.26`           | Hardware-accelerated smooth inertia scrolling engine synchronized with GSAP's internal ticker.                           |
| **Lucide React**          | `^1.43.0`           | Crisp, accessible modern icon set used throughout the navigation, cards, and UI controls.                                |
| **React Icons**           | `^5.7.0`            | Comprehensive iconography used specifically for developer tools and technical stack badges.                              |
| **React Hook Form**       | `^7.87.0`           | Manages form state, input change tracking, and submission lifecycle with minimal re-renders.                             |
| **Zod**                   | `^3.25.76`          | Schema declaration and validation library for form inputs and API payloads.                                              |
| **Nodemailer**            | `^10.1.0`           | Server-side transport library executing automated Gmail SMTP email dispatch from the edge route.                         |
| **Embla Carousel React**  | `^8.6.0`            | Lightweight touch-friendly carousel engine driving testimonial and credential sliders.                                   |
| **clsx & tailwind-merge** | `^2.1.1` / `^3.6.0` | Utility helpers that safely concatenate class names and resolve conflicting Tailwind utilities.                          |

### Backend Microservice Technologies

| Package               | Version    | Purpose                                                                                                 |
| :-------------------- | :--------- | :------------------------------------------------------------------------------------------------------ |
| **FastAPI**           | `0.115.12` | High-performance Python ASGI web framework providing structured REST endpoints for contact persistence. |
| **Uvicorn**           | `0.34.3`   | Production-grade ASGI web server running the FastAPI application.                                       |
| **SQLAlchemy**        | `2.0.41`   | Modern Python ORM providing typed models, session pooling, and database abstraction.                    |
| **PyMySQL**           | `1.1.1`    | Pure-Python MySQL client connecting SQLAlchemy to MySQL or MariaDB databases.                           |
| **Pydantic**          | `2.11.3`   | Enforces runtime data validation and serialization for incoming API request payloads.                   |
| **Pydantic Settings** | `2.9.1`    | Loads and parses typed environment variables from local `.env` configuration files.                     |
| **Alembic**           | `1.16.1`   | Database migration framework for schema evolution and version tracking.                                 |
| **Email Validator**   | `2.2.0`    | Validates email syntax and deliverability parameters inside Pydantic schemas.                           |

---

## 4. System Architecture

The project is structured as a decoupled full-stack system. The Next.js frontend functions as a self-sufficient web application capable of static page delivery and serverless contact email dispatch. The Python FastAPI service acts as an optional microservice for relational message persistence and operational health checks.

```
       [ Visitor Browser ]
               │
               ▼
      Next.js 16 (Port 3000)
    ┌────────────────────────┐
    │  App Router & Turbopack │
    │  Static Pages (SSG)    │
    │  Lenis + GSAP Motion   │
    └──────────┬─────────────┘
               │
        POST /api/contact
               │
               ├────────────────────────────────────────┐
               ▼                                        ▼
   Next.js Route Handler                    FastAPI Microservice (Port 8000)
┌─────────────────────────┐               ┌──────────────────────────────────┐
│  Nodemailer Transport   │               │  Pydantic Request Validation     │
│  Gmail SMTP Dispatch    │               │  SQLAlchemy ORM Layer            │
└──────────────┬──────────┘               └────────────────┬─────────────────┘
               │                                           │
               ▼                                           ▼
     [ Recipient Inbox ]                          [ MySQL Database ]
```

### Data Flow & Execution Sequence

1. **Initial Page Load**: Next.js serves pre-rendered HTML and CSS. The `Preloader` component initializes, runs its 5-second branded physics sequence, and unlocks the page viewport.
2. **Inertia Scrolling**: The `SmoothScroll` component binds Lenis to the window. As the user navigates, `scrollToCleanSection` intercepts clicks, updates the browser URL without hash fragments, and smoothly scrolls to the target section while accounting for the fixed 80px header height.
3. **Form Submission**: When a visitor fills out the contact form, `frontend/src/lib/api.ts` posts the data to `/api/contact`. The Next.js server route validates the email format, formats a responsive HTML email template, and sends the message via Nodemailer. If the Python backend is online, it also forwards a copy for relational storage in MySQL.

---

## 5. Repository Structure

```text
Portfolio/
├── .gitignore                          # Global gitignore excluding build output and environment files
├── GIT_BACKUP_GUIDE.md                 # Checkpoint guide documenting key development milestones
├── README.md                           # Master technical documentation
│
├── backend/                            # Optional Python FastAPI microservice
│   ├── app/
│   │   ├── __init__.py                 # Python package marker
│   │   ├── main.py                     # FastAPI application entry point, CORS, and route registration
│   │   ├── api/                        # Route endpoint controllers
│   │   │   ├── __init__.py
│   │   │   ├── contact.py              # POST /api/contact handler with input sanitization
│   │   │   └── health.py               # GET /api/health database liveness check
│   │   ├── core/                       # Core configuration and database engines
│   │   │   ├── __init__.py
│   │   │   ├── config.py               # Pydantic BaseSettings loading .env with LRU cache
│   │   │   └── database.py             # SQLAlchemy engine, pool configuration, and get_db generator
│   │   ├── models/                     # Declarative ORM entities
│   │   │   ├── __init__.py
│   │   │   └── contact_message.py      # contact_messages MySQL table schema definition
│   │   ├── schemas/                    # Pydantic request and response schemas
│   │   │   ├── __init__.py
│   │   │   └── contact.py              # ContactCreate, ContactResponse, and ErrorResponse DTOs
│   │   └── services/                   # Business logic and database operations
│   │       ├── __init__.py
│   │       └── contact_service.py      # Message creation, pagination, and status updates
│   ├── .env.example                    # Safe template for backend database credentials
│   ├── convert_images.py               # Image utility for background removal and alpha feathering
│   └── requirements.txt                # Pinned Python package dependencies
│
└── frontend/                           # Primary Next.js 16 full-stack web application
    ├── public/                         # Publicly served static assets
    │   └── images/                     # Categorized visual media
    │       ├── about/                  # Character avatar portraits
    │       ├── blogs/                  # Dedicated publication folders (blog1 through blog12)
    │       │   ├── blog1/              # Design Unraveled case study imagery
    │       │   ├── blog2/              # Minimalist Systems case study imagery
    │       │   ├── blog3/              # Color Theory case study imagery
    │       │   ├── blog4/              # Wireframing & UX case study imagery
    │       │   ├── blog7/              # Pixels & Insights UI imagery
    │       │   ├── blog10/             # System Scalability architecture diagrams
    │       │   └── blog5, 6, 8, 9, 11, 12/ # Dedicated folders for remaining publications
    │       ├── contact/                # Dotted global map vector artwork
    │       ├── cta/                    # Collaboration 3D visual asset
    │       ├── education/              # Campus photographs and laptop screen previews
    │       ├── footer/                 # Mountain landscape graphic and origami paper plane
    │       ├── hero/                   # Character avatar and X-Ray skeleton overlay
    │       ├── projects/               # High-fidelity project showcase cards
    │       ├── services/               # Service category illustrations
    │       ├── skills/                 # Bonsai tech tree banner and SVG assets
    │       ├── testimonials/           # Client portrait images
    │       └── under-construction/     # Staging banner
    │
    ├── src/
    │   ├── app/                        # Next.js App Router root
    │   │   ├── api/contact/route.ts    # Edge route handler executing Nodemailer SMTP delivery
    │   │   ├── blog/                   # Blog routes
    │   │   │   ├── [id]/page.tsx       # Standalone reading terminal with table of contents
    │   │   │   └── page.tsx            # Clean redirect from /blog to main page section
    │   │   ├── education/[id]/page.tsx # Detailed educational credential and syllabus viewer
    │   │   ├── preview/[id]/page.tsx   # Interactive project preview sandbox
    │   │   ├── privacy-policy/page.tsx # Comprehensive privacy policy document
    │   │   ├── terms-of-service/page.tsx # Standard website terms of service
    │   │   ├── sitemap/page.tsx        # HTML visual sitemap
    │   │   ├── sitemap.ts              # Dynamic search engine XML sitemap generator
    │   │   ├── globals.css             # Tailwind v4 theme, font bindings, and custom keyframes
    │   │   ├── layout.tsx              # Root HTML wrapper (fonts, Lenis, preloader, cursor)
    │   │   └── page.tsx                # Master single-page home layout mounting all 10 sections
    │   │
    │   ├── components/                 # Modular React UI components
    │   │   ├── animations/             # Reusable motion components
    │   │   │   ├── CounterAnimation.tsx# Viewport-triggered numerical tally counter
    │   │   │   ├── CustomCursor.tsx    # Magnetic inverted blend-mode circular pointer
    │   │   │   ├── Preloader.tsx       # GSAP physics-driven intro branding animation
    │   │   │   ├── RevealAnimation.tsx # GSAP ScrollTrigger element reveal wrapper
    │   │   │   └── SmoothScroll.tsx    # Lenis smooth inertia scroll synchronization
    │   │   ├── layout/                 # Structural page components
    │   │   │   ├── Header.tsx          # Sticky glassmorphic navigation header with scroll-spy
    │   │   │   └── Footer.tsx          # Mountain scenery, origami card, and legal links
    │   │   ├── sections/               # The 10 landing page sections
    │   │   │   ├── HeroSection.tsx     # Hero banner with canvas X-Ray avatar flashlight
    │   │   │   ├── AboutSection.tsx    # Bio, technical stack badges, and background
    │   │   │   ├── ServicesSection.tsx # Searchable, categorized offerings with dynamic colors
    │   │   │   ├── EducationSection.tsx# 3D laptop degree showcase with scroll-driven lid
    │   │   │   ├── SkillsSection.tsx   # Panoramic bonsai tech tree with glowing neon nodes
    │   │   │   ├── ProjectsSection.tsx # Searchable project showcase cards with modal drawers
    │   │   │   ├── TestimonialsSection.tsx # Client reviews and endorsement carousel
    │   │   │   ├── BlogSection.tsx     # Publication cards with category filters
    │   │   │   ├── CtaSection.tsx      # Pre-contact collaboration conversion card
    │   │   │   └── ContactSection.tsx  # Direct inquiry form and dotted world map
    │   │   └── ui/                     # Reusable presentation atoms
    │   │       ├── BrandIcons.tsx      # Inline SVG icons for GitHub, LinkedIn, Twitter/X, Instagram
    │   │       └── WorldMapVisual.tsx  # Dotted world map with animated bezier connection arcs
    │   │
    │   ├── data/                       # Centralized typed static content
    │   │   ├── articles.ts             # Complete text, metrics, and galleries for 12 articles
    │   │   ├── education.ts            # Detailed degree syllabus, dates, and campus photos
    │   │   ├── navigation.ts           # Centralized header and footer navigation links
    │   │   ├── projects.ts             # Featured engineering project records and tech tags
    │   │   ├── project-staging.ts      # Live simulation data for /preview sandbox routes
    │   │   ├── services.ts             # Specialization definitions, features, and deliverables
    │   │   └── testimonials.ts         # Verified client endorsements and ratings
    │   │
    │   ├── lib/                        # Shared utility libraries
    │   │   ├── api.ts                  # API fetch clients for contact dispatch and health checks
    │   │   ├── navigation.ts           # Clean smooth-scrolling and path rewriting logic
    │   │   └── utils.ts                # Tailwind clsx and tailwind-merge class resolver
    │   │
    │   └── types/                      # Application TypeScript interfaces
    │       └── index.ts                # Strict contracts for projects, articles, forms, and navigation
    │
    ├── .env.local.example              # Safe placeholder template for frontend SMTP configuration
    ├── eslint.config.mjs               # ESLint configuration
    ├── next.config.ts                  # Next.js URL rewrite rules and compiler settings
    ├── package.json                    # Node dependencies and build scripts
    ├── postcss.config.mjs              # PostCSS Tailwind integration
    └── tsconfig.json                   # Strict TypeScript compiler options
```

---

## 6. File-by-File Documentation

### 6.1 Frontend Application

#### Configuration & Root Files

- `frontend/next.config.ts`: Configures internal URL rewrites that silently map clean routes like `/about`, `/projects`, and `/contact` to the root page (`/`). This allows the browser history and address bar to reflect clean paths while client-side scripts manage scrolling without full page reloads.
- `frontend/src/app/layout.tsx`: The root HTML shell. Configures Google Fonts (`Inter`, `Oswald`, `Caveat`, and `Plus Jakarta Sans`) via CSS variables, mounts the global custom cursor, initializes the intro preloader, and wraps child content in the Lenis smooth-scroll provider.
- `frontend/src/app/page.tsx`: The primary single-page entry point. Renders the ten core sections sequentially from `HeroSection` through `ContactSection`.
- `frontend/src/app/globals.css`: Contains the Tailwind CSS v4 setup, custom font definitions, scrollbar styling, and keyframe animations including `@keyframes float-leaf` for the falling cherry blossom petals.
- `frontend/src/app/sitemap.ts`: Next.js metadata generator that compiles a search-engine crawlable XML sitemap indexing all static routes, project preview sandboxes, education credentials, and blog articles.

#### Core Application Utilities

- `frontend/src/lib/navigation.ts`: Exports `scrollToCleanSection`. It determines whether the user is on a subpage or the home page, calculates the 80px fixed header offset, triggers Lenis smooth scrolling, and uses `window.history.replaceState` to update the URL path without `#` hash fragments.
- `frontend/src/lib/api.ts`: Exports `submitContactForm` and `checkApiHealth`. Manages HTTP communication with `/api/contact` and provides fallback error handling if external endpoints are unreachable.
- `frontend/src/lib/utils.ts`: Exports `cn`, a helper combining `clsx` and `tailwind-merge` to resolve conflicting Tailwind utility classes cleanly.
- `frontend/src/types/index.ts`: Central TypeScript definitions declaring the structural interfaces for `Project`, `ArticleDetail`, `EducationSlide`, `Service`, `Testimonial`, and `ContactFormData`.

#### Animation Components

- `frontend/src/components/animations/Preloader.tsx`: Manages the introductory five-second loading screen. Measures the exact viewport coordinates of the letter 'I' in the logo mark and coordinates a GSAP physics timeline where a red dot falls, squashes, bounces, and lands in place before sliding the curtain away.
- `frontend/src/components/animations/CustomCursor.tsx`: Renders an interactive circular pointer that follows the cursor using an active `requestAnimationFrame` lerp loop. Uses `mix-blend-mode: difference` to invert colors dynamically over text and images, scaling up when hovering over buttons or links.
- `frontend/src/components/animations/SmoothScroll.tsx`: Mounts Lenis smooth scrolling and keeps it synchronized with GSAP's `ScrollTrigger` updates. Automatically disables itself on standalone blog articles to ensure native reading ergonomics.
- `frontend/src/components/animations/RevealAnimation.tsx`: A reusable viewport entrance wrapper that fades and translates child elements upward by 30px using GSAP ScrollTrigger when they scroll into view.

#### Section Components

- `frontend/src/components/sections/HeroSection.tsx`: Features the main headline, numerical impact counters, and an interactive 3D avatar. Loads an offscreen canvas to perform pixel-level alpha hit-testing, activating the skeleton X-Ray flashlight only when hovering over visible character pixels.
- `frontend/src/components/sections/AboutSection.tsx`: Details personal biography, values, location (Delhi, India), and a grid of core technologies with authentic brand icons.
- `frontend/src/components/sections/ServicesSection.tsx`: Presents specialized services across web development, UI/UX, e-commerce, and cloud architecture. Includes category filters, search input, and multi-technology selection pills.
- `frontend/src/components/sections/EducationSection.tsx`: Mounts an interactive 3D laptop degree viewer that opens its screen automatically on scroll. Visitors can cycle through academic credentials for BCA, ADCE, and Class XII/X.
- `frontend/src/components/sections/SkillsSection.tsx`: Implements the panoramic bonsai technology tree. Maps glowing neon medallions and SVG shields across branches, accompanied by ambient falling leaves and an interactive skill inspection card.
- `frontend/src/components/sections/ProjectsSection.tsx`: Displays engineering case studies with category filtering, search, and slide-out modal drawers containing architecture breakdowns and external repository links.
- `frontend/src/components/sections/TestimonialsSection.tsx`: Renders a 3D perspective endorsement slider with active central card scaling, star ratings, and client verification details.
- `frontend/src/components/sections/BlogSection.tsx`: Features technical publications filtered by Design, Development, UI/UX, and Architecture, complete with card carousels and direct links to reading pages.
- `frontend/src/components/sections/CtaSection.tsx`: A high-impact conversion card with 3D artwork, service chips, and direct links to the contact section.
- `frontend/src/components/sections/ContactSection.tsx`: Houses the live contact form paired with an interactive dotted world map showing connection arcs from Delhi, India to international client locations.

### 6.2 Backend Microservice

- `backend/app/main.py`: Creates the FastAPI application instance, configures CORS middleware with allowed origins, configures structured logging, and registers the contact and health routers.
- `backend/app/core/config.py`: Defines the `Settings` class using `pydantic-settings` to parse `.env` files with fallback defaults for database URLs and CORS origins.
- `backend/app/core/database.py`: Establishes the SQLAlchemy engine with connection pool recycling (`pool_recycle=3600`) and `pool_pre_ping=True` to recover gracefully from dropped database handles.
- `backend/app/models/contact_message.py`: Declares the `ContactMessage` ORM entity mapping table `contact_messages` with fields for sender name, indexed email, text body, read status, and timestamps.
- `backend/app/schemas/contact.py`: Declares Pydantic validation schemas: `ContactCreate` enforcing length and email syntax constraints, `ContactResponse` for serialized output, and standardized error schemas.
- `backend/app/services/contact_service.py`: Encapsulates database transactions, adding new inquiries to MySQL and handling paginated retrieval for administrative review.
- `backend/app/api/contact.py`: Route controller for `POST /api/contact`. Trims whitespace, validates payloads, and commits inquiries through the service layer.
- `backend/app/api/health.py`: Route controller for `GET /api/health`. Runs a lightweight `SELECT 1` query to verify live database connectivity.

---

## 7. Pages and User Interface Sections

The application consists of one primary landing page and several specialized standalone routes:

### 1. Home Page (`/`)

The main entry point. Houses all ten core sections in an editorial layout. Navigation between sections occurs via smooth inertia scrolling, with browser history updated dynamically to maintain clean URLs.

### 2. Article Reader (`/blog/[id]`)

A distraction-free reading experience for technical case studies. Features include:

- Top reading-progress bar that fills as the reader scrolls.
- Interactive table of contents highlighting the active section via `IntersectionObserver`.
- Side-by-side visual comparison modules demonstrating design evolution.
- Four-step lightbox gallery for project milestones.
- Previous and next article navigation cards.

### 3. Educational Credential Viewer (`/education/[id]`)

Dedicated credential viewer displaying syllabus details, semester breakdowns, institutional campus photography, and grade achievements for BCA, ADCE, and secondary schooling.

### 4. Interactive Project Sandbox (`/preview/[id]`)

A dedicated live testing environment. Visitors can switch between desktop, tablet, and mobile device frames to interact with functional UI prototypes such as the Skycast weather dashboard, Taskflow Kanban board, and Aureli AI chatbot.

### 5. Legal & Sitemap Pages

- `/privacy-policy`: Comprehensive privacy disclosures covering contact data handling and analytics.
- `/terms-of-service`: Clear terms governing intellectual property, acceptable use, and external links.
- `/sitemap`: Human-readable visual directory indexing every page, tool, credential, and article.

---

## 8. Animation & Motion Engineering

The motion design in this project follows strict rules: animations must feel physical, purposeful, and never introduce layout shift (CLS) or input latency.

| Animation Component          | File Location          | Technology                | Trigger Condition                        | Visual Behavior                                                                                                                                                                               |
| :--------------------------- | :--------------------- | :------------------------ | :--------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Intro Preloader Physics**  | `Preloader.tsx`        | GSAP Timeline             | App initialization on first session load | Measures coordinates of letter 'I' in the logo. A red dot falls with gravity (`0.52s`), squashes upon impact, executes three dampening bounces, and arcs into place before the curtain opens. |
| **Avatar X-Ray Flashlight**  | `HeroSection.tsx`      | Canvas 2D + Framer Motion | Mouse move over avatar                   | An offscreen canvas samples pixel alpha channel. If cursor is over visible character pixels, a circular clip-path reveals the underlying skeleton graphic.                                    |
| **3D Isometric Laptop Lid**  | `EducationSection.tsx` | CSS 3D Transforms + GSAP  | Viewport scroll (top 72%)                | Laptop container uses `perspective: 1200px`. The screen lid rotates smoothly from closed (`rotateX(-80deg)`) to upright (`rotateX(0deg)`).                                                    |
| **Floating Bonsai Leaves**   | `SkillsSection.tsx`    | CSS Keyframes             | Continuous loop                          | Six staggered cherry blossom leaf vectors drift horizontally (`-60px` to `+60px`) and rotate through 360 degrees.                                                                             |
| **Inertia Smooth Scrolling** | `SmoothScroll.tsx`     | Lenis Engine              | Wheel / Touch scroll                     | Damped interpolation synchronized with GSAP's ticker. Automatically disabled on blog article pages to protect reading ergonomics.                                                             |
| **Inverted Magnetic Cursor** | `CustomCursor.tsx`     | rAF Loop + CSS Mix Blend  | Mouse movement                           | Follows pointer with spring damping (`0.15` lerp) and inverts colors over typography and images. Expands when hovering clickable targets.                                                     |
| **Scroll Reveal Animations** | `RevealAnimation.tsx`  | GSAP ScrollTrigger        | Viewport entry (top 95%)                 | Elements fade in and slide upward by 30px with smooth `power3.out` easing.                                                                                                                    |

---

## 9. Responsive Design & Breakpoints

Responsive layouts are built using standard Tailwind CSS breakpoints, tested across viewports from 375px mobile screens up to 4K displays:

- **Mobile (`< 640px`)**:
  - Navigation collapses into a full-screen drawer with touch-friendly tap targets.
  - Multi-column grids (such as Services and Projects) stack into a single column.
  - The custom inverted cursor is automatically disabled on touch devices via `@media (pointer: coarse)` to prevent touch lag.
  - The 3D laptop degree viewer resizes proportionally with touch-swipe gesture support.
- **Tablet (`640px - 1024px`, `sm` & `md`)**:
  - Services, project cards, and education timelines adopt two-column layouts.
  - Testimonials display active cards with touch-drag support enabled.
- **Desktop (`>= 1024px`, `lg` & `xl`)**:
  - Full three-column layouts activate across the Hero, Services, and Project directories.
  - Panoramic bonsai skills tree expands horizontally with branch-mapped neon medallions.
  - Canvas-based X-Ray flashlight scope and magnetic cursor effects become active.

---

## 10. Blog System & Dedicated Asset Management

To prevent broken image links and eliminate duplicate assets, blog photography is organized into dedicated individual folders under `frontend/public/images/blogs/`:

```text
frontend/public/images/blogs/
├── blog1/              # Design Unraveled: Behind the Scenes of UI/UX Magic
│   └── blog1.jpg       # Authentic primary design studio case study photo
├── blog2/              # Minimalist Systems: Crafting Timeless Digital Identities
│   └── blog1.jpg       # Authentic minimalist architecture and layout image
├── blog3/              # Color Theory: Psychology Behind High-Contrast Palettes
│   └── blog1.jpg       # Authentic chromatic palette and contrast analysis image
├── blog4/              # Beyond Aesthetics: Crafting Intuitive UX
│   └── blog1.jpg       # Authentic wireframing and sketching case study photo
├── blog7/              # Pixels & Insights: Unveiling the Art of UI/UX
│   └── blog1.jpg       # Authentic development and UI architecture image
├── blog10/             # System Scalability: Architecting Resilient Web Platforms
│   └── blog1.jpg       # Authentic cloud architecture and engineering diagram
└── blog5, blog6, blog8, blog9, blog11, blog12/
                        # Dedicated directories provisioned for future publications
```

### Adding a New Publication

1. Create a dedicated folder: `frontend/public/images/blogs/blog{N}/`.
2. Save your optimized case study image as `blog1.jpg` (recommended: 16:10 aspect ratio, WebP or JPEG under 500KB).
3. Open `frontend/src/data/articles.ts` and add your article record:
   ```typescript
   {
     id: "design-4",
     slug: "your-article-slug",
     articleNumber: "13",
     title: "YOUR ARTICLE TITLE IN ALL CAPS",
     subtitle: "A short, descriptive subtitle summarizing the article.",
     category: "DESIGN", // "DESIGN" | "DEVELOPMENT" | "UI/UX" | "ARCHITECTURE"
     date: "15 NOVEMBER 2024",
     readTime: "8 MIN READ",
     excerpt: "Card summary displayed on the blog feed.",
     image: "/images/blogs/blog13/blog1.jpg",
     categoryIcon: "palette",
     author: {
       name: "Sachin Sharma",
       role: "Lead Full-Stack Engineer & UI Architect",
       avatar: "/images/about/about-avatar.png",
     },
     metrics: [
       { label: "Performance Lift", value: "+45%" },
     ],
     tags: ["Design Systems", "Architecture"],
     gallery: [
       { src: "/images/blogs/blog13/blog1.jpg", title: "Overview", step: "01 / 04" },
     ],
     sections: [
       {
         heading: "01. Architectural Fundamentals",
         paragraphs: ["Detailed technical discussion..."],
       },
     ],
   }
   ```
4. Next.js will automatically create the dynamic route `/blog/your-article-slug` and add it to `sitemap.xml`.

---

## 11. API & Backend Architecture

The backend consists of two complementary communication pipelines:

### 1. Serverless Edge Route (`frontend/src/app/api/contact/route.ts`)

- **Endpoint**: `POST /api/contact`
- **Payload Validation**: Verifies that `name`, `email`, and `message` are present and checks email formatting with a standard regex.
- **Email Dispatch**: Reads `SMTP_USER`, `SMTP_PASS`, and `CONTACT_RECEIVER_EMAIL` from server-side environment variables. Sends an HTML-formatted notification email via Gmail SMTP with the visitor's address set as the `replyTo` header.
- **Microservice Forwarding**: If `BACKEND_API_URL` is configured, it forwards the payload to the FastAPI service with a 1500ms timeout to avoid hanging if the backend is offline.

### 2. FastAPI Microservice (`backend/app/main.py`)

- **Endpoint**: `POST /api/contact`
  - Validates data using Pydantic's `ContactCreate` schema.
  - Trims boundary whitespace from text fields.
  - Commits the message to MySQL via SQLAlchemy and returns HTTP 201 Created.
- **Endpoint**: `GET /api/health`
  - Executes `SELECT 1` against the MySQL database.
  - Returns `{"status": "healthy", "database": "connected"}` if online.

---

## 12. Environment Variables & Security

### Security Rules

1. **Never commit `.env` or `.env.local` to version control**. Both files are strictly ignored in `.gitignore`.
2. **Server-Side Confidentiality**: Credentials like `SMTP_PASS` and `DATABASE_URL` do not use the `NEXT_PUBLIC_` prefix and are never bundled into client-side JavaScript.
3. **App Passwords**: When configuring Gmail SMTP, use a dedicated 16-character Google App Password with 2-Factor Authentication enabled. Never use your main Google account password.

### Frontend Configuration (`frontend/.env.local`)

Create `frontend/.env.local` based on `frontend/.env.local.example`:

```env
# Optional external FastAPI endpoint (leave empty to use internal Next.js route)
NEXT_PUBLIC_API_URL=

# Gmail SMTP address used to dispatch notifications
SMTP_USER=your_email@gmail.com

# 16-character Google App Password (https://myaccount.google.com/apppasswords)
SMTP_PASS=your_16_character_app_password

# Target inbox where inquiries should be delivered
CONTACT_RECEIVER_EMAIL=your_inbox@example.com
```

### Backend Configuration (`backend/.env`)

Create `backend/.env` based on `backend/.env.example`:

```env
# MySQL Database Connection String (PyMySQL driver)
DATABASE_URL=mysql+pymysql://root:your_mysql_password@localhost:3306/portfolio_db

# Allowed CORS Origins (comma-separated)
CORS_ORIGINS=http://localhost:3000,http://127.0.0.1:3000

# Application Flags
APP_NAME=Portfolio Backend API
DEBUG=true
```

---

## 13. Installation & Local Setup

### Prerequisites

- **Node.js**: `v20.x` or higher (`v22.x` recommended)
- **npm**: `v10.x` or higher
- **Python**: `v3.11` or `v3.12` (optional, for FastAPI backend)
- **MySQL**: `v8.0` or higher (optional, for message persistence)

### Step-by-Step Instructions

```bash
# 1. Clone the repository
git clone https://github.com/toughefforts/portfolio.git
cd Portfolio

# 2. Setup Frontend Application
cd frontend
npm install

# 3. Configure Frontend Environment
cp .env.local.example .env.local
# (Open .env.local and add your SMTP credentials)

# 4. (Optional) Setup Backend Microservice
cd ../backend
python -m venv venv

# Windows:
.\venv\Scripts\activate
# macOS/Linux:
# source venv/bin/activate

pip install -r requirements.txt
cp .env.example .env
# (Open .env and set your MySQL database URL)
```

---

## 14. Available Scripts

All scripts are executed from the `frontend/` directory using `npm run <command>`:

| Command         | Description                                                                                    |
| :-------------- | :--------------------------------------------------------------------------------------------- |
| `npm run dev`   | Launches the Next.js development server with Turbopack enabled on `http://localhost:3000`.     |
| `npm run build` | Compiles TypeScript, runs static analysis, and builds the production output for all 14 routes. |
| `npm run start` | Starts the production server hosting the built application.                                    |
| `npm run lint`  | Runs ESLint across all TypeScript and React component files.                                   |

To run the optional Python backend, navigate to `backend/` and start Uvicorn:

```bash
uvicorn app.main:app --reload --port 8000
```

---

## 15. Build & Production Deployment

### Production Build

Running `npm run build` inside `frontend/` compiles the application using Turbopack:

```bash
cd frontend
npm run build
```

The build process compiles TypeScript, verifies route definitions, generates static pages for all 14 routes, and bundles client scripts into `.next/`.

### Deployment Options

- **Vercel / Netlify**: The project is optimized for deployment to Vercel or Netlify. Connect your GitHub repository and add `SMTP_USER`, `SMTP_PASS`, and `CONTACT_RECEIVER_EMAIL` to the provider's environment settings.
- **Self-Hosted Node Server**: Build the project with `npm run build` and run `npm run start` behind a reverse proxy like Nginx with SSL termination.
- **Docker Containerization**: Set `output: 'standalone'` in `next.config.ts` to bundle only the necessary files into a lightweight container image.

---

## 16. Codebase Conventions & Maintenance Guidelines

- **Component Structure**: Keep components modular and self-contained. Complex visual sections should reside in `frontend/src/components/sections/`, with reusable UI atoms in `frontend/src/components/ui/`.
- **Zero Hash Routing**: When linking to landing sections, always use `scrollToCleanSection(id, e)` from `@/lib/navigation`. Do not hardcode `#` anchor tags, as they bypass smooth scrolling and break clean address bar URLs.
- **Image Aspect Ratios**: Always provide explicit `width` and `height` properties alongside `style={{ width: "100%", height: "auto" }}` (or use `fill` with `sizes`) on Next.js `<Image />` elements to eliminate Cumulative Layout Shift (CLS).
- **Asset Verification**: Before committing new media, verify that every image referenced in source code exists under `frontend/public/images/`.

---

## 17. Contributing

1. Fork the repository and create a feature branch:
   ```bash
   git checkout -b feature/my-feature
   ```
2. Make your improvements while following existing formatting and component conventions.
3. Verify that the application builds with zero TypeScript or lint errors:
   ```bash
   cd frontend
   npm run build
   ```
4. Commit your changes using clear commit messages:
   ```bash
   git commit -m "feat(skills): improve keyboard navigation on tech tree nodes"
   ```
5. Push to your branch and open a Pull Request describing your changes and verification steps.

---

## 18. Troubleshooting

- **Preloader Fails to Dismiss**: Check the browser console. If `Preloader.tsx` cannot measure the letter 'I' bounding rectangle during hydration, safe fallback offsets (`deltaX = -75, deltaY = 6`) will trigger after a brief timeout.
- **Contact Form Returns 500 Error**: Verify that `SMTP_USER` and `SMTP_PASS` in `frontend/.env.local` are correct. Make sure you are using a 16-character Google App Password, not your regular Google account password.
- **Smooth Scrolling Stutter**: If smooth scrolling conflicts with other extensions, check if `prefers-reduced-motion` is enabled in your operating system. The application automatically falls back to native scrolling when reduced motion is preferred.
- **FastAPI Database Connection Refused**: Verify that your MySQL server is running on port 3306 and that the credentials in `backend/.env` match your database setup.

---

## 19. Security Policy

- **Reporting Security Issues**: If you discover a security vulnerability or credential leak, please contact Sachin Sharma directly at `officialsachin9910@gmail.com` instead of opening a public issue.
- **Credential Hygiene**: Never commit live API keys, database passwords, or Google App Passwords. Keep sample files restricted to placeholder values.

---

## 20. Maintenance Notes

- **Lenis Article Bypass**: Lenis smooth scrolling is deliberately destroyed on standalone reading pages (`/blog/[id]`) to maintain standard browser reading behavior and preserve smooth momentum on long-form content.
- **Canvas Hit Testing**: The offscreen canvas used for avatar hit testing in `HeroSection.tsx` is kept at a low resolution (`128x171`) to ensure alpha checks run in less than one millisecond per mouse event.

---

## 21. License

No license has been specified for this project. All rights to original text, personal branding, character illustrations, and custom visual assets are reserved by Sachin Sharma. Source code structure and architecture are shared for reference and portfolio demonstration purposes.

