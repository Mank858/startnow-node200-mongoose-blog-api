const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/', (req, res) => {
    User
    .find()
    .then(users => {
        res.status(200).json(users);
    })
    .catch(err => res.send(err))
});

router.get('/:id', (req, res) => {
    User
    .findById(req.params.id)
    .then(user => {
        user ? res.status(200).json(user) : res.status(404).send('please try again.')
    })
    .catch(err => res.status(404).send(err))
});

router.post('/', (req, res) => {
    const newuser = new User(req.body)
    newuser.save()
    .then(user => {
        res.status(201).json(user);
    })
    .catch(err => res.send(err));
});

router.put('/:id', (req, res) => {
    User
    .findByIdAndUpdate(req.params.id, {$set: req.body }, {new: true })
    .then(user => {
        res.status(204).json(user);
    })
    .catch(err => res.send(err))
});

router.delete('/:id', (req, res) => {
    User
    .findByIdAndRemove(req.params.id)
    .then(user => {
        user ? res.status(200).json(user) : res.status(204).send('error')
    })
    .catch(err => res.send(err))
});

module.exports = router;