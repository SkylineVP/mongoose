const db = require('./db');
const express = require('express');
const router = require('./routers');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(router);

app.listen(PORT, () => console.log(`Example app listening on port ${ PORT }!`));