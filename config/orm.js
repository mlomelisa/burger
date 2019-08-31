var connection = require('./connection');

var orm = {

  sellectAll: function(tableInput, devoured, cb){
    var queryString = "SELECT * FROM ?" + tableInput + "WHERE devoured = " + devoured + ";";
    connection.query(queryString, function(err, data){
      if (err) throw err;
      cb(result);
    });
  },
  insertOne: function(tableInput, burgerName, devouredValue, cb){
    var queryString = "INSERT INTO ?? (burger_name, devoured) VALUES (?, ?)";
    connection.query(queryString,[tableInput, burgerName, devouredValue], function(err,data){
      if (err) throw err;
      cb(data);

    })
  },
  updateOne: function(tableInput,  inputValue, id, cb){
    var queryString = "UPDATE  ?? SET burger_name = ? WHERE id = ?";
    connection.query(queryString,[tableInput, inputValue, id], function(err,data){
      if (err) throw err;
      cb(data);
  }
}

module.exports = orm;


