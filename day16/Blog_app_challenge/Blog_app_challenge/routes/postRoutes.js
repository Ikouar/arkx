
const { displayposts, createpost, updatepost, deletepost } = require('../controllers/postController');

const express = require('express');
const app = express();
//! Route to create a new post
app.post('/', (req, res) => {
    try {
        const newpost = createpost(req.body);
        res.status(201).json(newpost);
    } catch (error) {
        res.status(400).json(error.message);
    }
});

//! Route to update a post
app.put('/:id', (req, res) => {
    try {
        const updatedPost = updatepost(req.params.id, req.body);
        res.json(updatedPost);
    } catch (error) {
        res.status(400).json(error.message);
    }
});

//! Route to delete a post
app.delete('/:id', (req, res) => {
    try {
        deletepost(req.params.id);
        res.status(200).end();
    } catch (error) {
        res.status(400).json(error.message);
    }
});

//! Route to get all posts
app.get('/', (req, res) => {
    const posts = displayposts();
    res.status(200).json(posts);
});

module.exports = app;
