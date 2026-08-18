import express from "express";
import { createServer as createViteServer } from "vite";
import Database from "better-sqlite3";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const db = new Database("chatcart.db");

// Initialize Database
db.exec(`
  CREATE TABLE IF NOT EXISTS businesses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    slug TEXT UNIQUE,
    name TEXT,
    logo_url TEXT,
    messenger_id TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS categories (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    business_id INTEGER,
    name TEXT,
    sort_order INTEGER,
    FOREIGN KEY(business_id) REFERENCES businesses(id)
  );

  CREATE TABLE IF NOT EXISTS menu_items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    category_id INTEGER,
    name TEXT,
    description TEXT,
    price REAL,
    image_url TEXT,
    is_popular BOOLEAN DEFAULT 0,
    is_available BOOLEAN DEFAULT 1,
    FOREIGN KEY(category_id) REFERENCES categories(id)
  );

  -- Initial Demo Data
  INSERT OR IGNORE INTO businesses (id, name, slug, messenger_id) VALUES (1, 'The Daily Grind', 'daily-grind', 'dailygrindcafe');
  INSERT OR IGNORE INTO categories (id, business_id, name, sort_order) VALUES (1, 1, 'Coffee', 1);
  INSERT OR IGNORE INTO categories (id, business_id, name, sort_order) VALUES (2, 1, 'Pastries', 2);
  INSERT OR IGNORE INTO menu_items (name, category_id, description, price, image_url, is_popular) VALUES 
    ('Caramel Macchiato', 1, 'Freshly steamed milk with vanilla-flavored syrup marked with espresso and topped with a caramel drizzle.', 4.95, 'https://picsum.photos/seed/coffee1/400/400', 1),
    ('Iced Americano', 1, 'Espresso shots topped with cold water produce a light layer of crema, then served over ice.', 3.45, 'https://picsum.photos/seed/coffee2/400/400', 0),
    ('Butter Croissant', 2, 'Classic flaky, buttery pastry.', 3.25, 'https://picsum.photos/seed/pastry1/400/400', 1);
`);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.get("/api/businesses/:slug", (req, res) => {
    const { slug } = req.params;
    const business = db.prepare("SELECT * FROM businesses WHERE slug = ?").get(slug);
    if (!business) return res.status(404).json({ error: "Business not found" });

    const categories = db.prepare("SELECT * FROM categories WHERE business_id = ? ORDER BY sort_order").all(business.id);
    const menuItems = db.prepare(`
      SELECT m.*, c.id as category_id 
      FROM menu_items m 
      JOIN categories c ON m.category_id = c.id 
      WHERE c.business_id = ?
    `).all(business.id);

    res.json({ business, categories, menuItems });
  });

  // Admin Routes (Simplified for demo)
  app.post("/api/admin/setup", (req, res) => {
    const { name, slug, messenger_id } = req.body;
    try {
      const info = db.prepare("INSERT INTO businesses (name, slug, messenger_id) VALUES (?, ?, ?)").run(name, slug, messenger_id);
      res.json({ id: info.lastInsertRowid });
    } catch (e) {
      res.status(400).json({ error: "Slug already exists" });
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
    app.use(express.static(path.join(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
