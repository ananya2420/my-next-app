const sql = require('better-sqlite3')
const db = sql('meals.db');

const dummyMeals=[
    {
        title:'Juicy Cheese Burger',
        slug: 'juicy-cheese-burger',
        image: '/im'
    }
]