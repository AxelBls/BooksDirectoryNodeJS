'use strict';

const con = require('./../config/db.config');
const crypto = require('crypto');
const algorithm = 'aes256';
const password = 'l5JmP+G0/1zB%;r8B8?2?2pcqGcL^3';

var User = function(users) {
    this.nom = users.nom;
    this.prenom = users.prenom;
    this.age = users.age;
    this.mail = users.mail;
    this.telephone = users.telephone;
    this.mdp = users.mdp;
    this.role = users.role;
};

User.create = function (newUser, result) {
    var cipher = crypto.createCipher(algorithm, password);
    var crypted = cipher.update(newUser.mdp,'utf8','hex');
    crypted += cipher.final('hex');
    newUser.mdp = crypted;
    con.query("INSERT INTO users set ?", newUser, function (err, res) {
        if(err) {
            console.log("error : ",err);
            result(err, null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

User.findById = function (id,result) {
    con.query("SELECT * FROM users where id = ?", id, function(err, res){
        if(err){
            console.log("error : ",err);
            result(err,null);
        }
        else{
            result(null, res);
        }
    });
};

User.findAll = function(result){
    con.query("SELECT * FROM users", function(err,res) {
        if(err) {
            console.log("error: ",err);
            result(err,null);
        }
        else {
            console.log("users: ",res);
            result(null, res);
        }
    });
};

User.update = function(id, user, result){
    con.query("UPDATE users SET nom=?,prenom=?,age=?,mail=?,telephone=?,mdp=?",[user.nom,user.prenom,user.age,user.mail,user.telephone,user.mdp],function(err, res) {
        if(err){
            console.log("error: ",err);
            result(null, err);
        }
        else{
            result(null,res);
        }
    });
};

User.delete = function(id,result){
    con.query("DELETE FROM users WHERE id=?", id, function(err, res) {
        if(err) {
            console.log("error :", err);
            result(null, err);
        }
        else {
            result(null,res);
        }
    });
};

module.exports = User