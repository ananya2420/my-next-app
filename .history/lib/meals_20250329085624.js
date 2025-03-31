import sql from 'better-sqlite3';

// Initialize database connection
const db = sql('lib/meals.db'); // Ensure correct path

export async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    return db.prepare('SELECT * FROM meals').all();
}

export function getMeal(slug) {
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}
