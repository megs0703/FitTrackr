# Deploy FitTrackr on Render

## Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

## Step 2: Deploy Backend on Render

1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Click **"New +"** → **"Web Service"**
3. Connect your GitHub repository
4. Configure:
   - **Name**: `fittrackr-backend`
   - **Root Directory**: `backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Instance Type**: Free

5. Add Environment Variables:
   - `NODE_ENV` = `production`
   - `SESSION_SECRET` = (generate a random string)
   - `PORT` = `10000`
   - Database variables will be added after creating the database

6. Click **"Create Web Service"**

## Step 3: Create MySQL Database on Render

1. In Render Dashboard, click **"New +"** → **"PostgreSQL"** or use external MySQL
2. For MySQL, use **Aiven** or **PlanetScale** (free tier)
3. Or use Render's PostgreSQL and modify schema:

### Option A: Use PostgreSQL (Recommended for Render)

1. Create PostgreSQL database on Render
2. Update `backend/config/db.js` to use PostgreSQL
3. Update `backend/schema.sql` for PostgreSQL syntax

### Option B: Use External MySQL

1. Sign up for [Aiven](https://aiven.io/) or [PlanetScale](https://planetscale.com/)
2. Create a MySQL database
3. Get connection details
4. Add to Render backend environment variables:
   - `DB_HOST` = your-mysql-host
   - `DB_USER` = your-mysql-user
   - `DB_PASSWORD` = your-mysql-password
   - `DB_NAME` = fittrackr
   - `DB_PORT` = 3306

5. Connect to your MySQL database and run:
```bash
mysql -h <host> -u <user> -p < backend/schema.sql
```

## Step 4: Update Backend Environment Variables

In your Render backend service, add all database variables from Step 3.

## Step 5: Deploy Frontend on Render

1. Click **"New +"** → **"Static Site"**
2. Connect your GitHub repository
3. Configure:
   - **Name**: `fittrackr-frontend`
   - **Root Directory**: `frontend`
   - **Build Command**: (leave empty)
   - **Publish Directory**: `.`

4. Click **"Create Static Site"**

## Step 6: Update API URL

After backend is deployed, update the API URL in frontend files:

In `frontend/js/signup.js` and `frontend/js/login.js`, replace:
```javascript
'https://fittrackr-backend.onrender.com'
```
with your actual Render backend URL.

Then commit and push:
```bash
git add .
git commit -m "Update API URL"
git push
```

## Step 7: Update CORS in Backend

Update `backend/server.js` CORS origin with your frontend URL:
```javascript
origin: ['https://fittrackr-frontend.onrender.com']
```

Commit and push to trigger redeployment.

## Your Live URLs

- **Frontend**: `https://fittrackr-frontend.onrender.com`
- **Backend**: `https://fittrackr-backend.onrender.com`

## Notes

- Free tier services sleep after 15 minutes of inactivity
- First request after sleep takes ~30 seconds
- Consider upgrading for production use
