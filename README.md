# Sachin Sharma — Full-Stack Developer Portfolio

A production-grade, highly responsive developer portfolio built with modern web technologies, sleek animations, and a decoupled Python FastAPI backend with MySQL database integration.

---

## 🚀 Tech Stack

### Frontend
- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router, React 19, TypeScript)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [GSAP](https://greensock.com/gsap/) + ScrollTrigger, [Lenis](https://lenis.darkroom.engineering/) Smooth Scroll
- **Icons**: [Lucide React](https://lucide.dev/) & Custom SVG Brand Icons
- **Fonts**: Next/Font (`Inter` & `Playfair Display`)

### Backend
- **Framework**: [FastAPI](https://fastapi.tiangolo.com/) (Python 3.12+)
- **ORM**: [SQLAlchemy 2.0](https://www.sqlalchemy.org/)
- **Database**: MySQL / MariaDB (via `pymysql`)
- **Validation**: [Pydantic v2](https://docs.pydantic.dev/) + `pydantic-settings`
- **Server**: [Uvicorn](https://www.uvicorn.org/)

---

## 📂 Project Architecture

```
Portfolio/
├── frontend/                     # Next.js Frontend Application
│   ├── public/images/            # High-resolution optimized assets
│   └── src/
│       ├── app/                  # App router (layout, page, styles)
│       ├── components/
│       │   ├── animations/       # SmoothScroll, RevealAnimation, CounterAnimation
│       │   ├── layout/           # Header, Footer
│       │   ├── sections/         # Hero, Services, Experience, About, Projects, Skills, Testimonials, Blog, CTA, Contact
│       │   └── ui/               # BrandIcons, reusable primitives
│       ├── data/                 # Static content datasets
│       ├── lib/                  # API client & helper utilities
│       └── types/                # TypeScript type definitions
│
├── backend/                      # FastAPI Backend Service
│   ├── app/
│   │   ├── api/                  # Contact and health endpoints
│   │   ├── core/                 # Config & database connection
│   │   ├── models/               # SQLAlchemy models
│   │   ├── schemas/              # Pydantic schemas
│   │   └── services/             # Contact processing service
│   ├── .env                      # Environment configuration
│   └── requirements.txt          # Python dependencies
│
└── README.md
```

---

## ⚡ Quick Start

### 1. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Activate virtual environment
.\venv\Scripts\activate   # On Windows
# source venv/bin/activate # On macOS/Linux

# Install dependencies (if not already installed)
pip install -r requirements.txt

# Start FastAPI server
uvicorn app.main:app --reload --port 8000
```
- API Docs: `http://localhost:8000/api/docs`
- Health Check: `http://localhost:8000/api/health`

### 2. Frontend Setup

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies (if needed)
npm install

# Start Next.js development server
npm run dev
```
- Frontend: `http://localhost:3000`

---

## ✨ Key Features

- **Pixel-Perfect Aesthetics**: Faithfully matches design guidelines with soft emerald accents, clean white cards, subtle borders, and modern typography.
- **Micro-Interactions & Motion**: GSAP ScrollTrigger reveals, dynamic counter statistics, and buttery-smooth Lenis scrolling with reduced-motion support.
- **Fully Responsive**: Flawless experience across Mobile (375px+), Tablet, Laptop, and 4K Displays.
- **Live Contact Form**: Connected to FastAPI + MySQL database with instant user feedback and graceful offline fallback.
- **SEO & Social Optimization**: Rich OpenGraph metadata, semantic HTML5 structure, and high accessibility ratings.
