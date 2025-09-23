# Backend Email Setup with Nodemailer

I've created a complete backend solution using Express.js and Nodemailer for sending emails from your portfolio contact form.

## 📁 Backend Structure Created

```
backend/
├── server.ts              # Main Express server
├── services/
│   └── emailService.ts    # Nodemailer email service
├── package.json           # Backend dependencies
├── tsconfig.json         # TypeScript configuration
└── env.example           # Environment variables template
```

## 🚀 Quick Setup

### 1. Configure Email Credentials

Create a `.env` file in the `backend` folder:

```bash
# Copy the example file
cp backend/env.example backend/.env
```

Edit `backend/.env` with your email details:

```env
# Your email address
EMAIL_USER=honeylalwani1999@gmail.com

# Your email password or app password
EMAIL_PASS=your-app-password

# Server configuration
PORT=3001
FRONTEND_URL=http://localhost:5173
```

### 2. Gmail Setup (Recommended)

For Gmail, you'll need to:

1. **Enable 2-Factor Authentication** on your Google account
2. **Generate an App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a password for "Mail"
   - Use this password as `EMAIL_PASS`

### 3. Start the Backend Server

```bash
# Navigate to backend folder
cd backend

# Install dependencies (if not already done)
npm install

# Start development server
npm run dev
```

The server will run on `http://localhost:3001`

### 4. Start the Frontend

In a new terminal:

```bash
# Navigate to project root
cd ..

# Start frontend
npm run dev
```

## ✨ Features

- **Professional Email Templates**: HTML formatted emails with sender details
- **Error Handling**: Comprehensive error messages and validation
- **CORS Support**: Properly configured for frontend communication
- **TypeScript**: Full type safety
- **Development Ready**: Hot reload with nodemon

## 🔧 Email Service Configuration

The backend supports multiple email providers:

- **Gmail** (default)
- **Outlook/Hotmail**
- **Yahoo**
- **Custom SMTP**

To change provider, edit `backend/services/emailService.ts`:

```typescript
// For Outlook
service: 'hotmail'

// For Yahoo
service: 'yahoo'

// For custom SMTP
host: 'smtp.your-provider.com',
port: 587,
secure: false
```

## 📧 Email Template

Emails will be sent with:

- Professional HTML formatting
- Sender information (name, email, date)
- Formatted message content
- Reply-to functionality

## 🧪 Testing

1. Start both servers (backend on :3001, frontend on :5173)
2. Fill out the contact form
3. Click "Send Message"
4. Check your email inbox

## 🚀 Production Deployment

For production, you can deploy the backend to:

- **Vercel** (serverless)
- **Railway**
- **Heroku**
- **DigitalOcean**
- **AWS**

Update the frontend API URL to your production backend URL.

## 📝 Next Steps

1. **Set up your email credentials** in `backend/.env`
2. **Start the backend server** with `npm run dev`
3. **Test the contact form** on your frontend
4. **Deploy to production** when ready

The backend is now ready to handle email sending from your portfolio contact form!

