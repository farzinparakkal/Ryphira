# Ryphira Company Website

A modern, responsive React + Vite website for Ryphira Pvt. Ltd., showcasing innovative software solutions and world-class programming education.

## Features

- **Modern Design**: Beautiful, responsive design with smooth animations
- **Complete Sections**: 
  - Hero section with animated elements
  - About Us with company statistics
  - Vision & Mission with founder messages
  - Recognition & Awards showcase
  - Board Members (5 slots with photo placeholders)
  - Staff section (9 members: 2 managers, 3 senior developers, 4 junior developers)
  - Client Reviews with ratings
  - Contact form and company information
  - Professional footer with newsletter signup

- **Interactive Elements**: 
  - Smooth scrolling navigation
  - Hover animations and transitions
  - Form validation
  - Responsive mobile design

- **Technologies Used**:
  - React 18
  - Vite for fast development
  - Framer Motion for animations
  - React Icons
  - Modern CSS with gradients and effects

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd ryphira-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
ryphira-website/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── AboutUs.jsx
│   │   ├── VisionMission.jsx
│   │   ├── Recognition.jsx
│   │   ├── BoardMembers.jsx
│   │   ├── Staff.jsx
│   │   ├── Reviews.jsx
│   │   ├── ConnectUs.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Customization

### Adding Photos
- Board member photos: Place images in `/public/images/board/`
- Staff photos: Place images in `/public/images/staff/`
- Review photos: Place images in `/public/images/reviews/`

### Updating Content
- Company information: Edit the respective component files
- Contact details: Update `ConnectUs.jsx` and `Footer.jsx`
- Social media links: Update links in `Header.jsx` and `Footer.jsx`

## Deployment

This project can be deployed to any static hosting service like:
- Netlify
- Vercel
- GitHub Pages
- AWS S3

Simply run `npm run build` and upload the `dist` folder to your hosting service.

## License

© 2024 Ryphira Pvt. Ltd. All rights reserved.
