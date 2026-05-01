import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import multer from "multer";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();
console.log("Dotenv config attempt finished. SMTP_USER exists:", !!process.env.SMTP_USER);
if (process.env.SMTP_USER) {
  console.log("SMTP_USER is:", process.env.SMTP_USER);
}

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
  app.use(express.urlencoded({ extended: true }));

  // Debug Logger - Log everything
  app.use((req, res, next) => {
    console.log(`[DEBUG] ${new Date().toISOString()} - ${req.method} ${req.url}`);
    console.log(`[DEBUG] Headers: ${JSON.stringify(req.headers)}`);
    next();
  });

  // Email Transporter Helper
  const getTransporter = () => {
    const user = process.env.SMTP_USER || "hr@sigmanext.ai";
    const pass = process.env.SMTP_PASS || "Welcome26@4";
    const host = process.env.SMTP_HOST || "smtp.hostinger.com";
    const port = parseInt(process.env.SMTP_PORT || "465");
    const secure = process.env.SMTP_SECURE !== "false";

    console.log(`Initializing transporter for ${user} on ${host}:${port} (secure: ${secure})`);

    return nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
      connectionTimeout: 15000,
      greetingTimeout: 15000,
      socketTimeout: 15000,
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
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", time: new Date().toISOString() });
  });

  // Test route to verify API is reachable
  app.get("/api/test", (req, res) => {
    res.json({ message: "API is working", time: new Date().toISOString() });
  });

  // Test route to send a direct email
  app.get("/api/test-email", async (req, res) => {
    try {
      console.log("[API] Manual trigger: Sending test email...");
      const mailOptions = {
        from: `"SigmaNext Test" <${process.env.SMTP_USER || "hr@sigmanext.ai"}>`,
        to: "hr@sigmanext.ai",
        subject: "Direct SMTP Test - SigmaNext",
        text: "If you are reading this, the SMTP configuration on your SigmaNext website is working correctly!",
      };

      await getTransporter().sendMail(mailOptions);
      res.json({ success: true, message: "Test email sent successfully to hr@sigmanext.ai" });
    } catch (error) {
      console.error("[API] Test Email Error:", error);
      res.status(500).json({ 
        success: false, 
        error: error instanceof Error ? error.message : "Failed to send test email" 
      });
    }
  });

  // Careers Submission
  app.post("/api/careers", (req, res, next) => {
    console.log("[API] Careers POST received");
    upload.single("resume")(req, res, (err) => {
      if (err instanceof multer.MulterError) {
        console.error("[API] Multer Error:", err);
        return res.status(400).json({ error: `Upload error: ${err.message}` });
      } else if (err) {
        console.error("[API] Upload Error:", err);
        return res.status(500).json({ error: `Unknown upload error: ${err.message}` });
      }
      next();
    });
  }, async (req, res) => {
    try {
      const { fullName, email, position, coverLetter } = req.body;
      const file = req.file;

      if (!fullName || !email || !position) {
        return res.status(400).json({ error: "Missing required fields: fullName, email, or position." });
      }

      console.log(`[API] Processing application for ${fullName} (${position})`);

      const mailOptions = {
        from: `"SigmaNext Careers" <${process.env.SMTP_USER || "hr@sigmanext.ai"}>`,
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

      await getTransporter().sendMail(mailOptions);
      console.log(`[API] Application from ${fullName} mailed to hr@sigmanext.ai`);
      
      res.status(200).json({ 
        success: true,
        message: "Thank you! Your application has been submitted successfully to our HR team." 
      });
    } catch (error) {
      console.error("[API] Career Submission Error:", error);
      res.status(500).json({ 
        error: error instanceof Error ? error.message : "Failed to submit application. Please try again later." 
      });
    }
  });

  // Contact Form
  app.post("/api/contact", async (req, res) => {
    try {
      const { firstName, lastName, email, message } = req.body;
      console.log(`[API] Processing contact message from ${firstName} ${lastName}`);
      
      if (!firstName || !email || !message) {
        return res.status(400).json({ error: "Missing required fields: firstName, email, or message." });
      }

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

      await getTransporter().sendMail(mailOptions);
      console.log(`[API] Contact message from ${firstName} mailed to contact@sigmanext.ai`);
      
      res.status(200).json({ 
        success: true,
        message: "Your message has been sent successfully. We will get back to you shortly." 
      });
    } catch (error) {
      console.error("[API] Contact Form Error:", error);
      res.status(500).json({ 
        error: error instanceof Error ? error.message : "Failed to send message. Please try again later." 
      });
    }
  });

  // API 404 handler - Catch missed API routes BEFORE site contents
  app.all("/api/*", (req, res) => {
    console.warn(`[API] 404 hit for ${req.method} ${req.url}`);
    res.status(404).json({ 
      error: "Not Found", 
      message: `API route ${req.method} ${req.url} does not exist.`
    });
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

  // Global Error Handler to ensure JSON responses for any unexpected server errors
  app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error("Unhandled Global Error:", err);
    res.status(err.status || 500).json({
      error: err.message || "An unexpected server error occurred.",
      details: process.env.NODE_ENV !== 'production' ? err.stack : undefined
    });
  });

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
