# 🚗 Lave-Auto VIP Club - Premium Car Washing Experience

A luxurious, multi-page car washing website built with React and modern web technologies. Features a stunning black and gold color scheme inspired by premium automotive brands like Genesis and Rolls Royce.

## ✨ Features

### 🎬 **Multi-Page Architecture**
- **Home Page** - Intro video + hero section + overview cards + featured gallery
- **Services Page** - Detailed service offerings with process breakdown
- **Portfolio Page** - Image gallery with category filters and lightbox
- **Careers Page** - Job listings with real images and detailed requirements
- **Contact Page** - Professional contact form with business information

### 🌟 **Premium Features**
- **🎬 Intro Video** - Auto-playing intro video that plays on first visit (skippable after 3 seconds)
- **🌐 Bilingual Support** - Full French/English translation with language toggle (French default)
- **🎥 Video Background** - Immersive full-screen video background on hero section
- **✨ Reveal Animations** - Smooth scroll-triggered animations using Framer Motion
- **🎯 React Router** - Proper multi-page navigation with separate URLs
- **📱 Responsive Design** - Fully responsive across all devices
- **🔥 Smooth Transitions** - Page transitions with automatic scroll-to-top

### 🎨 **Design Elements**
- Beautiful glassmorphism card effects
- Sequential fade-in animations on gallery items
- Hover effects with image zoom and overlays
- Animated backgrounds with rotating gradients
- Custom scrollbar styling
- Premium typography and spacing

## 🎨 Design

- **Color Scheme**: Deep Black (#000000) and Luxurious Gold (#D4AF37)
- **Typography**: 
  - Playfair Display (Headings) - Elegant serif font
  - Montserrat (Body) - Clean, modern sans-serif
- **Aesthetic**: Premium, luxurious, high-end automotive brand feel

## 🛠️ Technologies

- **React 18.2** - Modern JavaScript library for UI
- **React Router Dom 7** - Client-side routing for multi-page navigation
- **Framer Motion 10.16** - Production-ready animation library
- **React Icons 4.11** - Popular icon library
- **CSS3** - Advanced styling with gradients, transitions, animations
- **Context API** - Language state management

## 📦 Installation & Setup

### **Prerequisites**
- Node.js (v14 or higher recommended)
- npm or yarn package manager
- Git

### **Quick Start**

1. **Clone the repository**
   ```bash
   git clone https://github.com/Seblxx/VIPCLUBAUTO.git
   cd VIPCLUBAUTO
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install serve globally (for production preview)**
   ```bash
   npm install -g serve
   ```

### **Development Mode**

Run the development server with hot module reloading:

```bash
npm start
```

The site will open at `http://localhost:3001`

**Note:** Development mode may show HMR warnings. For best results, use production mode.

### **Production Mode (Recommended)**

Build and serve the optimized production version:

```bash
npm run build
npm run serve
```

The site will be available at `http://localhost:3000`

This is the **recommended way** to view the site as it:
- Avoids HMR (Hot Module Replacement) issues
- Shows optimized performance
- Properly handles React Router routing
- Displays the site exactly as deployed

## 🌐 Site Structure

```
localhost:3000/           - Home page (Intro + Hero + Overview)
localhost:3000/services   - Services page with detailed offerings
localhost:3000/portfolio  - Portfolio gallery with filters
localhost:3000/careers    - Job opportunities with images
localhost:3000/contact    - Contact form and information
```

## 📁 Project Structure

```
VIPCLUBAUTO/
├── public/
│   ├── index.html
│   ├── INTRO VIDEO.mp4
│   ├── laveAutoVipClub.mp4
│   ├── logo-lave-auto-vip-club-scaled.png
│   ├── SHOWCASE II.png - VI.png, TIRES.png
│   ├── POSTE DISPONIBLE I.png, II.png
│   └── MISC III.png, IV.png, TIRES.png
├── src/
│   ├── pages/
│   │   ├── HomePage.js/css
│   │   ├── ServicesPage.js/css
│   │   ├── PortfolioPage.js/css
│   │   ├── CareersPage.js/css
│   │   └── ContactPage.js/css
│   ├── components/
│   │   ├── IntroVideo.js/css
│   │   ├── Hero.js/css
│   │   ├── Services.js/css
│   │   ├── Showcase.js/css
│   │   ├── Jobs.js/css
│   │   ├── Contact.js/css
│   │   └── Reveal.js
│   ├── App.js
│   ├── App.css
│   ├── translations.js
│   └── index.js
├── serve.json (SPA routing config)
├── .env (HMR configuration)
└── package.json
```

## 🎯 Key Features Explained

### **Intro Video**
- Plays automatically on first visit
- Can be skipped after 3 seconds
- Smooth transition to main site

### **Navigation**
- Sticky navbar with scroll effects
- Active page highlighting
- Language toggle (FR/EN) persists across pages
- Logo links back to home

### **Portfolio Page**
- Filter by category: All, Détaillage, Extérieur, Intérieur, Céramique, Roues
- Lightbox modal for full-size viewing
- Statistics section with impressive numbers

### **Careers Page**
- 3 realistic job postings with images
- Detailed salary ranges and requirements
- Company culture section
- Benefits grid with 6 key benefits

### **Bilingual System**
- Complete French/English translations
- Toggle button in navigation
- French set as default language
- State persists during session

## 🐛 Troubleshooting

### **Port 3000 already in use**
If you see port 3000 in use:
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Then restart with:
npm run serve
```

### **HMR Errors in Development**
The `.env` file disables Fast Refresh to prevent HMR issues. For best experience, use production mode:
```bash
npm run build
npm run serve
```

### **Routing doesn't work / 404 on refresh**
The `serve.json` file configures SPA routing. It's automatically copied to the build folder during `npm run build`. If issues persist:
```bash
copy serve.json build\serve.json
```

### **Images not loading**
All images should be in the `public/` folder. The build process copies them to `build/`. If images are missing, ensure they're in `public/` before building.

## 🚀 Deployment

The site can be deployed to any static hosting service:

- **Vercel** - Recommended for React apps
- **Netlify** - Great for static sites
- **GitHub Pages** - Free hosting option
- **Firebase Hosting** - Google's hosting solution

The `serve.json` file ensures proper routing on all platforms.

## 📱 Social Media

- **Facebook**: [VIP Club Auto Facebook Group](https://www.facebook.com/groups/796253056371700)
- **Instagram**: [@laveautov.i.p.](https://www.instagram.com/laveautov.i.p./)
- **TikTok**: [@laveauto.v.i.p.cl](https://www.tiktok.com/@laveauto.v.i.p.cl)

## 📄 License

This project is private and proprietary to Lave-Auto VIP Club.

## 👥 Contributors

- **Seblxx** - Lead Developer

---

**Built with ❤️ for VIP Club Auto - Where Excellence Meets Automotive Care**

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🚀 Build for Production

```bash
npm run build
```

This will create an optimized production build in the `build` folder.

## 📁 Project Structure

```
VIPCLUBAUTO/
├── public/
│   ├── index.html
│   ├── INTRO VIDEO.mp4 (intro video)
│   ├── laveAutoVipClub.mp4 (hero background)
│   ├── logo-lave-auto-vip-club-scaled.png
│   └── [12 showcase images]
├── src/
│   ├── components/
│   │   ├── IntroVideo.js & IntroVideo.css
│   │   ├── Hero.js & Hero.css
│   │   ├── Services.js & Services.css
│   │   ├── Showcase.js & Showcase.css
│   │   ├── Jobs.js & Jobs.css
│   │   ├── Contact.js & Contact.css
│   │   └── Reveal.js
│   ├── translations.js (FR/EN translations)
│   ├── App.js (with Language Context)
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## 🎯 Key Sections

### 1. Intro Video
- Auto-plays on site load
- Full-screen immersive experience
- Skippable after 3 seconds
- Smooth fade transition to main site

### 2. Hero Section
- Full-screen video background
- Animated logo and text
- Bilingual CTA buttons
- Scroll indicator

### 3. Services
- 6 premium service offerings
- Interactive cards with hover effects
- Pricing information
- Fully translated

### 4. Portfolio/Showcase
- Grid gallery with 12 work examples
- Lightbox image viewer
- Smooth reveal animations

### 5. Careers/Jobs
- 3 current job openings
- Detailed job descriptions
- Benefits highlights
- Application CTAs
- Fully bilingual

### 6. Contact
- Contact information
- Business hours
- Social media links
- Professional contact form
- Fully translated

## 🌐 Language Support

The website supports both French and English with a toggle button in the navigation:
- **Default**: French (FR) - Primary language for Quebec clientele
- **Secondary**: English (EN) - For international visitors
- Language toggle button in the top navigation bar
- All content including form validation messages are translated

### Adding/Editing Translations

Edit the `src/translations.js` file to modify or add translations:
```javascript
export const translations = {
  fr: { /* French translations */ },
  en: { /* English translations */ }
};
```

## 🎨 Customization

### Colors
Edit the color scheme in the CSS files:
- Primary Gold: `#D4AF37`
- Accent Gold: `#F4D03F`
- Background Black: `#000000`
- Dark Gray: `#0a0a0a`, `#1a1a1a`

### Content
Update text content in the translations file:
- `src/translations.js` - All text content for both languages

### Media
Replace files in the `public/` folder:
- Intro video: `INTRO VIDEO.mp4`
- Hero background: `laveAutoVipClub.mp4`
- Logo: `logo-lave-auto-vip-club-scaled.png`
- Showcase images: Various PNG files (12 total)

## 📱 Responsive Breakpoints

- Desktop: 1400px+
- Tablet: 768px - 1399px
- Mobile: < 768px

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🐛 Known Issues

### HMR Warning
You may see a Hot Module Replacement (HMR) warning in the console. This is a non-critical webpack dev server message and does not affect functionality. It can be safely ignored during development.

## 📄 License

© 2025 Lave-Auto VIP Club. All rights reserved.

## 🤝 Contributing

This is a client project. For modifications or improvements, please contact the repository owner.

## 📧 Contact

For questions or support:
- Email: info@laveautovipqc.com
- Website: https://laveautovipqc.com/

---

**Built with ❤️ and attention to detail for the Quebec market**