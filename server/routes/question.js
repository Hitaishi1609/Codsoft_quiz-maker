const express = require("express")
const router = express.Router()

const {getQuesByQuizId, postQuestion} = require("../controllers/Question")

router.post("/postQuestion", postQuestion)
router.post("/getQuesByQuizId", getQuesByQuizId)

module.exports = router;