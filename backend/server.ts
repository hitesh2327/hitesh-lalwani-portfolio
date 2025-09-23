import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { sendEmail } from "./services/emailService";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({ status: "OK", message: "Backend server is running" });
});

// Email endpoint
app.post("/api/send-email", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email, and message are required",
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email format",
      });
    }

    // Send email
    await sendEmail({
      fromName: name,
      fromEmail: email,
      message: message,
    });

    res.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({
      success: false,
      message: "Failed to send email. Please try again later.",
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Backend server running on port ${PORT}`);
  console.log(
    `📧 Email service ready at http://localhost:${PORT}/api/send-email`
  );
});

