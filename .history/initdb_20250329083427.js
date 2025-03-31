const sql = require('better-sqlite3')
const db = sql('meals.db');

const dummyMeals=[
    {
        title:'Juicy Cheese Burger',
        slug: 'juicy-cheese-burger',
        image: '/images/burger.jpg'
        summary:
        'A mouth-watering burger with a juicy beef patty and melted cheese, served in a soft bun.',

    }
]