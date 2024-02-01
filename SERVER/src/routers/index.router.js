const dbConnect = require('../config/db');
const router = require('express').Router()
const userRouter = require('./user.route');
const projectRouter = require('./project.router')

dbConnect();

router.use('/user', userRouter);
router.use('/project', projectRouter);

module.exports = router;


