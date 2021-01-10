// Import ORM to create function that will interact with database
let orm = require("../config/orm.js");

// Creating the function to export
let bjs = {
    selectAll: function (cb) {
        orm.selectAll("burger", function (res) {
            cb(res);
        });
    },
    insertOne: function (cols, vals, cb) {
        orm.insertOne("burger", cols, vals, function (res) {
            cb(res);
        });
    },
    updateOne: function (objColVals, condition, cb) {
        orm.updateOne("burger", objColVals, condition, function (res) {
            cb(res);
        });
    }
};

// Exporting burger
module.exports = bjs;