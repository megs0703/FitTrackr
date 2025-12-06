# Deploy FitTrackr on Vercel

## Step 1: Setup PostgreSQL Database

Use **Neon** (free PostgreSQL):

1. Go to [neon.tech](https://neon.tech) → Sign up
2. Create new project → **FitTrackr**
3. Copy the **Connection String**
4. In Neon SQL Editor, run:

```sql
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS progress (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL,
  weight INT,
  calories INT,
  steps INT,
  date DATE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
```

## Step 2: Push to GitHub

```bash
git add .
git commit -m "Vercel deployment ready"
git push
```

## Step 3: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) → Sign up/Login
2. Click **"Add New"** → **"Project"**
3. Import your GitHub repository
4. Configure:
   - **Framework Preset**: Other
   - **Root Directory**: `./`
   - Leave build settings as default
5. Add Environment Variables:
   - `DATABASE_URL` = (paste Neon connection string)
   - `SESSION_SECRET` = (any random string)
   - `NODE_ENV` = `production`
6. Click **"Deploy"**

## Done!

Your app will be live at: `https://your-project.vercel.app`

- Frontend: `https://your-project.vercel.app/`
- API: `https://your-project.vercel.app/api`
