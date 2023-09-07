import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getAllQuizQuestions } from "../redux/actions/question";
import QuestionStepper from "../components/QuestionStepper";

const QuizQuestions = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const params = useParams();
  const { questions, loading } = useSelector((state) => state.questions);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    dispatch(getAllQuizQuestions(params.id));
  }, []);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    if (questions[currentQuestion]?.correctAns === selectedOption) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
      <div>
        {questions && currentQuestion < questions?.length ? (
    <div className="flex flex-col items-center m-8">
      <div className="flex flex-col bg-amber-200 border-4 border-amber-400 rounded-full w-3/4 h-3/4 absolute items-center">
        <div className="mt-12 max-w-2xl mx-auto">
        <h2 className="text-amber-500 italic">Question Statement: </h2>
          <h2 className="mt-2">{questions[currentQuestion].quesStmt}</h2>
          <div className="answer-options">
          <h2 className="text-amber-500 italic mt-4">Choose the correct option:</h2>
            {questions[currentQuestion].options.map((option) => (
              <li key={option} style={{ listStyle: "none" }}>
                <label>
                  <input
                    type="radio"
                    name="answer"
                    value={option}
                    checked={selectedOption === option}
                    onChange={() => handleOptionChange(option)}
                  />
                  {option}
                </label>
              </li>
            ))}
            {currentQuestion < questions.length - 1 ? (
              <button
              className="bg-amber-200 border-4 border-amber-400 text-amber-500 py-[4px] px-[5px] rounded-[8px] w-fit mt-8 mx-auto"
               onClick={handleSubmit}>Next Question</button>
            ) : (
              <button
              className="bg-amber-200 border-4 border-amber-400 text-amber-500 py-[4px] px-[5px] rounded-[8px] w-fit mt-8 mx-auto"
               onClick={handleSubmit}>Submit</button>
            )}
          </div>
        </div>
      </div>
    </div>
        
      ) : (
        <div className="flex flex-col items-center">
          <h2 className="font-extrabold font-serif text-4xl text-amber-500 ">Quiz Completed!</h2>
          <p className="mt-3">
            Your score: 
          </p>
          <p className="font-extrabold font-serif text-4xl text-amber-500 ">{score}/{questions?.length}</p>

          <p className="mt-3">
            Our Feedback for you: 
          </p>

          <div className="text-amber-500 italic">
          {(score / questions?.length) > (questions?.length / 2) ? `"Impressive results on the exam, showcasing a consistent understanding of key concepts and demonstrating a strong grasp of the subject matter"` : `"Performance in the exam fell below expectations, indicating a need for further study and focused improvement in key areas."`}
          </div>



          <div className="question-list mt-8 max-w-3xl">
            <h2 className="underline text-xl italic">Questions and Correct Answers</h2>
            <ul className="mt-4">
              {questions && questions?.map((question, index) => (
                <li key={index}>
                  <strong>Question: {index+1}</strong> {question.quesStmt}
                  <br />
                  <strong>Correct Answer:</strong> {question.correctAns}
                </li>
              ))}
            </ul>

            <button
    className="bg-amber-200 border-4 border-amber-400 text-amber-500 py-[4px] px-[5px] rounded-[8px] w-fit ml-24 mt-8"
     onClick={()=>navigate("/")}>Go To Home</button>
          </div>
        </div>
      )}
      </div>
  );
};

export default QuizQuestions;
