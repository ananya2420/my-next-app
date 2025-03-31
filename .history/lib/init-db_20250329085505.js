import sql from 'better-sqlite3';

const db = sql('meals.db');

// Create the meals table
db.prepare(`
    CREATE TABLE IF NOT EXISTS meals (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        slug TEXT NOT NULL UNIQUE,
        title TEXT NOT NULL,
        image TEXT NOT NULL,
        summary TEXT NOT NULL,
        instructions TEXT NOT NULL,
        creator TEXT NOT NULL,
        creator_email TEXT NOT NULL
    )
`).run();

const dummyMeals = [
    {
        title: 'Juicy Cheese Burger',
        slug: 'juicy-cheese-burger',
        image: '/images/burger.jpg',
        summary: 'A mouth-watering burger with a juicy beef patty and melted cheese.',
        instructions: '1. Mix ground beef with salt and pepper.\n2. Cook in a pan.\n3. Assemble the burger.\n4. Serve hot.',
        creator: 'John Doe',
        creator_email: 'johndoe@example.com',
    },
    {
        title: 'Spicy Curry',
        slug: 'spicy-curry',
        image: '/images/curry.jpg',
        summary: 'A rich and spicy curry, infused with exotic spices and creamy coconut milk.',
        instructions: '1. Chop vegetables.\n2. Sauté vegetables.\n3. Add curry paste.\n4. Simmer with coconut milk.\n5. Serve with rice.',
        creator: 'Max Schwarz',
        creator_email: 'max@example.com',
    }
];

// Insert meals if not already present
const stmt = db.prepare(`
    INSERT OR IGNORE INTO meals (slug, title, image, summary, instructions, creator, creator_email) 
    VALUES (@slug, @title, @image, @summary, @instructions, @creator, @creator_email)
`);

for (const meal of dummyMeals) {
    stmt.run(meal);
}

console.log("✅ Database initialized with meals.");
