const Question = require("../models/question");

exports.postQuestion = async (req, res) => {
    try {  
      let { quizId, quesStmt, options, correctAns } = req.body

      if ( !quizId || !quesStmt || !options || !correctAns ) {
        return res.status(400).json({
          success: false,
          message: "All Fields are Mandatory",
        })
      }
      
      const newQues = await Question.create({
        quizId, quesStmt, options, correctAns
      })

      await newQues.save();
  
      res.status(200).json({
        success: true,
        data: newQues,
        message: "Ques Posted Successfully",
      })
    } catch (error) {
      console.error(error)
      res.status(400).json({
        success: false,
        message: "Failed to Post Ques",
        error: error.message,
      })
    }
}


exports.getQuesByQuizId = async (req, res) => {
    try {
        const {quizId}  = req.body;
      const ques = await Question.find({quizId})

      if(!ques){
        return res.status(400).json({
          success:false,
          message:"No Question Found"
        })
      }
        
      return res.status(200).json({
        success: true,
        questions: ques,
      })
    } catch (error) {
      console.log(error)
      return res.status(404).json({
        success: false,
        message: `Can't Fetch Questions`,
        error: error.message,
      })
    }
}