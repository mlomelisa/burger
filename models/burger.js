var orm = require("../config/orm");

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", "false", function(result) {
      cb(result) 
  })
},
selectAllDevourit: function(cb) {
  orm.selectAll("burgers", "true", function(result) {
    cb(result) 
})
},
updateOne: function(id,cb) {
  orm.updateOne("burgers", "true", id, function(result) {
    cb(result) 
})
},

insertOne: function(burgerName, cb) {
  orm.insertOne("burgers", burgerName, "false", function(result) {
    cb(result) 
})
},

};

module.exports = burger;

