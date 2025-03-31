import Database from 'better-sqlite3';

const db = new Database('database.sqlite'); // Ensure this points to the correct file

export default db;
