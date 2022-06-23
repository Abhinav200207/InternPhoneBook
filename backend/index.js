const express = require('express');
const connectDatabase = require('./db/db');
const chalk = require('chalk');
const app = express();

const PORT = 4000;

app.use(express.json());

connectDatabase();

const phone = require('./routes/routes')
app.use("", phone);

app.listen(PORT, () => {
    console.log(chalk.yellow.bgGrey.underline.bold(`Server is running on port:`) + " " + chalk.blue.bgCyan.underline.bold(`${PORT}`))
})