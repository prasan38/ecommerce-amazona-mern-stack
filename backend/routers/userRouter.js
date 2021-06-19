var express = require("express");
const data = require("../data");
var User = require("../models/userModel.js");
var expressAsyncHandler = require("express-async-handler");
var bcrypt = require("bcryptjs");
var generateToken = require("../utils");

const userRouter = express.Router();

userRouter.get('/seed',
    expressAsyncHandler(async (req, res) => {
        const createdUsers = await User.insertMany(data.users);
        res.send({ createdUsers });
    }));

userRouter.post('/signin', expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
            res.send({
                _id: user.id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user)
            });
            return;
        }
    }
    res.status(401).send({ error: "User not exist" });
}))

module.exports = userRouter;