const mongoose = require("mongoose")

const quizSchema = mongoose.Schema({
    quizName: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    createdAt: { 
        type: Date, 
        default: Date.now,
        required: true 
    }
})

module.exports = mongoose.model("Quiz", quizSchema)