// Immport/require ORM (orm.js file) to create functions that will interact with the database (TABLE burgers).
var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
        console.log(res);
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
            cb(res);
        });     
    },
    updateOne: function(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    }
};

// Export the database functions for the controller (burgersController.js).
module.exports = burger;

    
