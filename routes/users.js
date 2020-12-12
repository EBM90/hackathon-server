const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Post = require("../models/post");
const Comment = require("../models/comment");

// GET THE USER
router.get('/', async(res, req, next) => {
    try {
        const theUser = await User.findById(req.session.currenUser._id).populate('favPost')
        res.json(theUser)  
    } catch (error) {
        console.log(error)
    } 
})

// EDIT USER
router.put('/', async(res, req, next) => {
    try {
        const {username, password, foto, description, email, favPost} = req.body
        const theUser = await User.findByIdAndUpdate(req.session.currenUser._id, {$set:{username, password, foto, description, email, favPost}}).populate('favPost')
        res.json(theUser)  
    } catch (error) {
        console.log(error)
    } 
})

// REMOVE FAV
router.put('/:id/removeFav', async(res, req, next) => {
    try {
        const thePost = await Post.findById(req.params.id)
        const theUser = await User.findByIdAndUpdate(req.session.currenUser._id, {$pull:{favPost: thePost}}).populate('favPost')
        res.json(theUser)  
    } catch (error) {
        console.log(error)
    } 
})

module.exports = router;