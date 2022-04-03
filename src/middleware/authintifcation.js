var jwt = require('jsonwebtoken');

require('dotenv').config()

const verifytoken = (token) =>
{
    return new Promise((resolve , reject) =>
    {
        jwt.verify(token, process.env.key, function(err, decoded) {
            if(err)
                return reject(err)

                return resolve(decoded)
            
          });
    })
}

const authentificate = async (req , res , next) =>
{
    try
    {
        if(!req.headers.authorization)
        {
            return res.send({message : "Authorization token not found or wrong"})
        }
        if(!req.headers.authorization.startsWith("Bearer "))
        {
            return res.send({message : "Authorization token not found or wrong"})
        }

        const token = req.headers.authorization.trim().split(" ")[1]

        let decoded 
        try
        {
            decoded = await verifytoken(token)
        }
        catch(err)
        {
            return res.send({message : "Authorizatoin token not found or incorrect"})
        }

        // console.log("DEcoded goes below" )
        // console.log(decoded)

        req.user = decoded.user

        // console.log(req.user)

        return next()

    }
    catch(err)
    {
        return res.send({message : err.message})
    }
}

module.exports = authentificate