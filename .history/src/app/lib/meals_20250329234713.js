import fs from 'node:fs/promises';
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

  const bufferedImage = Buffer.from(await meal.image.arrayBuffer());
  await fs.writeFile(imagePath, bufferedImage);

  meal.image = `/images/${fileName}`;

  if (!meal.creator) {
    throw new Error("Creator field is required.");
  }

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

// ✅ Fetch all meals
export async function getMeals() {
  const stmt = db.prepare("SELECT * FROM meals");
  return stmt.all();
}

// ✅ Fetch a single meal by slug
export async function getMeal(slug) {
  const stmt = db.prepare("SELECT * FROM meals WHERE slug = ?");
  return stmt.get(slug);
}
