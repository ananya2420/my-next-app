import fs from 'node:fs/promises'; // ✅ Use fs/promises for async operations
import slugify from 'slugify';
import xss from 'xss';
import sql from 'better-sqlite3';

const db = sql('meals.db');

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split('.').pop();
  const fileName = `${meal.slug}.${extension}`;
  const imagePath = `public/images/${fileName}`;

  // ✅ Ensure meal.image is a Buffer (fixing arrayBuffer issue)
  const bufferedImage = Buffer.from(await meal.image.arrayBuffer());

  // ✅ Use fs/promises to write image file properly
  await fs.writeFile(imagePath, bufferedImage);

  // ✅ Update meal.image path
  meal.image = `/images/${fileName}`;

  // ✅ Ensure meal.creator exists
  if (!meal.creator) {
    throw new Error("Creator field is required.");
  }

  // ✅ Use a transaction for safety
  const stmt = db.prepare(`
    INSERT INTO meals
    (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
    )
  `);

  stmt.run(meal);
}

// ✅ FIX: Add getMeals function
export async function getMeals() {
  const stmt = db.prepare("SELECT * FROM meals");
  return stmt.all(); // ✅ Ensure data is returned as an array
}
