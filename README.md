# Coffee Culture Roastery

A modern, responsive web application for Coffee Culture Roastery - where every bean tells a tale.

## Features

- **Responsive Design**: Mobile-first approach with modern UI/UX
- **PWA Ready**: Progressive Web App with offline capabilities
- **Coffee Shop**: Browse and order premium coffee beans
- **About Section**: Learn about the founders and company story
- **Contact Form**: Get in touch with the roastery
- **Shopping Cart**: Full e-commerce functionality
- **Newsletter Signup**: Stay updated with coffee culture

## Tech Stack

- **Frontend**: React 19 + Vite
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI + Custom Components
- **Routing**: React Router DOM
- **State Management**: React Context API
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod validation

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd coffee-culture-roastery
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/            # Base UI components
│   ├── Header.jsx     # Navigation header
│   └── Footer.jsx     # Site footer
├── context/            # React Context providers
│   └── CartContext.jsx # Shopping cart state
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── pages/              # Page components
│   ├── Home.jsx        # Landing page
│   ├── Shop.jsx        # Coffee shop
│   ├── About.jsx       # Company story
│   ├── Contact.jsx     # Contact form
│   ├── Cart.jsx        # Shopping cart
│   └── Checkout.jsx    # Checkout process
└── main.jsx            # App entry point
```

## Deployment

### Netlify (Recommended)

1. **Connect Repository**:
   - Push your code to GitHub/GitLab/Bitbucket
   - Connect your repository to Netlify

2. **Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 18

3. **Environment Variables** (if needed):
   - Add any required environment variables in Netlify dashboard

4. **Deploy**:
   - Netlify will automatically build and deploy on every push

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Upload the `dist` folder to your hosting provider

3. Configure your server to serve `index.html` for all routes (SPA routing)

## PWA Features

- **Service Worker**: Offline functionality and caching
- **Web App Manifest**: Installable on mobile devices
- **Responsive Design**: Works on all screen sizes
- **Fast Loading**: Optimized bundle splitting

## Browser Support

- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is private and proprietary to Coffee Culture Roastery.

## Support

For support, email hello@coffeeculture.ph or visit our roastery in Bacolod City, Negros Occidental, Philippines. 