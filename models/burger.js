var orm = require("../config/orm");

var burger = {
  all: function(cb) {
    orm.selectAll("burgers", "false", function(result) {
      cb(result) 
  })
},
allDevourit: function(cb) {
  orm.selectAll("burgers", "true", function(result) {
    cb(result) 
})
},
update: function(id,cb) {
  orm.updateOne("burgers", "true", id, function(result) {
    cb(result) 
})
},

create: function(burgerName, cb) {
  orm.insertOne("burgers", burgerName, "false", function(result) {
    cb(result) 
})
},

};

module.exports = burger;

