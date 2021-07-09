'use strict';

const con = require('./../config/db.config');

var Book = function(books) {
    this.titre = books.titre;
    this.nomAuteur = books.nomAuteur;
    this.prenomAuteur = books.prenomAuteur;
};

Book.create = function (newBook, result) {
    con.query("INSERT INTO books set ?", newBook, function (err, res) {
        if (err) {
            console.log("error: ",err);
            result(err, null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

Book.findById = function (id,result) {
    con.query("SELECT * FROM books where id = ?", id, function(err, res) {
        if(err) {
            console.log("error: ",err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};

Book.findAll = function (result) {
    con.query("SELECT * FROM books", function(err, res) {
        if(err) {
            console.log("error: ",err);
            result(err,null)
        }
        else {
            console.log("books: ", res);
            result(null, res);
        }
    });
};

Book.update = function(id, book, result){
    con.query("UPDATE books SET titre=?,nomAuteur=?,prenomAuteur=?", [book.titre,book.nomAuteur,book.prenomAuteur], function (err, res){
        if (err){
            console.log("error: ",err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};

Book.delete = function(id,result) {
    con.query("DELETE FROM books WHERE id = ?", id, function(err, res) {
        if(err) {
            console.log("error: ",err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};

module.exports = Book