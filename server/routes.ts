import type { Express } from "express";
import { createServer } from "http";

export async function registerRoutes(app: Express) {
  const server = createServer(app);

  // API routes for your spice website
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", message: "Amutham Masala API is running" });
  });

  // Contact form endpoint
  app.post("/api/contact", (req, res) => {
    const { name, email, phone, subject, message } = req.body;
    
    // Here you would normally save to database or send email
    // For now, just return success
    console.log("Contact form submission:", { name, email, subject });
    
    res.json({ 
      success: true, 
      message: "Thank you for your message! We will get back to you soon." 
    });
  });

  // Products endpoint (placeholder for future use)
  app.get("/api/products", (req, res) => {
    res.json({ 
      message: "Products endpoint - ready for integration",
      categories: ["Spice Powders", "Whole Spices", "Masala Blends", "Specialty Items"]
    });
  });

  return server;
}