const sql = require('better-sqlite3');
const db = sql('meals.db');

export async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve, 5000));

    const meals = db.prepare('SELECT * FROM meals').all();

    //throw new Error('Loading meals page');

    return Array.isArray(meals) ? meals : []; // ✅ Ensure meals is always an array
}
export async function getMeal(slug){
    return db.prepare('SELECT*FROM meals ')

}