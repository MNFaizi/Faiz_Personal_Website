const dbConnect = require('../config/db');
const router = require('express').Router()
const userRouter = require('./user.route');

dbConnect();

router.use('/user', userRouter);

module.exports = router;


