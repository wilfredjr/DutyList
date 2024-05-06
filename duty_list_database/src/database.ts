const {Client} = require('pg')
const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "admin",
    database: "postgres"
})

interface errorReturn{
    message: string
}

interface resultReturn{
    rows: (string | number)[]
}

client.connect();

let db_query = "SELECT * FROM duties";

client.query(db_query, (err: errorReturn, res: resultReturn) => {
    if(!err){
        console.log(res.rows);
    }else{
        console.log(err.message);
    }
    client.end;
});