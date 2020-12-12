const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Post = require("../models/post");
const Comment = require("../models/comment");

// GET ALL POSTS
router.get('/', async(res, req, next) => {
    try {
        const posts = await Post.find().populate('comments')
        res.json(posts)  
    } catch (error) {
        console.log(error)
    } 
})

// GET A POST
router.get('/:id', async(res, req, next) => {
    try {
        const thePost = await Post.findById(req.params.id).populate('comments')
        res.json(thePost)  
    } catch (error) {
        console.log(error)
    } 
})

//ADD A COMMENT
router.post('/:id/addComment', async(res, req, next) => {
    try {
        const {creator, body, date} = req.body
        const theComment = await Comment.create(creator, body, date).populate('creator')
        const thePost = await Post.findByIdAndUpdate(req.params.id, {$push:{comments: theComment}}).populate('comments')
        res.json(thePost)  
    } catch (error) {
        console.log(error)
    } 
})

//ADD TO FAVOURITES
router.post('/:id/addToFav', async(res, req, next) => {
    try {
        const thePost = await Post.findById(req.params.id).populate('comments')
        const theUser = await User.findByIdAndUpdate(req.session.currentUser._id, {$push:{favPost: thePost}})
        res.json(theUser)  
    } catch (error) {
        console.log(error)
    } 
})

//DELETE A COMMENT
router.delete('/:id/deleteComment/:commentId', async(res, req, next) => {
    try {
        const theComment = await Comment.findByIdAndDelete(req.params.commentId)
        const thePost = await Post.findByIdAndUpdate(req.params.id, {$pull:{comments: theComment}}).populate('comments')
        res.json(thePost)  
    } catch (error) {
        console.log(error)
    } 
})



module.exports = router;