# Mohamed Osama - Naqla Sehia Frontend Task

## Project Overview
Responsive product listing page built with React and Redux Toolkit.  
Fetches products from [Fake Store API](https://fakestoreapi.com/), supports Arabic & English languages with `react-i18next`, and provides light/dark theme toggle.  
Styled with Tailwind CSS for full responsiveness on desktop & mobile.  

## Features
- API integration using Redux Toolkit's `createAsyncThunk`
- State management with Redux Toolkit slices
- Internationalization (English & Arabic) via `react-i18next`
- Light and dark mode theme toggle with icon buttons
- Reusable `ProductCard` component showing product image, title, category & price
- Responsive grid layout for products
- Error & loading state handling
- Animations using Tailwind CSS (e.g. fade-in, bounce effects)
- Icons from `react-icons` (FontAwesome used for theme toggle icons)
- Clean, modular folder structure and well-commented code

## Demo
*(Optional: Add live demo link here)*

## Installation & Setup

```bash
git clone https://github.com/mohamedosama-naqlasehia.git
cd mohamedosama-naqlasehia
npm install
npm start
