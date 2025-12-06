# FitTrackr - Health & Fitness Progress Tracker

A modern web application for tracking fitness progress with user authentication and dashboard.

## Tech Stack

- **Frontend**: HTML, TailwindCSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **Authentication**: bcrypt, express-session

## Features

- User registration and login with validation
- Password hashing with bcrypt
- Session-based authentication
- Responsive dashboard with fitness tracking cards
- Smooth animations and transitions
- Toast notifications
- Real-time form validation

## Project Structure

```
FitTrackr/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── .env.sample
│   ├── .gitignore
│   ├── package.json
│   ├── schema.sql
│   └── server.js
└── frontend/
    ├── js/
    │   ├── signup.js
    │   ├── login.js
    │   └── dashboard.js
    ├── .gitignore
    ├── signup.html
    ├── login.html
    └── dashboard.html
```

## Local Setup

### 1. Database Setup

```bash
# Login to MySQL
mysql -u root -p

# Run the schema
source backend/schema.sql
```

### 2. Backend Setup

```bash
cd backend
npm install
cp .env.sample .env
# Edit .env with your database credentials
npm start
```

### 3. Frontend Setup

Open `frontend/signup.html` in your browser or use a local server:

```bash
cd frontend
npx serve
```

## Environment Variables

Create `.env` file in backend directory:

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=fittrackr
PORT=5000
SESSION_SECRET=your_secret_key_here
```

## API Endpoints

- `POST /signup` - Register new user
- `POST /login` - Login user
- `GET /dashboard` - Get user dashboard data
- `GET /logout` - Logout user

## Deployment

### Backend (Render)

1. Push code to GitHub
2. Go to Render.com → New Web Service
3. Connect your repository
4. Set build command: `cd backend && npm install`
5. Set start command: `cd backend && npm start`
6. Add environment variables
7. Deploy

### Frontend (Vercel)

1. Push code to GitHub
2. Go to Vercel.com → New Project
3. Import your repository
4. Set root directory to `frontend`
5. Update API_URL in JS files to your Render backend URL
6. Deploy

## License

MIT
