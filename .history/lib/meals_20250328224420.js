import sql from 'better-sqlite3';
import path from 'path';

// Ensure the correct database path is used
const db = sql(path.resolve(__dirname, 'meals.db'));

export async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve, 2000));  // Optional: simulate delay
    return db.prepare('SELECT * FROM meals').all();  // Added spaces around '*' for clarity
}
