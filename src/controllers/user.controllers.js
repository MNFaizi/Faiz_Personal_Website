const bcrypt = require("bcrypt");
const User = require("../models/users");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.createUser = async (req, res) => {
    const { username, password } = req.body;
    try {
        console.info(`${new Date()} : Create User for ${username}`)
        // generated hashed password
        const hashPassword = await bcrypt.hash(password, 10);
        // input user data to database
        const data = await User.create({
            username: username,
            password: hashPassword,
            role: "admin"
        });
        console.info(`${new Date()} : User ${username} success created`)
        return res.status(201).json({
            message: "User Success Created",
            data,
        });
    } catch (error) {
        console.info('Create User Error')
        console.log(error)
        return res.status(500).json({
            message: "Internal Server Error",
        });
    }
};

exports.loginUser = async (req, res) => {
    const { username, password } = req.body;
    try {
        console.info(`${new Date()} : ${username} Try Login`)
        // check for exist user
        const userCheck = await User.findOne({ username });
        if (!userCheck) {
            return res.status(404).json({
                message: "User not Found",
            });
        }
        // checking password isMatch or not
        const passwordCheck = await bcrypt.compare(password, userCheck.password);
        if (!passwordCheck) {
            console.info(`${new Date()} : ${userCheck.username} password not match`)
            return res.status(401).message({
                message: "Invalid Credential",
            });
        }
        // create token for user identity
        const token = jwt.sign(
            { id: userCheck.id, username: username },
            process.env.SECRET_KEY
        );
        // response to user
        console.info(`${new Date()} : ${userCheck.username} Login Success`)
        return res.status(200).json({
            message: "Login Successfull",
            token,
            userId : userCheck.id
        });
    } catch (error) {
        console.info(`${new Date()} : ${username}Login Error`)
        console.log(error)
        return res.status(401).json({ message: "Invalid Credential" });
    }
};

exports.changePassword = async (req, res) => {
    // get username from req
    const { username } = req.loggedUser;
    try {
        console.info(`${new Date()} : ${username} try to change Password`);
        // get data from body
        const { oldPassword, newPassword } = req.body;
        // check oldpassword with new password
        if(oldPassword === newPassword){
            console.info(`${new Date()} : ${username} new Password is same with old password`)
            return res.status(401).json({message: "Try with new password"})
        } 
        // check user in database
        const userCheck = await User.findOne({ username });
        if (!userCheck) {
            return res.status(404).json({
                message: "User Not Found",
            });
        }
        // check the old password is correct or not
        const validPass = await bcrypt.compare(oldPassword, userCheck.password);
        if (!validPass) {
            console.info(`${new Date()} : ${userCheck.username} password not match`)
            return res.status(401).json({
                message: "Invalid Credential",
            });
        }
        // generate a new hashed password
        const newHashedPassword = await bcrypt.hash(newPassword, 10)
        // update data with new hashed password 
        const dataUpdate = await User.updateOne(
            { _id: userCheck._id },
            { $set: { password: newHashedPassword } }
        );
        console.info(`${new Date()} : ${userCheck.username} Success change password`)
        return res.status(200).json({
            message: "Password successfully updated",
        })
    } catch (error) {
        console.info(`${new Date()}: ${username} Change Password Error`)
        console.log(error)
        return res.status(500).json({
            message: "Internal Server Error",
        });
    }
};