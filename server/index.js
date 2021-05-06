const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const app = express();

const PORT = 5000 || process.env.PORT;

const keys = require('./keys');
const { Pool } = require('pg');

const pgClient = new Pool({
    user: keys.pgUser,
    host: keys.pgHost,
    database: keys.pgDatabase,
    password: keys.pgPassword,
    port: keys.pgPort,
});

pgClient.on('connect', (client) => {
    client
        .query('CREATE TABLE IF NOT EXISTS values (number INT)')
        .catch((err) => console.error(err));
});

app.use(express.json());
app.use(cors());
app.use(logger('tiny'));

app.get('/', async (req, res) => {
    const values = await pgClient.query('SELECT * from values');
    res.send(values.rows);
});

app.get('/add', async (req, res) => {
    const response = await pgClient.query(
        `INSERT INTO values values (${Math.floor(Math.random() * 10)})`
    );

    res.send(response);
});

app.listen(PORT, () => {
    console.log(`Listening to ${PORT}`);
});
