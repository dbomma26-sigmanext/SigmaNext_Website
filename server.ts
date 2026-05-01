import { createApp } from "./src/app.js";

async function start() {
  const app = await createApp();
  const PORT = parseInt(process.env.PORT || "3000", 10);

  // Local development only: Add Vite middleware
  if (process.env.NODE_ENV !== "production" && !process.env.VERCEL) {
    try {
      const { createServer: createViteServer } = await import("vite");
      const vite = await createViteServer({
        server: { middlewareMode: true },
        appType: "spa",
      });
      app.use(vite.middlewares);
      console.log("[DEV] Vite middleware attached");
    } catch (e) {
      console.warn("[DEV] Vite not found, skipping middleware");
    }
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

start();
