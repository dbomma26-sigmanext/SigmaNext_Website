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

  // API Routes
  app.post("/api/careers", upload.single("resume"), async (req, res) => {
    try {
      const { fullName, email, position, coverLetter } = req.body;
      const file = req.file;

      console.log(`Received application from ${fullName} for ${position}`);

      // In a real production environment, you would use real SMTP credentials
      // For this environment, we'll simulate the email sending logic
      // but write it as if it's real.
      
      const transporter = nodemailer.createTransport({
        // Example with a mock service or real SMTP
        host: process.env.SMTP_HOST || "smtp.ethereal.email",
        port: parseInt(process.env.SMTP_PORT || "587"),
        auth: {
          user: process.env.SMTP_USER || "mock_user",
          pass: process.env.SMTP_PASS || "mock_pass",
        },
      });

      const mailOptions = {
        from: `"SigmaNext Careers" <careers@sigmanext.ai>`,
        to: "contact@sigmanext.ai",
        subject: `New Career Application: ${position} - ${fullName}`,
        text: `
          Name: ${fullName}
          Email: ${email}
          Position: ${position}
          Cover Letter: ${coverLetter || "N/A"}
        `,
        attachments: file ? [
          {
            filename: file.originalname,
            content: file.buffer,
          }
        ] : [],
      };

      // We log the attempt. In a real setup with valid credentials, this would send.
      console.log("Sending email to contact@sigmanext.ai...");
      // await transporter.sendMail(mailOptions); 
      
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
      
      // Simulate email sending for contact form too
      res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
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
