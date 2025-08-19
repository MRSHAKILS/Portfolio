# 🚀 Deployment Guide

This guide covers deploying your Portfolio Application to various platforms.

## 📋 Table of Contents

- [Frontend Deployment](#frontend-deployment)
- [Backend Deployment](#backend-deployment)
- [Database Setup](#database-setup)
- [Environment Variables](#environment-variables)
- [Domain & SSL](#domain--ssl)

## 🌐 Frontend Deployment

### Vercel (Recommended)

1. **Build the application**

   ```bash
   cd frontend
   npm run build
   ```

2. **Deploy to Vercel**

   ```bash
   npm install -g vercel
   vercel --prod
   ```

3. **Set environment variables** in Vercel dashboard:
   ```
   REACT_APP_BACKEND_URL=https://your-api-domain.com
   REACT_APP_ENABLE_ANALYTICS=true
   ```

### Netlify

1. **Build the application**

   ```bash
   cd frontend
   npm run build
   ```

2. **Deploy via Netlify CLI**
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod --dir=build
   ```

### GitHub Pages

1. **Install gh-pages**

   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json**

   ```json
   {
     "homepage": "https://yourusername.github.io/portfolio",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

## 🖥️ Backend Deployment

### Railway (Recommended)

1. **Create railway.json**

   ```json
   {
     "$schema": "https://railway.app/railway.schema.json",
     "build": {
       "builder": "NIXPACKS"
     },
     "deploy": {
       "startCommand": "python -m uvicorn server:app --host 0.0.0.0 --port $PORT",
       "restartPolicyType": "ON_FAILURE",
       "restartPolicyMaxRetries": 10
     }
   }
   ```

2. **Deploy to Railway**

   ```bash
   # Install Railway CLI
   npm install -g @railway/cli

   # Login and deploy
   railway login
   railway link
   railway deploy
   ```

### Heroku

1. **Create Procfile**

   ```
   web: python -m uvicorn server:app --host 0.0.0.0 --port $PORT
   ```

2. **Deploy to Heroku**
   ```bash
   # Install Heroku CLI and login
   heroku create your-app-name
   git push heroku main
   ```

### DigitalOcean App Platform

1. **Create app.yaml**
   ```yaml
   name: portfolio-backend
   services:
     - name: api
       source_dir: /backend
       github:
         repo: your-username/portfolio
         branch: main
       run_command: python -m uvicorn server:app --host 0.0.0.0 --port $PORT
       environment_slug: python
       instance_count: 1
       instance_size_slug: basic-xxs
       envs:
         - key: MONGO_URL
           value: ${MONGO_URL}
         - key: JWT_SECRET
           value: ${JWT_SECRET}
   ```

## 🗄️ Database Setup

### MongoDB Atlas (Recommended)

1. **Create MongoDB Atlas Account**

   - Visit [MongoDB Atlas](https://cloud.mongodb.com/)
   - Create a new cluster
   - Set up database user and network access

2. **Get Connection String**

   ```
   mongodb+srv://username:password@cluster.mongodb.net/portfolio_db?retryWrites=true&w=majority
   ```

3. **Update Environment Variables**
   ```env
   MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/portfolio_db
   DB_NAME=portfolio_db
   ```

### Railway MongoDB

1. **Add MongoDB to Railway**

   ```bash
   railway add mongodb
   ```

2. **Get connection details from Railway dashboard**

## 🔐 Environment Variables

### Production Environment Variables

**Backend (.env)**

```env
# Database
MONGO_URL=mongodb+srv://user:pass@cluster.mongodb.net/portfolio_db
DB_NAME=portfolio_db

# Security
JWT_SECRET=super-secure-secret-key-for-production
JWT_ALGORITHM=HS256

# CORS
CORS_ORIGINS=https://yourfrontend.vercel.app,https://www.yourdomain.com

# API
API_HOST=0.0.0.0
API_PORT=8000
API_DEBUG=False

# Logging
LOG_LEVEL=INFO
```

**Frontend (.env)**

```env
# API
REACT_APP_BACKEND_URL=https://your-api.railway.app
REACT_APP_API_VERSION=v1

# App
REACT_APP_NAME=Portfolio
REACT_APP_ENABLE_ANALYTICS=true

# Analytics
REACT_APP_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```

### Setting Environment Variables

**Vercel:**

```bash
vercel env add REACT_APP_BACKEND_URL
```

**Railway:**

```bash
railway variables set MONGO_URL=mongodb+srv://...
```

**Heroku:**

```bash
heroku config:set MONGO_URL=mongodb+srv://...
```

## 🌍 Domain & SSL

### Custom Domain Setup

1. **Add Custom Domain** in your hosting platform
2. **Update DNS Records**

   ```
   Type: CNAME
   Name: www
   Value: your-app.vercel.app

   Type: A
   Name: @
   Value: 76.76.19.61 (Vercel IP)
   ```

3. **Enable SSL** (usually automatic)

### SSL Certificate

Most modern platforms (Vercel, Netlify, Railway) provide automatic SSL certificates. For custom setups:

```bash
# Using Certbot for Let's Encrypt
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

## 🚀 Complete Deployment Checklist

### Pre-deployment

- [ ] Update environment variables for production
- [ ] Set `DEBUG=False` in backend
- [ ] Configure proper CORS origins
- [ ] Test the application locally
- [ ] Run tests (`pytest` for backend, `npm test` for frontend)
- [ ] Build frontend (`npm run build`)

### Database

- [ ] Set up MongoDB Atlas or production database
- [ ] Configure database connection string
- [ ] Set up database indexes if needed
- [ ] Test database connectivity

### Frontend Deployment

- [ ] Choose hosting platform (Vercel, Netlify, etc.)
- [ ] Configure build settings
- [ ] Set environment variables
- [ ] Deploy and test

### Backend Deployment

- [ ] Choose hosting platform (Railway, Heroku, etc.)
- [ ] Configure start command
- [ ] Set environment variables
- [ ] Deploy and test API endpoints

### Post-deployment

- [ ] Test complete application flow
- [ ] Set up monitoring and logging
- [ ] Configure custom domain
- [ ] Set up SSL certificate
- [ ] Configure analytics
- [ ] Set up error tracking (Sentry, etc.)

## 🔧 Troubleshooting

### Common Issues

**CORS Errors:**

```python
# Update CORS origins in backend
CORS_ORIGINS=https://yourdomain.com,https://www.yourdomain.com
```

**Build Failures:**

```bash
# Clear node modules and reinstall
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

**Database Connection:**

```python
# Check MongoDB connection string format
mongodb+srv://username:password@cluster.mongodb.net/database?retryWrites=true&w=majority
```

**Environment Variables:**

```bash
# Verify all required env vars are set
echo $REACT_APP_BACKEND_URL
```

## 📊 Monitoring

### Set up monitoring for:

- **Application Performance** (Vercel Analytics, Railway Metrics)
- **Error Tracking** (Sentry)
- **Uptime Monitoring** (UptimeRobot)
- **Analytics** (Google Analytics, Mixpanel)

---

🎉 **Congratulations!** Your portfolio is now deployed and ready for the world to see!
