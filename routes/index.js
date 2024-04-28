const router = require('express').Router()
const userRouter = require('./users')
const phoneRouter = require('./phones')


router.use("/users", userRouter)
router.use("/phones", phoneRouter)


module.exports = router