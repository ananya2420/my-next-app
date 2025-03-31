import Database from 'better-sqlite3';
import path from 'path';

const db = new Database(path.resolve(__dirname, 'meals.db'));

// Log existing tables to confirm that the meals table exists
const tables = db.prepare("SELECT name FROM sqlite_master WHERE type='table'").all();
console.log("Existing tables before creation:", tables);

// Create meals table if it doesn't exist
db.exec(`
  CREATE TABLE IF NOT EXISTS meals (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    image TEXT NOT NULL,
    summary TEXT NOT NULL,
    instructions TEXT NOT NULL,
    creator TEXT NOT NULL,
    creator_email TEXT NOT NULL
  )
`);

console.log("Meals table created (if not exists).");

// Log tables after creation
const updatedTables = db.prepare("SELECT name FROM sqlite_master WHERE type='table'").all();
console.log("Existing tables after creation:", updatedTables);

// Insert sample meal if needed (optional)
const insertMeal = db.prepare(`
  INSERT INTO meals (title, slug, image, summary, instructions, creator, creator_email) 
  VALUES (@title, @slug, @image, @summary, @instructions, @creator, @creator_email)
`);

const newMeal = {
  title: "Spicy Chicken Wings",
  slug: "spicy-chicken-wings",
  image: "/images/chicken-wings.jpg",
  summary: "Crispy and spicy chicken wings.",
  instructions: "Marinate, fry, and enjoy!",
  creator: "Jane Doe",
  creator_email: "jane@example.com"
};

insertMeal.run(newMeal);
console.log("Sample meal inserted.");
