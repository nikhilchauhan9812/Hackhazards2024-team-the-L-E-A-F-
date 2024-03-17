const express=require('express')
const router =express.Router()
const mongoose=require('mongoose')
const Post=mongoose.model('Post')
const requirelogin =require('../middleware/requirelogin')


router.get('/allpost',(req,res)=>{
    Post.find().populate("postedby","_id name").then(post=>{
        res.json({post})
    })
})
router.get('/mypost',requirelogin,(req,res)=>{
    Post.find({postedby:req.user._id}).populate("postedby","_id name").then(mypost=>{
    res.json({mypost})
    })
})
router.post('/createpost',requirelogin,(req,res)=>{
    const {title,body}=req.body
    if(!title||!body){
        res.status(422).json({error:"please add all the fields"})
    
    }
      req.user.password=undefined;  
    const post = new Post({
        title,
        body,
        postedby:req.user
    })
    post.save().then(result=>{
        res.json({post:result})

    }).catch(err=>{
        console.log(err)
    })
})

module.exports=router