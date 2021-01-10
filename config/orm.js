// Importing MYSQL connection
let connection = require("../config/connection.js");

function printQuestionMarks(num) {
    let arr = [];

    for (let i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
};

function objToSql(ob) {
    let arr = [];

    for (let key in ob) {
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexof(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        };
    };
    return arr.toString();
};

let orm = {
    all: function(tableInput, cb) {
        let queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, res) {
            if (err) {
                throw err;
            };
            cb(res);
        });
    },
    create: function(table, cols, vals, cb) {
        let queryString = "INSERT INTO" + table;
        queryString += " ("; 
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function(err, res) 
        {
            if (err) 
            {
                throw err;
            }
            cb(res);
        });
    },
    update: function(table, objColVals, condition, cd) {
        let queryString = "UPDATE " + table;
        queryString += " SET " ;
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function(err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    }
};

// Export the orm
module.exports = orm;