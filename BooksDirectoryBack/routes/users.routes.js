const express = require('express');
const router = express.Router();

const userController = require('../controllers/users.controller');

router.get('/user',userController.findAll);

router.post('/user',userController.create);

router.get('/user/:id',userController.findById);

router.put('/user/:id', userController.update);

router.delete('/user/:id', userController.delete);

module.exports = router;