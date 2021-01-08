// Import ORM to create function that will interact with database
const { createBrotliCompress } = require("zlib");
let orm = require("../config/orm.js");

// Creating the function to export
let burger = {
    all: function(cb) {
        orm.all("burger", function(res) {
            cb(res);
        });
    },
    create: function(cols, vals, cb) {
        orm.create("burger", cols, vals, function(res) {
            cb(res);
        });
    },
    update: function(ojbColVals, condition, cb) {
        orm.update("burger", ojbColVals, condition, function(res) {
            cb(res);
        });
    },
    delete: function(condition, cb) {
        orm.delete("burger", condition, function(res) {
            cb(res);
        });
    }
};

// Exporting burger
module.exports = burger;