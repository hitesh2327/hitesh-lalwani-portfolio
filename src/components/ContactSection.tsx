import { motion } from "framer-motion";
import { useState, type FC, type FormEvent } from "react";

const IconGithub: FC = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-6 h-6"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 .5a12 12 0 00-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.35-1.76-1.35-1.76-1.1-.75.08-.74.08-.74 1.22.09 1.86 1.26 1.86 1.26 1.08 1.85 2.83 1.31 3.52 1 .11-.79.42-1.31.77-1.61-2.67-.3-5.47-1.33-5.47-5.92 0-1.31.47-2.38 1.25-3.22-.13-.31-.54-1.55.12-3.23 0 0 1.02-.33 3.34 1.23a11.6 11.6 0 016.08 0c2.32-1.56 3.34-1.23 3.34-1.23.66 1.68.25 2.92.12 3.23.78.84 1.25 1.91 1.25 3.22 0 4.6-2.8 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.82.58A12 12 0 0012 .5z" />
  </svg>
);

const IconLinkedIn: FC = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-6 h-6"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM7.12 20.45H4.56V9.32h2.56v11.13zM5.84 7.84c-.82 0-1.48-.67-1.48-1.48 0-.82.66-1.48 1.48-1.48s1.48.66 1.48 1.48c0 .82-.66 1.48-1.48 1.48zM20.45 20.45h-2.55v-5.42c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.07 1.4-2.07 2.85v5.52h-2.56V9.32h2.45v1.52h.03c.34-.65 1.18-1.33 2.43-1.33 2.6 0 3.08 1.71 3.08 3.93v7.01z" />
  </svg>
);

const ContactSection: FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ [k: string]: string }>({});
  const [sent, setSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const validate = () => {
    const e: { [k: string]: string } = {};
    if (!form.name.trim()) e.name = "Required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Invalid email";
    if (form.message.trim().length < 10) e.message = "Min 10 characters";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    setError("");

    try {
      console.log("form", form);

      const response = await fetch(
        `${
          import.meta.env.VITE_BACKEND_BASE_URL ||
          "https://hitesh-lalwani-portfolio-backend.onrender.com/"
        }api/send-email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            message: form.message,
          }),
        }
      );

      const result = await response.json();
      console.log("result", result);

      if (!response.ok) {
        throw new Error(result.message || "Failed to send email");
      }

      setSent(true);
      setForm({ name: "", email: "", message: "" }); // Clear form
      setTimeout(() => setSent(false), 3000);
    } catch (err) {
      console.error("Email sending failed:", err);
      setError(
        err instanceof Error
          ? err.message
          : "Failed to send message. Please try again or contact me directly."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative section-padding py-20 md:py-28">
      <div className="container-max">
        <div className="mb-10 text-center">
          <p className="text-champagne uppercase tracking-widest text-xs sm:text-sm mb-3">
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-fraunces">
            Let's work together
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form */}
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="glass-effect rounded-2xl border border-white/10 p-4 sm:p-6"
          >
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm text-muted-gray mb-1">
                  Name
                </label>
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-xl bg-white/5 border border-white/10 focus:border-champagne/60 outline-none px-4 py-3 text-sm sm:text-base"
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="text-xs text-red-400 mt-1">{errors.name}</p>
                )}
              </div>
              <div>
                <label className="block text-sm text-muted-gray mb-1">
                  Email
                </label>
                <input
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-xl bg-white/5 border border-white/10 focus:border-champagne/60 outline-none px-4 py-3 text-sm sm:text-base"
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p className="text-xs text-red-400 mt-1">{errors.email}</p>
                )}
              </div>
              <div>
                <label className="block text-sm text-muted-gray mb-1">
                  Message
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  rows={5}
                  className="w-full rounded-xl bg-white/5 border border-white/10 focus:border-champagne/60 outline-none px-4 py-3 resize-y text-sm sm:text-base"
                  placeholder="Tell me a bit about your project..."
                />
                {errors.message && (
                  <p className="text-xs text-red-400 mt-1">{errors.message}</p>
                )}
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="relative px-6 py-3 rounded-full bg-champagne text-charcoal font-medium hover:bg-champagne-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base w-full sm:w-auto"
                >
                  {isLoading ? "Sending..." : sent ? "Sent!" : "Send Message"}
                </button>
                <p className="text-xs text-muted-gray text-center sm:text-left">
                  Typically respond within 24 hours
                </p>
              </div>
              {error && (
                <div className="mt-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <p className="text-sm text-red-400">{error}</p>
                </div>
              )}
            </div>
          </motion.form>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-effect rounded-2xl border border-white/10 p-4 sm:p-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="font-fraunces text-xl sm:text-2xl mb-2">Connect</h3>
              <p className="text-sm sm:text-base text-muted-gray mb-4 text-justify">
                Find me online and say hello.
              </p>
              <div className="mb-6 space-y-2">
                <p className="text-xs sm:text-sm text-muted-gray break-words">
                  📧 honeylalwani1999@gmail.com
                </p>
                <p className="text-xs sm:text-sm text-muted-gray">📱 +91 6376580714</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href="https://github.com/hitesh2327/"
                  target="_blank"
                  className="group inline-flex items-center gap-2 text-ivory/80 hover:text-ivory text-sm sm:text-base"
                >
                  <span className="text-champagne group-hover:text-champagne-light transition-colors">
                    <IconGithub />
                  </span>
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/hitesh-lalwani-543565168"
                  target="_blank"
                  className="group inline-flex items-center gap-2 text-ivory/80 hover:text-ivory text-sm sm:text-base"
                >
                  <span className="text-champagne group-hover:text-champagne-light transition-colors">
                    <IconLinkedIn />
                  </span>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
            <div className="mt-8">
              <div className="h-px bg-gradient-to-r from-transparent via-champagne to-transparent mb-4" />
              <p className="text-xs text-muted-gray">
                © {new Date().getFullYear()} Hitesh Lalwani
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
