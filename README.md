# Keith Paul Nkwanda - Portfolio

A modern, responsive portfolio website built with React Router v7, TypeScript, and Tailwind CSS. Showcasing professional web development skills with a focus on performance, accessibility, and user experience.

🌐 **Live Site**: [Portfolio Website](https://keithpaul-portfolio.netlify.app)

## 🚀 Features

### Core Functionality
- 🎯 **Professional Navigation** - Desktop navbar with mobile hamburger menu
- 📱 **Responsive Design** - Mobile-first approach with touch-friendly interactions
- ⚡ **Performance Optimized** - Fast loading with streamlined component architecture
- 🔄 **Smooth Page Transitions** - Loading animations and fade-in effects
- ⬆️ **Scroll-to-Top Button** - With circular progress indicator
- 📧 **Working Contact Form** - EmailJS integration for real message delivery

### Technical Features
- 🏗️ **React Router v7** - Modern routing with nested routes
- 🎨 **Tailwind CSS v4** - Utility-first styling with custom animations
- 📝 **TypeScript** - Type-safe development
- 🔧 **Vite** - Fast development and optimized builds
- 🐳 **Docker Ready** - Containerized deployment support

### UI/UX Enhancements
- ✨ **Glassmorphism Design** - Modern backdrop blur effects
- 🎭 **Gradient Animations** - Professional color transitions
- 📱 **Mobile Hamburger Menu** - Slide-out navigation with rich menu items
- 🔍 **Project Search & Filter** - Advanced filtering with responsive design
- 🎪 **Loading System** - Context-based loading states with overlays

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/keithpaul98/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── routes/              # Route components
│   │   ├── home.tsx         # Home page with hero section
│   │   ├── projects/        # Projects section with nested routing
│   │   │   ├── index.tsx    # Project listing with search/filter
│   │   │   └── $projectId.tsx # Individual project details
│   │   └── contact.tsx      # Contact form with EmailJS
│   ├── data/
│   │   └── projects.ts      # Project data and interfaces
│   ├── styles/
│   │   └── animations.css   # Custom CSS animations
│   ├── app.css             # Global styles
│   └── root.tsx            # Root layout with navigation
├── public/
│   └── images/             # Static assets and project images
├── tailwind.config.ts      # Tailwind configuration
├── vite.config.ts         # Vite configuration
└── react-router.config.ts # React Router configuration
```

## 🎨 Design System

### Color Palette
- **Primary Gradients**: Blue → Purple → Cyan
- **Background**: Gray-900 base with gradient overlays
- **Text**: White primary, Gray-300/400 secondary
- **Accents**: Blue-400, Purple-400, Cyan-400

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Gradient text effects
- **Body**: Clean, readable typography

### Components
- **Cards**: Glassmorphism with backdrop blur
- **Buttons**: Gradient backgrounds with hover animations
- **Navigation**: Active states with gradient indicators
- **Forms**: Modern input styling with focus states

## 📱 Mobile Optimization

### Navigation
- **Hamburger Menu**: Animated icon with slide-out navigation
- **Touch Targets**: Minimum 44px for accessibility
- **Backdrop**: Blur overlay with click-to-close

### Content
- **Responsive Grid**: Adaptive layouts for all screen sizes
- **Search/Filter**: Optimized mobile interface
- **Project Cards**: Touch-friendly with hover adaptations

## 🚀 Building for Production

Create a production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 🌐 Deployment

### Netlify (Current Deployment)
The portfolio is deployed on Netlify with the following configuration:

1. **Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `build/client`

2. **SPA Configuration**:
   - `react-router.config.ts` configured with `ssr: false`
   - Generates proper `index.html` for static hosting

3. **Contact Form**:
   - EmailJS integration for message delivery
   - Environment variables configured in Netlify dashboard

### Alternative Deployment Options

#### Docker Deployment
```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

#### Other Platforms
- **Vercel**: Zero-config React deployment
- **Railway**: Full-stack hosting with database support
- **Digital Ocean**: App Platform deployment
- **AWS**: S3 + CloudFront for static hosting

## 🔧 Configuration

### Environment Variables
```env
# EmailJS Configuration (for contact form)
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### React Router Configuration
```typescript
// react-router.config.ts
export default {
  ssr: false, // SPA mode for static hosting
  // Additional configuration...
}
```

## 📊 Performance Features

### Optimizations Applied
- **Removed Theme System**: Eliminated complex dark/light mode for faster loading
- **Streamlined Providers**: Single context provider instead of nested ones
- **Optimized Bundle**: Reduced JavaScript payload
- **Efficient Animations**: CSS-based transitions over JavaScript
- **Image Optimization**: Proper sizing and lazy loading

### Loading Performance
- **Fast Initial Load**: No localStorage operations on startup
- **Smooth Transitions**: Page-to-page navigation feedback
- **Progress Indicators**: Visual feedback for user actions

## 🎯 Key Sections

### Home Page
- **Hero Section**: Professional introduction with gradient text
- **Skills Showcase**: Interactive skill badges
- **Call-to-Action**: Direct links to projects and contact

### Projects Section
- **Project Grid**: Responsive card layout with hover effects
- **Search & Filter**: Technology-based filtering system
- **Project Details**: Individual project pages with full information

### Contact Page
- **Working Form**: Real email delivery via EmailJS
- **Professional Layout**: Clean, accessible form design
- **Social Links**: Professional networking connections

## 🤝 Contributing

This is a personal portfolio project. For suggestions or feedback, please reach out through the contact form or social media links.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 About

Built by **Keith Paul Nkwanda** - Full-Stack Developer

- 🌐 Portfolio: [keithpaul-portfolio.netlify.app](https://keithpaul-portfolio.netlify.app)
- 📧 Email: nkeithpaul@gmail.com
- 💼 LinkedIn: [Keith Paul Nkwanda](https://linkedin.com/in/keithpaul)
- 🐱 GitHub: [@keithpaul98](https://github.com/keithpaul98)

---

Built with ❤️ using React Router v7, TypeScript, and Tailwind CSS.
