# Calva Corro Abogados - Website

Modern, responsive single-page website for Calva Corro Abogados law firm.

## 🚀 Quick Start

\`\`\`bash
npm install
npm run dev
\`\`\`

Visit `http://localhost:3000` to see your site.

## 📝 Content Management Guide

### Updating Firm Information

#### Contact Information
Edit the `ContactSection` component in `app/page.tsx`:
- **Address**: Line 485-489
- **Phone numbers**: Line 495-496
- **Email addresses**: Line 505-506

#### Social Media Links
Update social media URLs in the `ContactSection` (lines 515-550):
\`\`\`tsx
<a href="https://facebook.com/your-page" ...>
<a href="https://instagram.com/your-profile" ...>
<a href="https://tiktok.com/@your-account" ...>
<a href="https://youtube.com/@your-channel" ...>
\`\`\`

### Updating Practice Areas

Edit the `areas` array in `PracticeAreasSection` (lines 165-176):
\`\`\`tsx
const areas = [
  { name: 'Area Name', icon: IconName, description: 'Description' },
  // Add or modify areas here
]
\`\`\`

### Adding/Editing Blog Posts

Edit the `blogPosts` array in `BlogSection` (lines 330-355):
\`\`\`tsx
const blogPosts = [
  {
    title: 'Your Article Title',
    date: 'DD de Mes, YYYY',
    preview: 'Brief description...',
    image: '/placeholder.svg?height=400&width=600',
  },
  // Add more posts here
]
\`\`\`

### Changing YouTube Videos

#### Social Work Section
Line 265 - Replace the video ID in the iframe src:
\`\`\`tsx
src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
\`\`\`

#### About Section
Line 318 - Replace the video ID:
\`\`\`tsx
src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
\`\`\`

### Updating Hero Section

Edit lines 135-155 in `HeroSection`:
- **Title**: Line 147
- **Subtitle**: Line 150
- **Button text**: Lines 158 and 165

### Modifying About Section Content

Edit the `AboutSection` component (lines 285-325):
- **Mission text**: Lines 300-310
- **Values list**: Lines 312-318

### Customizing Colors

The site uses a custom color scheme defined in `app/globals.css`:
- **Primary blue**: `#1D4E89` (--primary)
- **Light gray**: `#F1F5F9` (--secondary)

To change colors, update the CSS variables in `app/globals.css` (lines 6-7).

### Navigation Links

To add/remove navigation items, edit the `navLinks` array in `Navbar` component (lines 50-57):
\`\`\`tsx
const navLinks = [
  { name: 'Display Name', id: 'section-id' },
  // Add more links here
]
\`\`\`

Make sure the `id` matches the section's `id` attribute for smooth scrolling.

## 🎨 Design System

- **Primary Color**: #1D4E89 (Professional blue)
- **Secondary Color**: #F1F5F9 (Light gray)
- **Font**: Inter (modern sans-serif)
- **Animations**: Framer Motion for smooth transitions
- **Components**: shadcn/ui for consistent UI elements

## 📱 Responsive Design

The site is fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔧 Technical Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Components**: shadcn/ui

## 📦 Deployment

Deploy to Vercel with one click:
1. Push your code to GitHub
2. Import the repository in Vercel
3. Deploy automatically

Or use the Vercel CLI:
\`\`\`bash
npm install -g vercel
vercel
\`\`\`

## 📄 License

© 2025 Calva Corro Abogados. All rights reserved.
