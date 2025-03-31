
import slugify from 'slugify';
import xss from 'xss';

const sql = require('better-sqlite3');
const db = sql('meals.db');

// Function to get all meals
export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  const meals = db.prepare('SELECT * FROM meals').all();

  return Array.isArray(meals) ? meals : []; // ✅ Ensure meals is always an array
}

// Function to get a meal by slug
export async function getMeal(slug) {
  // Awaiting this is unnecessary since better-sqlite3 does not return a promise
  // You can directly return the result
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);  // Fixed query syntax
}
export function saveMeal(meal){
  const slug = slugify(meal.title,{lowe:true})

}