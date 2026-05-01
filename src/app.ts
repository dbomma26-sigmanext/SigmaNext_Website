import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import multer from "multer";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function createApp() {
  const app = express();

  // Multer setup for file uploads
  const upload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
  });

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Email Transporter Helper
  const getTransporter = () => {
    const user = process.env.SMTP_USER || "hr@sigmanext.ai";
    const pass = process.env.SMTP_PASS || "Welcome26@4";
    const host = process.env.SMTP_HOST || "smtp.hostinger.com";
    const port = parseInt(process.env.SMTP_PORT || "465");
    const secure = process.env.SMTP_SECURE !== "false";

    return nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });
  };

  // API Routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", vercel: !!process.env.VERCEL });
  });

  app.get("/api/test", (req, res) => {
    res.json({ message: "API is working", env: process.env.NODE_ENV });
  });

  // Careers Submission
  app.post("/api/careers", (req, res, next) => {
    upload.single("resume")(req, res, (err) => {
      if (err) return res.status(err instanceof multer.MulterError ? 400 : 500).json({ error: err.message });
      next();
    });
  }, async (req, res) => {
    try {
      const { fullName, email, phone, position, coverLetter } = req.body;
      const file = req.file;

      if (!fullName || !email || !position) return res.status(400).json({ error: "Missing required fields." });

      const authUser = process.env.SMTP_USER || "hr@sigmanext.ai";
      const mailOptions = {
        from: `"SigmaNext Careers" <${authUser}>`,
        to: "hr@sigmanext.ai",
        replyTo: email,
        subject: `[Website Career Submission] ${position} - ${fullName}`,
        text: `
--------------------------------------------------
NEW CAREER APPLICATION RECEIVED FROM WEBSITE
--------------------------------------------------

Candidate Details:
- Name: ${fullName}
- Email: ${email}
- Phone: ${phone || "Not provided"}
- Position applied for: ${position}

Message / Cover Letter:
${coverLetter || "No cover letter provided."}

--------------------------------------------------
This email was automatically generated from the SigmaNext website careers form.
        `,
        attachments: file ? [{ filename: file.originalname, content: file.buffer }] : [],
      };

      await getTransporter().sendMail(mailOptions);
      res.status(200).json({ success: true, message: "Application submitted successfully." });
    } catch (error) {
      console.error("[API] Careers Error:", error);
      res.status(500).json({ error: "Failed to send email.", details: error instanceof Error ? error.message : String(error) });
    }
  });

  // Contact Form
  app.post("/api/contact", async (req, res) => {
    try {
      const { firstName, lastName, email, phone, message } = req.body;
      if (!firstName || !email || !message) return res.status(400).json({ error: "Missing required fields." });

      const authUser = process.env.SMTP_USER || "hr@sigmanext.ai";
      const mailOptions = {
        from: `"SigmaNext Website Contact" <${authUser}>`,
        to: "contact@sigmanext.ai",
        replyTo: email,
        subject: `[Website Contact Form] Message from ${firstName} ${lastName}`,
        text: `
--------------------------------------------------
NEW CONTACT MESSAGE RECEIVED FROM WEBSITE
--------------------------------------------------

Sender Details:
- Name: ${firstName} ${lastName}
- Email: ${email}
- Phone: ${phone || "Not provided"}

Message:
${message}

--------------------------------------------------
This email was automatically generated from the SigmaNext website contact form.
        `,
      };

      await getTransporter().sendMail(mailOptions);
      res.status(200).json({ success: true, message: "Message sent successfully." });
    } catch (error) {
      console.error("[API] Contact Error:", error);
      res.status(500).json({ error: "Failed to send message.", details: error instanceof Error ? error.message : String(error) });
    }
  });

  // Static files handling
  if (process.env.NODE_ENV === "production" || process.env.VERCEL) {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get(/^(?!\/api).*/, (req, res) => {
      res.sendFile(path.join(distPath, "index.html"), (err) => {
        if (err) res.status(404).send("Build production files first.");
      });
    });
  } else {
    // Vite dev mode will be handled by the runner
  }

  return app;
}
