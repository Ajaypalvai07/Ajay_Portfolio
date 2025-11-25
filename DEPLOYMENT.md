# Netlify Deployment Guide

## Quick Deploy Steps

### Option 1: Deploy via Netlify CLI (Recommended)

1. **Install Netlify CLI** (if not already installed):
```bash
npm install -g netlify-cli
```

2. **Login to Netlify**:
```bash
netlify login
```

3. **Build the project**:
```bash
npm run build
```

4. **Deploy**:
```bash
netlify deploy --prod
```

When prompted:
- **Publish directory**: `dist`
- Follow the prompts to create a new site or link to existing

### Option 2: Deploy via Netlify Dashboard

1. **Push your code to GitHub** (if not already):
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

2. **Go to Netlify Dashboard**:
   - Visit https://app.netlify.com/
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select your repository

3. **Build Settings** (should auto-detect from netlify.toml):
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: 18

4. **Click "Deploy site"**

### Option 3: Drag & Drop Deploy

1. **Build the project**:
```bash
npm run build
```

2. **Go to Netlify Drop**:
   - Visit https://app.netlify.com/drop
   - Drag and drop the `dist` folder

## Configuration Files

### netlify.toml
This file configures:
- Build command: `npm run build`
- Publish directory: `dist`
- Redirects for SPA routing (prevents 404 on refresh)
- Node version: 18

### public/_redirects
Backup redirect rule for SPA routing:
- All routes redirect to `/index.html` with 200 status
- This prevents 404 errors when users refresh on routes like `/about` or `/projects`

## Environment Variables

If you need to add environment variables (like API keys):

1. **In Netlify Dashboard**:
   - Go to Site settings → Environment variables
   - Add: `VITE_GEMINI_API_KEY` = your_api_key

2. **Or via CLI**:
```bash
netlify env:set VITE_GEMINI_API_KEY your_api_key
```

## Custom Domain (Optional)

1. In Netlify Dashboard → Domain settings
2. Add custom domain
3. Follow DNS configuration instructions

## Troubleshooting

### Build Fails
- Check Node version (should be 18+)
- Run `npm install` locally first
- Check build logs in Netlify dashboard

### 404 on Refresh
- Ensure `netlify.toml` and `public/_redirects` exist
- Check that redirects are configured correctly

### Environment Variables Not Working
- Make sure they start with `VITE_`
- Redeploy after adding env vars

## Post-Deployment

After successful deployment:
1. Test all routes (/, /about, /projects, /contact)
2. Test refresh on each route
3. Test the AI agent animations
4. Verify resume download button works
5. Check mobile responsiveness

## Your Site URL
After deployment, your site will be available at:
- `https://your-site-name.netlify.app`
- Or your custom domain if configured

---

**Note**: The portfolio uses HashRouter, so URLs will have `#` (e.g., `/#/about`). If you want clean URLs, you'd need to switch to BrowserRouter, but the current setup works perfectly with the redirect rules.
