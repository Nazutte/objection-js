const { Pool } = require('pg');

const con = new Pool({
    user: 'postgres',
    database: 'objection_tutorial',
    password: 'password',
    port: 5433,
    host: 'localhost',
})

function connectToDb(){
    con.connect(function(err) {
    if (err) throw err;
        console.log('Connected to the "objection_tutorial" database!');
    });
}

connectToDb();