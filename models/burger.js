var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(result) {
      cb(result);
  })
},
allDevourit: function(cb) {
  orm.allDevourit("burgers", "true", function(result) {
    cb(result) 
})
},
update: function(id,cb) {
  orm.update("burgers", "true", id, function(result) {
    cb(result) 
})
},

create: function(burgerName, cb) {
  orm.insert("burgers", burgerName, "false", function(result) {
    cb(result) 
})
},

};

module.exports = burger;

