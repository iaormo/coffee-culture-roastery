# Netlify Deployment Guide

This guide will help you deploy Coffee Culture Roastery to Netlify.

## Prerequisites

- GitHub, GitLab, or Bitbucket account
- Netlify account
- Node.js 18+ installed locally

## Step 1: Prepare Your Repository

1. **Push your code** to your Git repository:
```bash
git add .
git commit -m "Prepare for Netlify deployment"
git push origin main
```

2. **Ensure these files are committed**:
   - `netlify.toml` (Netlify configuration)
   - `package.json` (Dependencies and scripts)
   - `vite.config.js` (Build configuration)
   - All source code in `src/` folder

## Step 2: Connect to Netlify

1. **Go to [netlify.com](https://netlify.com)** and sign in
2. **Click "New site from Git"**
3. **Choose your Git provider** (GitHub, GitLab, or Bitbucket)
4. **Select your repository**: `coffee-culture-roastery`
5. **Authorize Netlify** to access your repository

## Step 3: Configure Build Settings

**Build settings** (Netlify will auto-detect these from `netlify.toml`):

- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Node version**: 18

**If auto-detection fails, manually set**:
- Build command: `npm run build`
- Publish directory: `dist`
- Node version: 18

## Step 4: Deploy

1. **Click "Deploy site"**
2. **Wait for build** (usually 2-5 minutes)
3. **Your site will be live** at a Netlify subdomain

## Step 5: Custom Domain (Optional)

1. **Go to Site settings** → **Domain management**
2. **Click "Add custom domain"**
3. **Enter your domain** (e.g., `coffeeculture.ph`)
4. **Follow DNS configuration instructions**

## Step 6: Environment Variables (If Needed)

1. **Go to Site settings** → **Environment variables**
2. **Add any required variables**:
   - `NODE_VERSION`: `18`
   - Any custom environment variables from `env.example`

## Step 7: Verify Deployment

1. **Check your live site** for any issues
2. **Test PWA functionality**:
   - Install on mobile device
   - Test offline functionality
3. **Verify all pages work**:
   - Home, Shop, About, Contact, Cart, Checkout

## Troubleshooting

### Build Fails

**Common issues and solutions**:

1. **Node version mismatch**:
   - Ensure Netlify uses Node.js 18+
   - Add `NODE_VERSION=18` in environment variables

2. **Dependency issues**:
   - Check `package-lock.json` is committed
   - Ensure all dependencies are in `package.json`

3. **Build timeout**:
   - Optimize bundle size in `vite.config.js`
   - Check for large assets or dependencies

### PWA Not Working

1. **Check service worker**:
   - Verify `sw.js` is in the `dist` folder
   - Check browser console for errors

2. **Verify manifest**:
   - Ensure `manifest.json` is accessible
   - Check PWA audit in Chrome DevTools

### Routing Issues

1. **SPA routing**:
   - Verify `netlify.toml` has redirects configured
   - All routes should redirect to `index.html`

## Performance Optimization

1. **Enable Netlify's optimizations**:
   - Asset optimization
   - Image optimization
   - Minification

2. **Monitor performance**:
   - Use Netlify Analytics
   - Check Core Web Vitals
   - Monitor bundle sizes

## Continuous Deployment

**Automatic deployments**:
- Every push to `main` branch triggers a new deployment
- Preview deployments for pull requests
- Branch deployments for testing

## Support

If you encounter issues:

1. **Check Netlify build logs** for error details
2. **Verify local build** works: `npm run build`
3. **Check Netlify status** at [status.netlify.com](https://status.netlify.com)
4. **Contact Netlify support** if needed

## Success Checklist

- [ ] Site builds successfully
- [ ] All pages load correctly
- [ ] PWA installs on mobile
- [ ] Offline functionality works
- [ ] Custom domain configured (if applicable)
- [ ] Performance optimized
- [ ] Analytics configured (if needed)

🎉 **Congratulations! Your Coffee Culture Roastery site is now live on Netlify!** 