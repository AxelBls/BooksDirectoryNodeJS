'use strict';

import dbcon from './../config/db.config';

var Books = function(books) {
    this.titre = books.titre;
    this.nomAuteur = books.nomAuteur;
    this.prenomAuteur = books.prenomAuteur;
};

Books.create = function (newBook, result) {
    dbcon.query("INSERT INTO books set ?", newBook, function (err, res) {
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

Books.findById = function (id,result) {
    dbcon.query("SELECT * FROM books where id = ?", id, function(err, res) {
        if(err) {
            console.log("error: ",err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};

Books.findAll = function (result) {
    dbcon.query("SELECT * FROM books", function(err, res) {
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

Books.update = function(id, book, result){
    dbcon.query("UPDATE books SET titre=?,nomAuteur=?,prenomAuteur=?", [book.titre,book.nomAuteur,book.prenomAuteur], function (err, res){
        if (err){
            console.log("error: ",err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};

Books.delete = function(id,result) {
    dbcon.query("DELETE FROM books WHERE id = ?", id, function(err, res) {
        if(err) {
            console.log("error: ",err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};

export default Books;