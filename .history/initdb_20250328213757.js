import Database from 'better-sqlite3';

const db = new Database('meals.db');

// Log existing tables
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

// Insert meal function
const insertMeal = db.prepare(` 
  INSERT INTO meals (title, slug, image, summary, instructions, creator, creator_email) 
  VALUES (@title, @slug, @image, @summary, @instructions, @creator, @creator_email)
`);

function addMeal(meal) {
  try {
    insertMeal.run(meal);
    console.log("Meal inserted successfully!");
  } catch (error) {
    console.error("Error inserting meal:", error.message);
  }
}

// Example meal data
const newMeal = {
  title: "Spicy Chicken Wings",
  slug: "spicy-chicken-wings",
  image: "/images/chicken-wings.jpg",
  summary: "Crispy and spicy chicken wings.",
  instructions: "Marinate, fry, and enjoy!",
  creator: "Jane Doe",
  creator_email: "jane@example.com"
};

// Insert meal
addMeal(newMeal);

// Fetch and print all meals
const meals = db.prepare("SELECT * FROM meals").all();
console.log("All meals:", meals);
