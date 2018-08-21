const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');

router.get('/', (req, res) => {
    Blog
    .find()
    .then(blogs => {
        res.status(200).json(blogs);
    })
    .catch(err => res.send(err))
});

router.get('/featured', (req, res) => {
    Blog
    .where('/featured').equals(req.body)
    .then(blogs => {
         res.status(200).json(blogs);
    })
    .catch(err => res.send(err))
});

router.get('/:id', (req, res) => {
    Blog
    .findById(req.params.id)
    .then(blogs => {
        blogs ? res.status(200).json(blogs) : res.status(404).send('please try again.')
    })
    .catch((err) => res.status(404).send(err));
});

router.post('/', (req, res) => {
    const newblog = new Blog(req.body)
    newblog.save()
    .then(blogs => {
        res.status(201).json(blogs);
    })
    .catch(err => res.send(err))
});

router.put('/:id', (req, res) => {
    Blog
    .findByIdAndUpdate(req.params.id, {$set: req.body }, {new: true })
    .then(blogs => {
        res.status(204).json(blogs);
    })
    .catch(err => res.send(err))
});

router.delete('/:id', (req, res) => {
    Blog
    .findByIdAndRemove(req.params.id)
    .then(blogs => {
        blogs ? res.status(200).json(blogs) : res.status(204).send('error')
    })
    .catch(err => res.send(err))
});

module.exports = router;