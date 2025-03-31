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
