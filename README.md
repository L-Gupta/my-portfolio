# Lakshya Gupta - Portfolio Website

A modern, sophisticated portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Editorial aesthetic with bold typography and smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Interactive Journey Section**: Domain-based learning progression with animated ribbons
- **Tabbed About Section**: Skills, Education, and Certificates organized in tabs
- **Contact Form**: Styled contact form with validation (backend integration needed)
- **TypeScript**: Full TypeScript support for type safety
- **Next.js 14**: Built with the latest Next.js App Router

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd lakshya-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
lakshya-portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles and animations
│   │   ├── layout.tsx            # Root layout with fonts
│   │   └── page.tsx              # Main page component
│   └── components/
│       ├── Navigation.tsx        # Fixed navigation bar
│       ├── Hero.tsx              # Hero/landing section
│       ├── Highlight.tsx         # Philosophy/quote banner
│       ├── About.tsx             # About section with tabs
│       ├── Journey.tsx           # Interactive journey ribbons
│       ├── Contact.tsx           # Contact form
│       └── Footer.tsx            # Footer component
├── public/                       # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.mjs
└── README.md
```

## Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.tsx`):
   - Update the headline text
   - Add your resume link
   - Update LinkedIn URL

2. **About Section** (`src/components/About.tsx`):
   - Update the biography text
   - Modify skills, education, and certificates
   - Add your GPA and coursework

3. **Journey Section** (`src/components/Journey.tsx`):
   - Update project details for each domain
   - Add or remove domains
   - Customize milestones and tech stacks

4. **Contact Section** (`src/components/Contact.tsx`):
   - Update social media links
   - Add your email address
   - Integrate with a backend service (e.g., Formspree, EmailJS)

### Add Images

Replace the placeholder divs in the following components:
- `src/components/Hero.tsx` - Hero image
- `src/components/About.tsx` - About section image

Add images to the `public/` folder and import them:
```tsx
import Image from 'next/image';

<Image
  src="/your-photo.jpg"
  alt="Your Name"
  fill
  className="object-cover"
/>
```

### Update Colors

Modify the color variables in `src/app/globals.css`:
```css
:root {
  --color-bg: #faf9f6;
  --color-text: #1a1a1a;
  --color-accent: #c84b31;
  --color-secondary: #2d4263;
  --color-muted: #6b7280;
  --color-border: #e5e5e5;
}
```

## Deployment

### Deploy to Vercel

The easiest way to deploy this Next.js app is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Click "Deploy"

Your site will be live at `https://your-project-name.vercel.app`

### Build for Production

```bash
npm run build
npm start
```

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Google Fonts** - Cormorant Garamond & Work Sans
- **CSS Animations** - Custom keyframe animations

## TODO

- [ ] Add real images
- [ ] Connect contact form to backend
- [ ] Add actual resume PDF
- [ ] Update all placeholder content
- [ ] Add meta tags for SEO
- [ ] Implement analytics (optional)
- [ ] Add blog section (optional)
- [ ] Create Journey page route (optional)
- [ ] Create Experience/Certifications page route (optional)

## License

This project is open source and available under the MIT License.

## Contact

Lakshya Gupta - [Your Email]

Project Link: [https://github.com/yourusername/portfolio](https://github.com/yourusername/portfolio)