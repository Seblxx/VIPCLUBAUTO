# 🚗 Lave-Auto VIP Club - Premium Car Washing Experience

A luxurious, immersive car washing website built with React and modern web technologies. Features a stunning black and gold color scheme inspired by premium automotive brands like Genesis and Rolls Royce.

## ✨ Features

- **🎬 Intro Video** - Captivating intro video that plays before the main site (can be skipped after 3 seconds)
- **🌐 Bilingual Support** - Full French/English translation with language toggle (French default)
- **Video Background Hero Section** - Immersive full-screen video background with elegant overlay
- **Reveal Animations** - Smooth scroll-triggered animations using Framer Motion
- **Premium Services Showcase** - Detailed service offerings with hover effects
- **Portfolio Gallery** - Beautiful image gallery with 12 showcase images and lightbox functionality
- **Careers Section** - Job listings with detailed descriptions
- **Contact Form** - Professional contact section with social media links
- **Responsive Design** - Fully responsive across all devices
- **Smooth Navigation** - Sticky navigation bar with scroll effects

## 🎨 Design

- **Color Scheme**: Deep Black (#000000) and Luxurious Gold (#D4AF37)
- **Typography**: 
  - Playfair Display (Headings) - Elegant serif font
  - Montserrat (Body) - Clean, modern sans-serif
- **Aesthetic**: Premium, luxurious, high-end automotive brand feel

## 🛠️ Technologies

- **React 18.2** - Modern JavaScript library for building user interfaces
- **Framer Motion** - Production-ready animation library
- **React Icons** - Popular icon library
- **CSS3** - Advanced styling with gradients, transitions, and animations
- **Context API** - For language state management

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Seblxx/VIPCLUBAUTO.git
   cd VIPCLUBAUTO
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

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