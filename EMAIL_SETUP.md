# Email Setup Instructions

This portfolio now includes email functionality using EmailJS. Follow these steps to set it up:

## 1. Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Set up Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

## 3. Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

```
Subject: New Contact Form Message from {{from_name}}

From: {{from_name}} ({{from_email}})
Reply-To: {{reply_to}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Note down your **Template ID**

## 4. Get Public Key

1. Go to "Account" → "General"
2. Copy your **Public Key**

## 5. Configure Environment Variables

Create a `.env` file in your project root with:

```
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

## 6. Test the Setup

1. Run `npm run dev`
2. Fill out the contact form
3. Click "Send Message"
4. Check your email for the message

## Troubleshooting

- Make sure all environment variables are set correctly
- Check the browser console for any error messages
- Verify your EmailJS service is active
- Ensure your email template uses the correct variable names

## Security Note

The public key is safe to expose in client-side code, but keep your service and template IDs secure and don't commit them to public repositories.

