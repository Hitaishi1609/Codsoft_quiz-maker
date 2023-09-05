const quiz = require("../models/quiz")
const User = require("../models/user")

exports.postQuiz = async (req, res) => {
    try {  
      let { quizName, userId } = req.body
      const user= await User.findById(userId)
      if ( !user ) {
        return res.status(400).json({
          success: false,
          message: "User does not exist",
        })
      }

      if ( !quizName || !userId ) {
        return res.status(400).json({
          success: false,
          message: "All Fields are Mandatory",
        })
      }
      

      const newQuiz = await quiz.create({
        quizName, userId
      })


      await newQuiz.save();
  
      res.status(200).json({
        success: true,
        message: "Quiz Posted Successfully",
      })
    } catch (error) {
      console.error(error)
      res.status(400).json({
        success: false,
        message: "Failed to Post Quiz",
        error: error.message,
      })
    }
}

exports.getAllQuizes = async (req, res) => {
    try {
      const allQuizes = await quiz.find()

      if(!allQuizes){
        return res.status(400).json({
          success:false,
          message:"No Quiz Found"
        })
      }
        
      return res.status(200).json({
        success: true,
        quizes: allQuizes,
      })
    } catch (error) {
      console.log(error)
      return res.status(404).json({
        success: false,
        message: `Can't Fetch Quiz Data`,
        error: error.message,
      })
    }
}


exports.getQuizById = async (req, res) => {
    try {
        let { quizId } = req.body
  
    
      const data = await quiz.findById(quizId)
  
      
      res.status(200).json({
        success: true,
        quiz: data,
      })
    } catch (error) {
      console.error(error)
      res.status(500).json({
        success: false,
        message: "Failed to retrieve Quiz",
        error: error.message,
      })
    }
}