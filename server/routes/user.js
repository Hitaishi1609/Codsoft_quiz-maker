const express = require("express")
const router = express.Router()

const {login, signup, logout, getMyProfile} = require("../controllers/Auth")
const { authenticateToken } = require("../utils/sendToken")
const { isAuthenticated } = require("../middlewares/auth")

router.post("/login" , login)
router.post("/signup", signup)
router.post("/logout", logout)
router.get("/me",isAuthenticated,getMyProfile);


module.exports = router;