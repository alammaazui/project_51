const validator = require('validator')
const bcrypt = require('bcrypt')
const jwt = require('bcrypt')
const db = require('../models')
const sendEmail = require('../services/email.service')
require('dotenv').config()



const register = async(req,res)=>{

    try{
        const {name ,email ,password}= req.body
        
        if(!name || !email || !password){
            return res.status(400).json({msg:"please provide complete data to proceed"})
        }
        // email
        else if(!validator.isEmail(email)){
            
            return res.status(400).json({msg:"please provide a valid email"})
        }
        else if (!validator.isStrongPassword(password)){
            
            return res.status(400).json({msg:"strong password"})
        }
        else if (!name.length > 5 ){
            return res.status(400).json({msg:"username too short"})
        
        }

        const salt = bcrypt.genSalt(10)
        const hash_password = await bcrypt.hash(password,salt)

        // db 
        const user = await db.USER.create({name ,email ,password : hash_password})
        // db 

        await sendEmail(user.email,"registration alert",undefined,`<h1>user regitration success</h1>`)
        
        return res.status(200).json({status :'success',msg:"user is registered successfully"})
        
        
    }
    catch(error){
        return res.status(500).json({msg:error.message})
    }
    
} 
const login = async(req,res)=>{
    
    try {
        const {email , password}= req.body //test@ui.com ,123
        
        const user = await db.USER.findOne({where:{email:email}})
        
        if(!user){
            
            return res.status(400).json({msg:"email does not exist"})
        }
        
        const isCompared = await bcrypt.compare(password ,user.password)
        
        if(!isCompared){
            
            return res.status(400).json({msg:"incorrect password"})
        }
        // jwt token 
        
        const user_token= jwt.sign({id : user.id ,role :user.role},process.env.JWT_SECRET,{expiresIn : '12h' })
        
        await sendEmail(user.email,"login alert",undefined,`<h1>user login success</h1>`)
        res.status(200).json({msg:"loggedin",data:{email:user.email , token :user_token ,role :user.role}})
        
    } catch (error) {
        
        res.status(500).json({msg:error.message,})
    }

} 


module.exports = {register,login}