# 🚀 Portfolio Deployment Guide

## ✅ Repository Status
- **GitHub:** https://github.com/gabriel-taufer/portfolio
- **Branch:** main
- **Latest Commit:** Merged Astro portfolio with legacy history

## 🌐 Deployment Options

### Option 1: Vercel (Recommended)
**Why Vercel:** Best Astro support, automatic deployments, edge network

1. Go to https://vercel.com/new
2. Import `gabriel-taufer/portfolio`
3. Framework Preset: **Astro**
4. Build Command: `npm run build` (auto-detected)
5. Output Directory: `dist` (auto-detected)
6. Click **Deploy**

**Environment Variables:** None needed

**Custom Domain Setup:**
- Add domain in Vercel settings
- Update DNS to point to Vercel
  - CNAME: `cname.vercel-dns.com`

### Option 2: Netlify
1. Go to https://app.netlify.com/start
2. Import from GitHub: `gabriel-taufer/portfolio`
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Click **Deploy**

**netlify.toml** (already configured if needed):
```toml
[build]
  command = "npm run build"
  publish = "dist"
```

### Option 3: GitHub Pages
1. Go to repository Settings → Pages
2. Source: GitHub Actions
3. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Option 4: Cloudflare Pages
1. Go to Cloudflare dashboard
2. Pages → Create a project
3. Connect to GitHub: `gabriel-taufer/portfolio`
4. Build settings:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output: `dist`
5. Deploy

## 📝 Pre-Deployment Checklist

### ✅ Completed
- [x] Portfolio migrated to Astro
- [x] i18n configured (EN/PT)
- [x] Blog integrated with RSS
- [x] Images optimized
- [x] SEO meta tags configured
- [x] Custom 404 page
- [x] Git history merged
- [x] Pushed to GitHub

### 🔧 Optional Optimizations
- [ ] Set up custom domain
- [ ] Configure analytics (Plausible/GA4)
- [ ] Add sitemap to Google Search Console
- [ ] Set up monitoring (Sentry/LogRocket)

## 🔐 Security Notes

GitHub detected **35 vulnerabilities** in dependencies. To fix:

```bash
npm audit fix
npm audit fix --force  # if needed

# Then commit and push
git add package*.json
git commit -m "fix: update dependencies to resolve security vulnerabilities"
git push
```

## 🌍 URL Structure

After deployment, your site will have:
- English: `https://yourdomain.com/`
- Portuguese: `https://yourdomain.com/pt/`
- Blog: `https://yourdomain.com/blog/` (both languages)
- Skills: `https://yourdomain.com/skills/`
- Contact: `https://yourdomain.com/contact/`

## 🎨 Customization

### Update Site URL
Edit `astro.config.mjs`:
```javascript
export default defineConfig({
  site: "https://your-domain.com",  // Update this
  // ...
});
```

### Update Contact Info
Edit `src/consts.ts`:
```typescript
export const SITE = {
  NAME: "Gabriel Taufer",
  EMAIL: "gabriel@taufer.dev",
  // ...
};
```

## 📊 Performance

Current optimizations:
- ⚡ Static Site Generation (SSG)
- 🖼️ Optimized images (97% size reduction on favicon)
- 📦 Code splitting
- 🎯 Minimal JavaScript
- 🌐 Edge deployment ready

Expected Lighthouse scores:
- Performance: 95-100
- Accessibility: 90-100
- Best Practices: 90-100
- SEO: 90-100

## 🐛 Troubleshooting

### Build fails with Node version error
Update to Node 18.20.8 or higher:
```bash
nvm install 18.20.8
nvm use 18.20.8
```

### RSS feed not loading
Check CORS settings and ensure `https://poorthoughts.com/rss.xml` is accessible

### i18n routes not working
Verify `astro.config.mjs` has correct i18n configuration

## 📚 Resources

- [Astro Deployment Docs](https://docs.astro.build/en/guides/deploy/)
- [Vercel Astro Guide](https://vercel.com/docs/frameworks/astro)
- [Netlify Astro Guide](https://docs.netlify.com/integrations/frameworks/astro/)

---

**Ready to deploy!** Choose your preferred platform and follow the steps above.
