import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import multer from "multer";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Multer setup for file uploads
  const upload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
  });

  app.use(express.json());

  // Email Transporter Helper
  const getTransporter = () => {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.hostinger.com",
      port: parseInt(process.env.SMTP_PORT || "465"),
      secure: process.env.SMTP_SECURE !== "false",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  };

  // Googlebot Special Handler (Security Bypass for Crawlers)
  // Only serve minimal HTML if we detect a bot, otherwise let Vite handle it
  app.get("/", async (req, res, next) => {
    const userAgent = req.headers["user-agent"] || "";
    if (userAgent.toLowerCase().includes("googlebot") || userAgent.toLowerCase().includes("google-site-verification")) {
      return res.status(200).send(`
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="google-site-verification" content="Ps_g8jHlR9vYoib7c9gCuEVXoYobpK9OqoamqTageMI" />
    <title>SigmaNext | Your Partner In Intelligent Transformation</title>
</head>
<body><div id="root"></div></body>
</html>
      `);
    }
    next();
  });

  app.head("/", (req, res) => {
    res.setHeader("X-Google-Site-Verification", "Ps_g8jHlR9vYoib7c9gCuEVXoYobpK9OqoamqTageMI");
    res.status(200).end();
  });

  // Global SEO Headers
  app.use((req, res, next) => {
    res.setHeader("X-Robots-Tag", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
    next();
  });

  // Google Verification Route
  app.get("/googlePs_g8jHlR9vYoib7c9gCuEVXoYobpK9OqoamqTageMI.html", (req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.send("google-site-verification: googlePs_g8jHlR9vYoib7c9gCuEVXoYobpK9OqoamqTageMI.html");
  });

  // Sitemap & Robots Handler (Explicit Content Types for Search Console)
  app.get("/sitemap.xml", (req, res) => {
    res.header("Content-Type", "application/xml");
    res.sendFile(path.join(__dirname, "public", "sitemap.xml"));
  });

  app.get("/robots.txt", (req, res) => {
    res.header("Content-Type", "text/plain");
    res.sendFile(path.join(__dirname, "public", "robots.txt"));
  });

  // API Routes
  app.post("/api/careers", upload.single("resume"), async (req, res) => {
    try {
      const { fullName, email, position, coverLetter } = req.body;
      const file = req.file;

      console.log(`Received application from ${fullName} for ${position}`);

      const mailOptions = {
        from: `"SigmaNext Careers" <${process.env.SMTP_USER || "careers@sigmanext.ai"}>`,
        to: "hr@sigmanext.ai",
        subject: `New Career Application: ${position} - ${fullName}`,
        text: `
          New job application received via SigmaNext website:
          
          Name: ${fullName}
          Email: ${email}
          Position: ${position}
          Cover Letter: ${coverLetter || "Not provided"}
          
          Date: ${new Date().toLocaleString()}
        `,
        attachments: file ? [
          {
            filename: file.originalname,
            content: file.buffer,
          }
        ] : [],
      };

      if (process.env.SMTP_USER && process.env.SMTP_PASS) {
        await getTransporter().sendMail(mailOptions);
        console.log(`Email sent successfully to hr@sigmanext.ai from ${fullName}`);
      } else {
        console.warn("SMTP credentials not configured. Email NOT sent.");
      }
      
      res.status(200).json({ message: "Application submitted successfully" });
    } catch (error) {
      console.error("Error processing application:", error);
      res.status(500).json({ error: "Failed to submit application" });
    }
  });

  app.post("/api/contact", async (req, res) => {
    try {
      const { firstName, lastName, email, message } = req.body;
      console.log(`Received contact message from ${firstName} ${lastName}`);
      
      const mailOptions = {
        from: `"SigmaNext Contact" <${process.env.SMTP_USER || "contact@sigmanext.ai"}>`,
        to: "contact@sigmanext.ai",
        subject: `New Contact Message from ${firstName} ${lastName}`,
        text: `
          New contact message received:
          
          Name: ${firstName} ${lastName}
          Email: ${email}
          Message: ${message}
          
          Date: ${new Date().toLocaleString()}
        `,
      };

      if (process.env.SMTP_USER && process.env.SMTP_PASS) {
        await getTransporter().sendMail(mailOptions);
        console.log(`Contact email sent successfully to contact@sigmanext.ai`);
      }
      
      res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
      console.error("Error processing contact message:", error);
      res.status(500).json({ error: "Failed to send message" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
