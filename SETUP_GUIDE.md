# 🚀 Quick Setup Guide for New Collaborators

Welcome to the VIP Club Auto project! Follow these steps to get the website running on your machine.

## ✅ Prerequisites

Before you start, make sure you have these installed:
- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **Git** - [Download here](https://git-scm.com/)
- **npm** (comes with Node.js)

## 📥 Step 1: Clone the Repository

Open your terminal/PowerShell and run:

```bash
git clone https://github.com/Seblxx/VIPCLUBAUTO.git
cd VIPCLUBAUTO
```

## 📦 Step 2: Install Dependencies

Install all required packages:

```bash
npm install
```

This will install React, React Router, Framer Motion, and all other dependencies.

## 🌐 Step 3: Install Serve (Global)

Install the `serve` package globally to run the production server:

```bash
npm install -g serve
```

**Note for Windows users:** You might need to run PowerShell as Administrator for global installs.

## 🎯 Step 4: Build & Run

### Option A: Production Mode (Recommended)

This is the **best way** to view the site:

```bash
npm run build
npm run serve
```

The website will open at **http://localhost:3000**

### Option B: Development Mode

For development with hot reload:

```bash
npm start
```

**Note:** Development mode may show HMR warnings due to react-scripts. Use production mode for the best experience.

## 🌟 How to Navigate the Site

The website has 5 pages:

1. **Home** - `http://localhost:3000/`
2. **Services** - `http://localhost:3000/services`
3. **Portfolio** - `http://localhost:3000/portfolio`
4. **Careers** - `http://localhost:3000/careers`
5. **Contact** - `http://localhost:3000/contact`

Click the navigation links at the top to switch between pages. Each page loads completely new content (not a scrolling single page).

## 🐛 Common Issues & Solutions

### Issue: "Port 3000 is already in use"

**Solution (Windows):**
```bash
netstat -ano | findstr :3000
taskkill /PID <PID_NUMBER> /F
```

Then restart with `npm run serve`

**Solution (Mac/Linux):**
```bash
lsof -ti:3000 | xargs kill -9
```

### Issue: "serve: command not found"

**Solution:** Install serve globally again:
```bash
npm install -g serve
```

If still not working, use npx:
```bash
npx serve -s build -l 3000
```

### Issue: Pages show 404 on refresh

**Solution:** This shouldn't happen because we have `serve.json` configured. If it does:
1. Make sure you built the project: `npm run build`
2. Check that `serve.json` exists in the `build` folder
3. Restart the serve command

### Issue: Images not loading

**Solution:** 
1. Make sure all images are in the `public/` folder
2. Rebuild the project: `npm run build`
3. Restart the server: `npm run serve`

## 📂 Project Files Overview

- **src/pages/** - Individual page components (Home, Services, Portfolio, Careers, Contact)
- **src/components/** - Reusable components (Hero, Services, Contact, etc.)
- **src/App.js** - Main app with routing configuration
- **public/** - Static assets (images, videos, logo)
- **serve.json** - SPA routing configuration (automatically copied to build/)
- **.env** - Environment configuration for HMR settings

## 🎨 Making Changes

1. Make your changes in the `src/` folder
2. For new images, add them to `public/`
3. Test in development: `npm start`
4. Build for production: `npm run build`
5. Test production build: `npm run serve`
6. Commit and push:
   ```bash
   git add .
   git commit -m "Your descriptive message"
   git push origin main
   ```

## 🌐 Bilingual Feature

The site supports French (default) and English. Click the **FR/EN** toggle button in the navigation to switch languages. All translations are in `src/translations.js`.

## 📞 Need Help?

If you run into any issues:
1. Check this guide first
2. Read the main [README.md](README.md) for more details
3. Contact **@Seblxx** on GitHub

---

**Happy coding! 🚗✨**
