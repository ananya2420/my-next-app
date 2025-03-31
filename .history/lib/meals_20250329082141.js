import sql from 'better-sqlite3';
import fs from 'fs';

const dbPath = 'meals.db';

if (!fs.existsSync(dbPath)) {
    throw new Error(`Database file ${dbPath} does not exist. Please create it.`);
}

const db = sql(dbPath);

export async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve, 5000));

    try {
        return db.prepare('SELECT * FROM meals').all();
    } catch (error) {
        console.error("Database error:", error);
        return [];
    }
}

export function getMeal(slug) {
    try {
        return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
    } catch (error) {
        console.error("Database error:", error);
        return null;
    }
}
