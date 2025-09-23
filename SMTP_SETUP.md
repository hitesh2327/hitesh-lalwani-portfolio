# Custom SMTP Setup Guide

I've configured your backend to use custom SMTP settings. Here are the popular email providers and their configurations:

## 📧 **Popular SMTP Providers**

### **1. Gmail (Recommended)**

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
```

**Setup Steps:**

1. Enable 2-Factor Authentication
2. Generate App Password: Google Account → Security → App passwords
3. Use the 16-character app password

### **2. Outlook/Hotmail**

```env
EMAIL_USER=your-email@outlook.com
EMAIL_PASS=your-password
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_SECURE=false
```

### **3. Yahoo Mail**

```env
EMAIL_USER=your-email@yahoo.com
EMAIL_PASS=your-app-password
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
SMTP_SECURE=false
```

### **4. SendGrid (Professional)**

```env
EMAIL_USER=apikey
EMAIL_PASS=your-sendgrid-api-key
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_SECURE=false
```

### **5. Mailgun**

```env
EMAIL_USER=postmaster@your-domain.mailgun.org
EMAIL_PASS=your-mailgun-password
SMTP_HOST=smtp.mailgun.org
SMTP_PORT=587
SMTP_SECURE=false
```

### **6. Custom SMTP Server**

```env
EMAIL_USER=your-email@yourdomain.com
EMAIL_PASS=your-password
SMTP_HOST=mail.yourdomain.com
SMTP_PORT=587
SMTP_SECURE=false
```

## 🚀 **Quick Setup**

1. **Create your `.env` file:**

   ```bash
   cd backend
   cp env.example .env
   ```

2. **Edit `.env` with your chosen provider settings**

3. **Start the backend:**
   ```bash
   npm run dev
   ```

## 🔧 **Port & Security Settings**

| Port | Security | Use Case                      |
| ---- | -------- | ----------------------------- |
| 587  | false    | STARTTLS (Recommended)        |
| 465  | true     | SSL/TLS                       |
| 25   | false    | Unencrypted (Not recommended) |

## ✅ **Testing**

1. Start backend: `npm run dev`
2. Start frontend: `npm run dev`
3. Fill contact form
4. Check your email inbox

## 🛠️ **Troubleshooting**

**Common Issues:**

- **Authentication failed**: Check username/password
- **Connection timeout**: Check SMTP host/port
- **TLS errors**: Try `SMTP_SECURE=false` with port 587

**Debug Mode:**
Add this to your `.env` for detailed logs:

```env
DEBUG=nodemailer:*
```

## 📝 **Recommended Providers**

1. **Gmail** - Free, reliable, easy setup
2. **SendGrid** - Professional, high deliverability
3. **Mailgun** - Developer-friendly, good for production
4. **Outlook** - Good alternative to Gmail

Choose the provider that best fits your needs!
