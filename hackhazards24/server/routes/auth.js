const express=require('express')
const router =express.Router()
const mongoose=require('mongoose')
const User =mongoose.model("User")
const Jwt =require('jsonwebtoken')
const {JWTTOKENS} =require('../key')
const Hash=require("bcryptjs")
const requirelogin =require('../middleware/requirelogin')


router.get('/protected',requirelogin,(req,res)=>{
res.send("hello there")
})
router.post('/signup',(req,res)=>{
const {name,email,password}=req.body
if(!email||!password||!name){
   return res.status(422).json({error:"please add all the fields"})

}
User.findOne({email:email})
.then((saveduser)=>{
    if(saveduser){
    return res.status(422).json({error:"user already exist"})
}
Hash.hash(password,12).then(hashedpassword=>{
        const user=new User({
            email,
            password:hashedpassword,
            name
        })
        user.save().then(saved=>{
            res.json({message:"saved successfully"})
        }).catch(err=>console.log(err))
    }
)


}).catch(err=>{
    console.log(err)
})
})

router.post('/signin',(req,res)=>{
    const {email,password} =req.body
    if(!email||!password){
        return res.status(422).json({error:"please add email or password"})
    }
    User.findOne({email:email}).then(saved=>{
        if(!saved){
            return res.status(422).json({error:"invalid email or password"})
        }
    Hash.compare(password,saved.password).then(doMatch=>{
        if(doMatch)
        {
            const token=Jwt.sign({_id:saved._id},JWTTOKENS)
            
            res.json({token:token})
        }
        else{
            return res.status(422).json({error:"invalid email or password"})
        }
    }).catch(err=>{console.log(err)})
    })

})

//hackhazards
router.post('/createchannel',(req,res)=>{
    const {name,description}=req.body
    if(!name||!description){
        return res.status(422).json({error:"please add all the fields"})
    }
    req.user.password=undefined;  
    const channel = new Channel({
        name,
        description,
        postedby:req.user
    })
    channel.save().then(saved=>{
        res.json({message:"saved successfully"})
    }).catch(err=>console.log(err))
    
})


module.exports=router