# Deployment Guide - Adithya Sharma Portfolio

Your portfolio is ready to deploy! Choose one of these methods:

---

## 🚀 Method 1: Vercel (Recommended - Easiest)

Vercel is perfect for React apps - free, fast, and automatic deploys!

### Steps:

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy** (from project folder):
   ```bash
   vercel
   ```
   - Press Enter for all default options
   - Your site will be live in ~30 seconds!

4. **Custom Domain** (optional):
   ```bash
   vercel --prod
   ```
   - Go to Vercel dashboard to add custom domain

### Using Vercel Website:
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "Add New Project"
4. Import this repository
5. Click "Deploy"
6. Done! 🎉

**Your URL**: `https://your-portfolio.vercel.app`

---

## 📦 Method 2: Netlify

1. **Install Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   ```

2. **Login**:
   ```bash
   netlify login
   ```

3. **Deploy**:
   ```bash
   netlify deploy --prod
   ```
   - Choose "dist" as publish directory

### Using Netlify Website:
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop the `dist` folder
3. Done! 🎉

---

## 🐙 Method 3: GitHub Pages

1. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json**:
   ```json
   "homepage": "https://Hokage-Adithya.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. **Deploy**:
   ```bash
   npm run deploy
   ```

4. **Enable GitHub Pages**:
   - Go to repo Settings → Pages
   - Source: gh-pages branch
   - Save

**Your URL**: `https://Hokage-Adithya.github.io/portfolio`

---

## 🔥 Method 4: Firebase Hosting

1. **Install Firebase CLI**:
   ```bash
   npm install -g firebase-tools
   ```

2. **Login**:
   ```bash
   firebase login
   ```

3. **Initialize**:
   ```bash
   firebase init hosting
   ```
   - Public directory: `dist`
   - Single-page app: `Yes`
   - GitHub auto-deploys: `No`

4. **Deploy**:
   ```bash
   firebase deploy
   ```

---

## ⚡ Quick Deploy Commands

Already built! Just run:

### Vercel:
```bash
vercel
```

### Netlify:
```bash
netlify deploy --prod --dir=dist
```

### GitHub Pages:
```bash
npm run deploy
```

---

## 📝 Post-Deployment Checklist

After deploying:
- [ ] Test all links work
- [ ] Test contact form
- [ ] Test resume download
- [ ] Check mobile responsiveness
- [ ] Share your portfolio! 🎉

---

## 🌐 Custom Domain (Optional)

All platforms support custom domains:
- Buy domain from Namecheap, GoDaddy, etc.
- Add DNS records in platform settings
- Usually free with these services!

---

## 🔄 Auto-Deploy Setup

### For Vercel/Netlify:
1. Push code to GitHub
2. Connect your GitHub repo
3. Automatic deploys on every push! 🚀

---

## 💡 Recommended: Vercel

**Why Vercel?**
- ✅ Free forever
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ One-command deploy
- ✅ Auto-deploys from GitHub
- ✅ Best for React/Vite

**Deploy now**: `vercel`

---

Your portfolio is production-ready! 🎉
Choose a method and deploy in minutes!
