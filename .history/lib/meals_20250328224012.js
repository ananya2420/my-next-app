export function getMeals(){
    //await new Promise((resolve) => setTimeout(resolve, 2000));
    return db.prepare('SELECT * FROM meals').all();  // Added spaces around '*' for clarity
  }
  