// Importing MYSQL connection
let connection = require("../config/connection.js");

function printQuesetionMarks(num) {
    let arr = [];

    for (let i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

