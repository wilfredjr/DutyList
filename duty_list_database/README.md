# Project - Duty List Database
Important: Install dependencies by running `npm install` in project directory

## PostgreSQL

Change the values of your PostgreSQL client in `/dist/database.js` if it's different from the ones below:
```
const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "admin",
    database: "postgres"
})
```
In PostgreSQL run this script
```
CREATE TABLE duties (
  id INT PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL
);
```

Then populate the table with
```
INSERT INTO duties (id, name, description)
VALUES (1, 'Employee Login', 'Employee login for the day'),
(2, 'Check emails', 'Check emails for the day');
```

## Available Scripts

In the project directory, you can run: `node ./dist/database.js`