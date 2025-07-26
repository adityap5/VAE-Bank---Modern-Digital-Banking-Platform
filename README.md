# VAE Bank - Modern Digital Banking Platform

A cutting-edge digital banking platform built with **Next.js 14**, featuring advanced animations, dark/light themes, and responsive design.

[🚀 Live Demo](https://vxe-bank-demo.vercel.app) • [📖 Documentation](#project-overview) • [🎨 Design System](#design-system)

---

## 🧭 Project Overview

**VXE Bank** is a modern digital banking platform tailored for the Indian market, combining sleek design with performance, accessibility, and security. It includes UPI integration concepts, multi-language readiness, and adheres to financial UX patterns and accessibility standards.

### ✨ Key Highlights

- 🎨 Advanced UI/UX with smooth transitions and micro-interactions  
- 🌓 Seamless dark/light theme system  
- 📱 Mobile-first responsive layout  
- ⚡ Built with Next.js 14 App Router & Server Components  
- 🔒 Security-focused architecture  
- 🌍 WCAG 2.1 accessibility compliance  

---

## 🛠️ Tech Stack

### ⚙️ Frontend Framework

- **Next.js 14** – App Router, Server Components
- **React 18** – Suspense & concurrent features
- **TypeScript** – Type-safe codebase

### 💅 Styling & Animation

- **Tailwind CSS** – Utility-first styling  
- **Framer Motion** – High-performance animations  
- **CSS Variables** – Theming support  
- **Responsive Design** – Mobile-first approach  

### 🧩 UI Components

- **Radix UI** – Accessible base components  
- **Shadcn/ui** – Pre-built UI library  
- **Lucide React** – Icon system  
- **Custom Components** – Modular & reusable  

### 🧑‍💻 Dev Experience

- **ESLint**, **Prettier**, **TypeScript**, **Git Hooks**

---

## 💡 Features

### 🏦 Core Pages

- **Homepage** – Hero, stats, and features  
- **Personal & Business Banking** – Plan showcase  
- **Wealth Management** – Portfolio and investment  

### 💳 Financial Products

- Credit Cards, Loans, Investments, Insurance  

### 🎨 Design System

- Dark/light theme with transitions  
- Reusable component library  
- Animated page transitions & micro-interactions  
- Responsive typography and layout  

### 📱 UX Focused

- Page transitions with loaders  
- Hover effects and interaction feedback  
- Skeleton loading states  
- Graceful error handling  

---

## 🧱 Project Structure

├── app/ # App Router structure
│ ├── (pages)/ # Route groups
│ ├── globals.css # Global styles
│ └── layout.tsx # Root layout
├── components/ # Reusable components
│ ├── ui/ # Shadcn UI-based components
│ ├── theme-provider.tsx
│ └── navigation.tsx
├── hooks/ # Custom hooks
├── lib/ # Utilities and config
└── public/ # Static assets


---

## 🎨 Design System

### 🎯 Color Palette

- **Primary** – Blue gradients for CTAs  
- **Semantic** – Success, warning, error colors  
- **Theme-Aware** – Auto dark/light adaptation  

### 📝 Typography

- **Font**: Inter  
- **Responsive scale** for readability  
- **Clear hierarchy** for structure  

### 🌀 Animation Principles

- **Purposeful, performant, accessible**  
- GPU-accelerated, respects reduced motion  

---

## 🚀 Getting Started

### 📋 Prerequisites

- Node.js 18+
- npm / yarn / pnpm

### 🔧 Installation

```bash
git clone https://github.com/yourusername/vxe-bank.git
cd vxe-bank
npm install
npm run dev
```
### 📜 Available Scripts

```bash
npm run dev         # Development server
npm run build       # Production build
npm run start       # Run production server
npm run lint        # Lint codebase
npm run type-check  # TypeScript checks
```

📱 Responsive Design
Mobile: 320px–768px

Tablet: 768px–1024px

Desktop: 1024px+

Mobile-first design, optimized navigation and touch support

### ♿ Accessibility
WCAG 2.1 Compliant

Full keyboard navigation

Screen reader support (ARIA + semantic HTML)

Color contrast and focus indicators

Respects reduced motion settings

### ⚡ Performance Optimizations
#### Core Web Vitals
LCP – Lazy-loaded and optimized media

FID – Minimal JS and code splitting

CLS – Stable layout with pre-defined sizes

#### Optimizations
Image optimization with next/image

Route-based code splitting

Aggressive caching

Bundle size monitoring


### 🤝 Contributing
We welcome contributions!
Please see the CONTRIBUTING.md for guidelines.

### 🔄 Workflow
Fork the repo

Create a feature branch

Code your changes

Commit & push

Open a pull request

### 📄 License
Licensed under the MIT License.