var connection = require('./connection');

var orm = {

  all: function(tableInput, cb){
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, data){
      if (err) throw err;
      cb(data);
    });
  }
//   create: function(tableInput, burgerName, devouredValue, cb){
//     var queryString = "INSERT INTO ?? (burger_name, devoured) VALUES (?, ?)";
//     connection.query(queryString,[tableInput, burgerName, devouredValue], function(err,data){
//       if (err) throw err;
//       cb(data);

//     })
//   },
//   update: function(tableInput,  inputValue, id, cb){
//     var queryString = "UPDATE  ?? SET burger_name = ? WHERE id = ?";
//     connection.query(queryString,[tableInput, inputValue, id], function(err,data){
//       if (err) throw err;
//       cb(data);
//   })
// }
}

module.exports = orm;


