# Deployment Guide: Scholarly Bridge

## 📋 Overview

This guide walks you through deploying Scholarly Bridge to GitHub, Netlify, and Railway.

**Total Time: ~30 minutes**

---

## 🚀 Step 1: Create GitHub Repository (5 minutes)

### 1.1 Create a New Repository

1. Go to https://github.com/new
2. Fill in the form:
   - **Repository name:** `scholarly-bridge`
   - **Description:** `Global Scholar: Transforming Academic Conferences into Global Knowledge Ecosystems`
   - **Visibility:** Public
   - **Initialize with README:** Uncheck (we have one)
3. Click **Create repository**

### 1.2 Get Your Repository URL

After creating, you'll see your repository URL:
```
https://github.com/global-scholar/scholarly-bridge.git
```

---

## 📦 Step 2: Upload Code to GitHub (5 minutes)

### Option A: Using GitHub Web Interface (Easiest)

1. Go to your repository: `https://github.com/global-scholar/scholarly-bridge`
2. Click **Add file** → **Upload files**
3. Drag and drop all files from the ZIP folder
4. Click **Commit changes**

### Option B: Using Git Command Line

```bash
# Navigate to your project folder
cd scholarly-bridge

# Initialize git
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Scholarly Bridge platform"

# Add remote repository
git remote add origin https://github.com/global-scholar/scholarly-bridge.git

# Push to GitHub
git branch -M main
git push -u origin main
```

---

## 🌐 Step 3: Deploy Frontend to Netlify (10 minutes)

### 3.1 Connect GitHub to Netlify

1. Go to https://netlify.com
2. Click **Sign up** (use GitHub account)
3. Authorize Netlify to access your GitHub
4. Click **New site from Git**
5. Select **GitHub** as your Git provider
6. Find and select `scholarly-bridge` repository

### 3.2 Configure Build Settings

Netlify will auto-detect Next.js. Confirm:
- **Build command:** `npm run build`
- **Publish directory:** `.next`
- **Node version:** 18 or higher

### 3.3 Deploy

1. Click **Deploy site**
2. Wait for build to complete (2-3 minutes)
3. Your site is live at: `https://your-site-name.netlify.app`

### 3.4 Custom Domain (Optional)

1. Go to **Site settings** → **Domain management**
2. Click **Add custom domain**
3. Enter your domain name
4. Follow DNS configuration steps

---

## 🔧 Step 4: Deploy Backend to Railway (10 minutes)

### 4.1 Create Railway Account

1. Go to https://railway.app
2. Click **Start Project**
3. Sign up with GitHub
4. Authorize Railway

### 4.2 Deploy from GitHub

1. Click **New Project**
2. Select **Deploy from GitHub repo**
3. Select `scholarly-bridge` repository
4. Railway will auto-detect Node.js

### 4.3 Configure Environment Variables

1. Go to **Variables** tab
2. Add any required environment variables:
   ```
   NODE_ENV=production
   DATABASE_URL=your_database_url
   ```

### 4.4 Deploy

1. Click **Deploy**
2. Wait for deployment (2-3 minutes)
3. Your backend is live at: `https://scholarly-bridge-backend.railway.app`

---

## ✅ Step 5: Verify Deployment

### 5.1 Check Frontend

1. Visit your Netlify URL
2. Verify all pages load correctly:
   - Homepage
   - Conferences page
   - Registration page
   - Agenda page

### 5.2 Check Backend

1. Visit your Railway URL
2. Test API endpoints:
   ```
   GET /api/health
   GET /api/conferences
   ```

---

## 🔄 Step 6: Connect Frontend to Backend

### 6.1 Update API Endpoint

In your frontend code, update the API base URL:

```typescript
// lib/api.ts
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

// For production:
// NEXT_PUBLIC_API_URL=https://scholarly-bridge-backend.railway.app/api
```

### 6.2 Deploy Again

1. Push changes to GitHub
2. Netlify will auto-redeploy
3. Frontend now connects to backend

---

## 📊 Monitoring & Maintenance

### Netlify Dashboard
- **Analytics:** View traffic and performance
- **Logs:** Check deployment logs
- **Functions:** Monitor serverless functions
- **Redirects:** Configure URL redirects

### Railway Dashboard
- **Logs:** View application logs
- **Metrics:** Monitor CPU, memory, network
- **Database:** Manage database connections
- **Deployments:** View deployment history

---

## 🐛 Troubleshooting

### Build Fails on Netlify

**Problem:** `npm install` fails
**Solution:**
1. Check `package.json` for errors
2. Delete `node_modules` locally
3. Run `npm install` locally
4. Push to GitHub
5. Netlify will retry

### Frontend Can't Connect to Backend

**Problem:** API calls fail with CORS error
**Solution:**
1. Add CORS headers to backend:
   ```javascript
   app.use(cors({
     origin: 'https://your-netlify-url.netlify.app',
     credentials: true
   }));
   ```
2. Update `NEXT_PUBLIC_API_URL` in frontend
3. Redeploy both

### Database Connection Fails

**Problem:** Can't connect to PostgreSQL
**Solution:**
1. Verify `DATABASE_URL` is correct
2. Check database is running
3. Verify firewall allows connections
4. Test connection locally first

---

## 🚀 Next Steps

1. **Add Custom Domain**
   - Netlify: Site settings → Domain management
   - Railway: Project settings → Domains

2. **Set Up CI/CD**
   - GitHub Actions for automated testing
   - Automatic deployments on push

3. **Add Database**
   - Create PostgreSQL on Railway
   - Connect to backend
   - Run migrations

4. **Add Authentication**
   - Implement user login
   - Add protected routes
   - Manage user data

5. **Monitor Performance**
   - Set up analytics
   - Monitor error rates
   - Track user behavior

---

## 📞 Support

- **Netlify Docs:** https://docs.netlify.com
- **Railway Docs:** https://docs.railway.app
- **Next.js Docs:** https://nextjs.org/docs
- **GitHub Docs:** https://docs.github.com

---

**Congratulations! Your Scholarly Bridge platform is now live! 🎉**
