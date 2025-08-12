# Mohamed Osama - Naqla Sehia Frontend Task

## Project Overview
Responsive product listing page built with React and Redux Toolkit.  
Fetches products from [Fake Store API](https://fakestoreapi.com/), supports Arabic & English languages with `react-i18next`, and provides light/dark theme toggle.  
Styled with Tailwind CSS for full responsiveness on desktop & mobile, with smooth animations for a modern UI/UX experience.  

## Features
- **API Integration** using Redux Toolkit's `createAsyncThunk`
- **State Management** with Redux Toolkit slices
- **Internationalization** (English & Arabic) via `react-i18next`
- **Light/Dark Theme Toggle** with icon buttons
- **Reusable `ProductCard` Component** showing product image, title, category & price
- **Responsive Grid Layout** optimized for desktop, tablet & mobile
- **Error & Loading State Handling**
- **Animations & Transitions** using Tailwind CSS:
  - Smooth fade-in for product cards
  - Hover scale and shadow effects
  - Theme toggle animations
- **Automated Testing**:
  - **Unit & Integration Tests** using **Jest**
  - **E2E Tests** using **Puppeteer**
  - Coverage for core features: product fetching, theme toggling, and language switching
- **Icons** from `react-icons` (FontAwesome used for theme toggle icons)
- **Clean, Modular Folder Structure** and well-commented code

## Demo
[Live Demo](https://task-naqla-sehia.vercel.app/),

## Installation & Setup
```bash
git clone https://github.com/mohamedosama-naqlasehia.git
cd mohamedosama-naqlasehia
npm install
npm start
