
import sql from 'better-sqlite3';

const db = sql('meals.db');

export async function getMeals(){
    await new promise((resolve)=>setTimeout(resolve,5000));

   return db.prepare('SELECT*FROM meals').all();


}

export function getMeal(slug){


}