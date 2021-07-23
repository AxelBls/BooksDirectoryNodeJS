'use strict';

const Users = require ('../models/users.model');
const crypto = require('crypto');
const User = require('../models/users.model');
const algorithm = 'aes256';
const password = 'l5JmP+G0/1zB%;r8B8?2?2pcqGcL^3';

exports.findAll = function(req, res) {
    Users.findAll(function(err, user) {
        console.log('controller')
        if(err) {
            res.send(err);
            console.log('res', user);
        }
        else{
            res.send(user);
        }
    });
};

exports.create = function(req, res) {
    const new_user = new Users(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error: true, message: 'Please provide all required field'});
    }
    else{
        Users.create(new_user, function(err, book) {
            if(err){
                res.send(err);
            }
            else{
                res.json({error:false,message:"User added successfully !"});
            }
        });
    };
}
exports.findById = function(req, res){
    Users.findById(req.params.id, function(err,user) {
        if(err){
            res.send(err);
        }
        else {
            res.json(user);
        }
    });
};

exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({error:true, message: 'Please provide all required fields'});
    }
    else {
        Users.update(req.params.id, new Users(req.body), function(err, res) {
            if(err) {
                res.send(err);
            }
            else {
                res.json({error: false, message: 'User successfully updated ! '});
            }
        });
    }
};

exports.delete = function(req, res) {
    Users.delete(req.params.id, function(err, user) {
        if(err){
            res.send(err);
        }
        else{
            res.json({error:false, message: 'User successfully deleted ! '});
        }
    });
};

exports.decrypt = function(req, res) {
    User.findById(req.params.id, function(err, user) {
        if(err){
            res.send(err);
        }
        else {
            mdp = user.mdp;
            var decipher = crypto.createDecipher(algorithm,password);
            var dec = decipher.update(mdp,'hex','utf8');
            dec += crypto.Cipher.final('utf8');
            return dec;
        }
    })
}