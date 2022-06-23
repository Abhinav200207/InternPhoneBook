const mongoose = require('mongoose'); // Importing Mongoose
const chalk = require('chalk');

// this callback function will connect to database
const connectDatabase = () => {
    return mongoose.connect("mongodb+srv://Abhinav:abhinav123@nodejsproject.pwxex.mongodb.net/phone?retryWrites=true&w=majority").then((data) => {
        console.log(chalk.red.bgBlueBright.underline.bold(`Connected to database`) + " " + chalk.green.bgYellow.underline.bold(`${data}`)) // log this statement if connection is successful
    })
}

module.exports = connectDatabase
