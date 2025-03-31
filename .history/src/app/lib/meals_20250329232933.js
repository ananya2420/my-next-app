import fs from 'node:fs';
import slugify from 'slugify';
import xss from 'xss';

const sql = require('better-sqlite3');
const db = sql('meals.db');

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split('.').pop();
  const fileName = `${meal.slug}.${extension}`;
  const imagePath = `public/images/${fileName}`;

  // Save image to the public folder
  const stream = fs.createWriteStream(imagePath);
  const bufferedImage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage));
  stream.end(); // Ensure the stream is closed properly
  meal.image = `/images/${fileName}`;

  // Ensure meal.creator is not undefined or null
  if (!meal.creator) {
    throw new Error("Creator field is required.");
  }

  // Corrected SQL Query (including creator)
  db.prepare(`
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
  `).run(meal);
}
