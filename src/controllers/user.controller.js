const express = require("express")

const router = express.Router()


const User = require("../models/user.model")

router.get("",async (req, res) =>
{
    const user = await User.find()

    return res.send(user)
})

module.exports = router
