import express from "express";
import path from "path";
import { existsSync } from "fs";
import compression from "compression";
import helmet from "helmet";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Enable Gzip compression
  app.use(compression());

  // Security headers including HSTS
  app.use(helmet({
    contentSecurityPolicy: false, // Disable CSP if it interferes with Vite/React, or configure it properly
    hsts: {
      maxAge: 31536000, // 1 year in seconds
      includeSubDomains: true,
      preload: true,
    },
  }));

  app.use(express.json());

  // Force HTTPS in production
  app.use((req, res, next) => {
    if (process.env.NODE_ENV === "production") {
      if (req.headers["x-forwarded-proto"] !== "https" && req.hostname !== "localhost") {
        return res.redirect(301, `https://${req.hostname}${req.url}`);
      }
    }
    next();
  });

  // API routes FIRST
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Vite middleware for development
  const isProduction = process.env.NODE_ENV === "production";
  const distExists = existsSync(path.join(process.cwd(), 'dist'));
  
  console.log(`Server Mode: ${isProduction ? 'Production' : 'Development'}`);
  console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
  console.log(`Dist folder exists: ${distExists}`);
  
  if (!isProduction || !distExists) {
    try {
      console.log("Attempting to load Vite middleware...");
      const viteName = "vite";
      const { createServer: createViteServer } = await import(viteName);
      const vite = await createViteServer({
        server: { middlewareMode: true },
        appType: "spa",
      });
      app.use(vite.middlewares);
      console.log("Vite middleware loaded successfully");
    } catch (e) {
      console.error("Failed to load Vite middleware:", e);
      if (distExists) {
        console.log("Falling back to static serving since dist exists");
        serveStatic(app);
      } else {
        console.error("CRITICAL: dist directory does not exist and Vite failed to load. The app will likely show a blank page.");
      }
    }
  } else {
    serveStatic(app);
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT} (Production: ${isProduction})`);
  });
}

function serveStatic(app: express.Express) {
  const distPath = path.resolve(process.cwd(), 'dist');
  console.log(`Setting up static serving from: ${distPath}`);
  
  if (!existsSync(distPath)) {
    console.error(`ERROR: dist directory not found at ${distPath}`);
    return;
  }

  app.use(express.static(distPath, { extensions: ['html'] }));
  
  // SPA fallback
  app.get('*all', (req, res) => {
    const fallbackPath = path.join(distPath, 'fallback.html');
    const indexPath = path.join(distPath, 'index.html');
    
    if (existsSync(fallbackPath)) {
      res.sendFile(fallbackPath);
    } else if (existsSync(indexPath)) {
      res.sendFile(indexPath);
    } else {
      console.error(`ERROR: fallback.html/index.html not found at ${distPath}`);
      res.status(404).send('Not Found');
    }
  });
  
  console.log("Static serving and SPA fallback configured");
}

startServer();
