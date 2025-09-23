// EmailJS Configuration
// Replace these values with your actual EmailJS credentials
// You can get these from https://www.emailjs.com/

export const EMAILJS_CONFIG = {
  serviceId:
    import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_your_service_id",
  templateId:
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_your_template_id",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "your_public_key",
  toEmail: "honeylalwani1999@gmail.com",
};

// EmailJS template variables mapping
export const EMAILJS_TEMPLATE_PARAMS = {
  from_name: "from_name",
  from_email: "from_email",
  message: "message",
  to_email: "to_email",
  reply_to: "reply_to",
};

