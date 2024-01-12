const jwt = require('jsonwebtoken')
const User = require("../models/users");
const { use } = require('../routers/user.route');
require('dotenv').config()

exports.authentication = async (req, res, next) => {
    console.info(`${new Date()} : Authentication Start`)
    // get access token from header
    const { access_token } = req.headers;
    // response when access token doesnt exist
    const [type, token] = access_token.split(' ');
    if (token) {
        try {
            // Verify token from headers
            const decodeToken = jwt.verify(token, process.env.SECRET_KEY)
            // get username and id from decodeToken
            const { id } = decodeToken;
            // check user in database by username and id
            const userCheck = await User.findById({ _id: id }).select('-password')
            if (!userCheck) {
                return res
                    .status(404)
                    .json({
                        message: 'User Not Found'
                    })
            } else {
                req.loggedUser = {
                    id: userCheck.id,
                    username: userCheck.username,
                    role: userCheck.role
                }
                console.info(`${new Date()} : Authentication finish`)
                next()
            }
        }
        catch (error) {
            console.error(`${new Date()} : Authentication Error`)
            return res
                        .status(401)
                        .json({
                            message: "Unauthorized"
                        })
        }
    }
    else {
        console.error(`${new Date()} : Authentication JWT Error`)
        return res
                    .status(401)
                    .json({
                        message: "JWT Error"
                    })
    }
}