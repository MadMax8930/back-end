'use strict';
var dbConn = require('./../../config/db.config');

//User Object
var User = function(user){
  this.id = user.id;
  this.nickname = user.nickname;
  this.email = user.email;
  this.password = user.password;
  this.country = user.country;
};


User.create = function (newUser, result) {
dbConn.query("INSERT INTO users set ?", newUser, function (res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  console.log(res.insertId);
  result(null, res.insertId);
}
});
};


User.findById = function (id, result) {
dbConn.query("Select * from users where id = ? ", id, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};


User.findAll = function (result) {
dbConn.query("Select * from users", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('users : ', res);
  result(null, res);
}
});
};


User.update = function(id, user, result){
dbConn.query("UPDATE users SET nickname=?, email=?, password=?, country=? WHERE id = ?", 
[user.nickname, user.email, user.password, user.country, id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};


User.delete = function(id, result){
dbConn.query("DELETE FROM users WHERE id = ?", [id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  result(null, res);
}
});
};


module.exports= User;