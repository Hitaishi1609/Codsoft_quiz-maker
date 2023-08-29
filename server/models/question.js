const mongoose = require("mongoose")

const questionSchema = mongoose.Schema({
    
    quizId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Quiz",
        required: true
    },
    quesStmt: {
        type: String,
        required: true
    },
    options:{
        type: [String],
        required: true
    },
    correctAns: {
        type: String,
        required:true
    },
    createdAt: { 
        type: Date, 
        default: Date.now,
        required: true 
    }
})

module.exports = mongoose.model("Question", questionSchema)