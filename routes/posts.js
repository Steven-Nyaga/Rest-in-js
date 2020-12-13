//Import express
const express = require('express');
const router = express.Router();
//To post
const Post = require('../models/Post');

//Getting from db
router.get('/', async (req,res) => {
    // res.send('We are on home');
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message: err});
    }
});


//Getting specific post from db
router.get('/:postId', async (req,res) => {
    try{
    const post = await Post.findById(req.params.postId);
    res.json(post);
    }catch(err){
        res.json({message: err});
    }
});

//To post
router.post('/', async (req,res) => {
    console.log(req.body);

    //creating a new post with the model Post
    const post = new Post({
        // admission: req.body.admission,
        name: req.body.name,
        course: req.body.course,
        year: req.body.year,
        semester: req.body.semester
    });

    // Saving to DB
    try{
    const savedPost = await post.save();
    res.json(savedPost);
    }catch(err){
        res.json({message: err});
    }

});

//To export the router
module.exports = router;