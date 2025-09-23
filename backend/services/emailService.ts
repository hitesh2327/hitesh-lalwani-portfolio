import nodemailer from "nodemailer";

interface EmailData {
  fromName: string;
  fromEmail: string;
  message: string;
}

// Create transporter using SMTP or fallback to Ethereal
const createTransporter = async () => {
  if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
    // ✅ Use real SMTP credentials
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true", // true for 465, false for 587
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
  } else {
    // 🧪 Fallback to Ethereal (testing only)
    const testAccount = await nodemailer.createTestAccount();
    console.log("⚠️ Using Ethereal test account:", testAccount.user);

    return nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });
  }
};

export const sendEmail = async (data: EmailData) => {
  const transporter = await createTransporter();

  const mailOptions = {
    from: `"${data.fromName}" <${
      process.env.EMAIL_USER || "no-reply@test.com"
    }>`,
    to: process.env.EMAIL_USER || "test@ethereal.email",
    replyTo: data.fromEmail,
    subject: `New Contact Form Message from ${data.fromName}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333; border-bottom: 2px solid #f0f0f0; padding-bottom: 10px;">
          New Contact Form Message
        </h2>
        
        <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>From:</strong> ${data.fromName}</p>
          <p><strong>Email:</strong> ${data.fromEmail}</p>
          <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
        </div>
        
        <div style="background: white; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <h3 style="color: #333; margin-top: 0;">Message:</h3>
          <p style="line-height: 1.6; color: #555;">${data.message.replace(
            /\n/g,
            "<br>"
          )}</p>
        </div>
        
        <div style="margin-top: 20px; padding: 15px; background: #e8f4fd; border-radius: 8px;">
          <p style="margin: 0; color: #666; font-size: 14px;">
            This message was sent from your portfolio contact form.
          </p>
        </div>
      </div>
    `,
    text: `
New Contact Form Message

From: ${data.fromName}
Email: ${data.fromEmail}
Date: ${new Date().toLocaleString()}

Message:
${data.message}

---
This message was sent from your portfolio contact form.
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);

    console.log("✅ Email sent successfully to:", mailOptions.to);

    // If Ethereal, print preview URL
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.log("📩 Preview URL:", nodemailer.getTestMessageUrl(info));
    }
  } catch (error) {
    console.error("❌ Error sending email:", error);
    throw error;
  }
};
