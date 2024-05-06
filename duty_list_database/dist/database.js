"use strict";
const { Client } = require('pg');
// import Client from 'pg';
const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "admin",
    database: "postgres"
});
client.connect();
let db_query = "SELECT * FROM duties";
client.query(db_query, (err, res) => {
    if (!err) {
        console.log(res.rows);
    }
    else {
        console.log(err.message);
    }
    client.end;
});
