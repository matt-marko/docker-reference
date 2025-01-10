import express from 'express';
import cors from 'cors';
import pg from 'pg';

const PORT = 1111;

const app = express();
app.use(cors());

const db = new pg.Client({
    user: 'postgres',
    password: 'postgres',
    database: 'postgres',
    host: 'localhost',
    port: 5432,
});

app.get('/ping', (req, res) => {
    res.status(200);
    res.send('Success!');
});

app.get('/db', (req, res) => {
    res.status(200);
    res.send('Success!');
});

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});