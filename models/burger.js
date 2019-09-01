var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(result) {
      cb(result);
  })
},  
update: function(cols, vals,cb) {
  orm.update("burgers", cols, vals, function(result) {
    cb(result) 
})
},
create: function(objColVals, condition, cb) {
  orm.insert("burgers", objColVals, condition, function(result) {
    cb(result) 
})
}

};

module.exports = burger;

