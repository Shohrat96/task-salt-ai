# Spice AI Platform

A modern, interactive landing page for a decentralized AI platform that tracks, ranks, and rewards the best open-source LLM models. Built with React, TypeScript, and modern web technologies.

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-6.4.1-646CFF?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.18-38B2AC?logo=tailwind-css)

## 🚀 Features

- **Interactive Hero Section** with animated statistics reveal
- **LLM Leaderboard** displaying top-performing AI models with detailed metrics
- **Parallax Scrolling Effects** for enhanced visual experience
- **Rocket Animation** triggered on scroll intersection
- **Responsive Design** optimized for all device sizes
- **Modern UI Components** with gradient text effects and smooth animations
- **Project Integration Showcase** featuring ecosystem partners
- **Smooth Transitions** and micro-interactions throughout

## 🛠️ Tech Stack

- **Framework**: React 19.2.0
- **Language**: TypeScript 5.9.3
- **Build Tool**: Vite 6.4.1
- **Styling**: 
  - Tailwind CSS 4.1.18
  - SASS/SCSS
- **Icons**: React Icons 5.5.0

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd spice-ai-platform_v1
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will open at `http://localhost:3000`

## 🏗️ Project Structure

```
src/
├── components/
│   ├── animations/          # Animation components (RocketAnimation)
│   ├── sections/             # Page sections
│   │   ├── HeaderSection/   # Hero section with stats
│   │   ├── HowItWorksSection/
│   │   ├── LeaderboardSection/
│   │   ├── IntegratedProjectsSection/
│   │   └── FooterSection/
│   └── ui-kit/              # Reusable UI components
│       ├── Button.tsx
│       └── Divider.tsx
├── hooks/                   # Custom React hooks
│   └── useParallax.tsx
├── styles/                  # Global styles and SCSS modules
│   ├── variables.scss      # SCSS variables
│   ├── main.scss           # Main stylesheet
│   ├── button.scss
│   ├── table.scss
│   └── ...
├── App.tsx                  # Main application component
└── main.tsx                # Application entry point
```

## 🎨 Key Features Explained

### Interactive Hero Section
- Click "How it works" or "Buy Salt AI" to reveal statistics
- Smooth header animation that moves upward
- Dynamic gradient text that changes on interaction
- Statistics grid with fade-in animation

### Leaderboard Section
- Displays top LLM models with performance metrics
- Includes benchmarks: ARC, HeimSwing, MMLU, TruthfulQA, Winegrande, GSMBK
- Trend indicators (up/down/same) for each model
- Rocket animation triggered when section comes into view

### Parallax Effects
- Custom `useParallax` hook for scroll-based animations
- Background image parallax effect
- Smooth opacity transitions

### Responsive Design
- Mobile-first approach
- Tablet optimizations
- Desktop enhancements with larger typography and layouts

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Styling Architecture

The project uses a combination of:
- **Tailwind CSS** for utility-first styling
- **SCSS modules** for component-specific styles
- **CSS variables** for theming and consistency
- **Gradient text effects** for visual appeal

### SCSS Variables
Located in `src/styles/variables.scss`, includes:
- Color palette (primary, secondary, text, backgrounds)
- Spacing scale
- Border radius values
- Typography settings

## 🔧 Configuration

### Path Aliases
The project uses path aliases for cleaner imports:
- `@components` → `/src/components`
- `@styles` → `/src/styles`
- `@assets` → `/src/assets`

### Vite Configuration
- Port: 3000
- Auto-open browser on dev server start
- React plugin with Fast Refresh
- Tailwind CSS integration

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 👥 Authors

- Development Team

## 🙏 Acknowledgments

- Built with modern React best practices
- Inspired by modern web design trends
- Uses Eleuther AI framework for LLM evaluation metrics

---

**Note**: This is a landing page for a decentralized AI platform. The leaderboard data is currently static and should be connected to a backend API in production.
