const jwt = require('jsonwebtoken')
const User = require("../models/users");
const Project = require("../models/project");
require('dotenv').config()

// authentication function
exports.authentication = async (req, res, next) => {
    console.info(`${new Date()} : Authentication Start`)
    // get access token from header
    const  access_token  = req.headers.authorization;
    if (access_token) {
        try {
            // verify the token
            const [type, token] = access_token.split(' ')
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
// authorization function
exports.authorization = async (req, res, next) => {
    console.info(`${new Date()} : Authorization Start`);
    // get id project from params
    const paramId = req.params.id
    try {
        // get id from user log in
        const { id, role } = req.loggedUser;
        // search project on database
        const model = await Project.findById({ _id : paramId})
        // check project
        if(model){
            // check for project owner on user log in and database must be same and role from log in user 
            if(id === model.owner?.toString() && role === 'admin'){
                console.info(`${new Date()} : Authorization Finished`)
                // throw to next function
                next()
            }
            else {
                console.warn(`${new Date()} : Authorization Failed`)
                return res.status(401).json({message : 'Unauthorized'})
            }
        }
    }
    catch (error) {
        console.warn(`${new Date()} : Authorization Failed`)
        console.error(error)
        return res.status(500).json({message : 'Internal Server Error'})
    }
}