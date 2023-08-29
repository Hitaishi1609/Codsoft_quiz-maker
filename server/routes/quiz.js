const express = require("express")
const router = express.Router()

const {getAllQuizes, getQuizById, postQuiz} = require("../controllers/Quiz")

router.post("/postQuiz", postQuiz)
router.get("/getAllQuizes", getAllQuizes)
router.post("/getQuizById", getQuizById)


module.exports = router;