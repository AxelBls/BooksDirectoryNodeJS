'use strict';

const Books = require('../models/books.model');

exports.findAll = function(req, res) {
    Books.findAll(function(err, book) {  
        console.log('controller')  
        if (err) {
            res.send(err);
            console.log('res', book);
        }
        else{
            res.send(book);
        }
    });
};

exports.create = function(req, res) {
    const new_book = new Books(req.body);
    //handles null error
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){  
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }
    else{
        Books.create(new_book, function(err, book) {  
            if (err) {
                res.send(err);
            }
            else {
                res.json({error:false,message:"Book added successfully!",data:book});
            }
        });
    }
};

exports.findById = function(req, res) {
    Books.findById(req.params.id, function(err, book) {
        if (err){ 
            res.send(err);
        }
        else {
            res.json(book);
        }
    });
};

exports.update = function(req, res) {  
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){    
        res.status(400).send({ error:true, message: 'Please provide all required fields' });
    }
    else{    
        Books.update(req.params.id, new Books(req.body), function(err, book) { 
            if (err){
                res.send(err);
            }  
            else {
                res.json({ error:false, message: 'Book successfully updated' });
            }
        });
    }
};
    
exports.delete = function(req, res) {
    Books.delete( req.params.id, function(err, book) {  
        if (err){
            res.send(err);  
        }
        else{
            res.json({ error:false, message: 'Book successfully deleted' });
        }  
    });
};