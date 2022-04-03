const User = require("../models/user.model")

var jwt = require('jsonwebtoken');

require('dotenv').config()

const generatetoken = (user) =>
{
    return jwt.sign({user}, process.env.key);
}

const register = async (req, res ) =>
{
    try
    {
        let user = await User.findOne({email : req.body.email})

        if(user)
       {
        return res.send({message : "User already exist"})
       }
    
       user = await User.create(req.body)

       const token = generatetoken(user)

       return res.send({user,token})

    }
    catch(err)
    {
        return res.send({message : err.message})
    } 
}


const login = async (req , res) =>
{
    try
    {
        var pass = await User.findOne({ password : req.body.password})

        if(!pass)
        {
            return res.send("wrong pass")
        }

        var email = await User.findOne({email : req.body.email})
        
        if(!email) 
        {
            return res.send("wrong eamil")
        }


        const token = generatetoken(email)
        res.send({email,token})
    }
    catch(err)
    {
        res.send({message : err.message})
    }
}

module.exports = {register,login}