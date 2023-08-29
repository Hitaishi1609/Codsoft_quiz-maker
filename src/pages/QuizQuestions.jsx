import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllQuizQuestions } from "../redux/actions/question";
import QuestionStepper from "../components/QuestionStepper";

const QuizQuestions = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { questions,loading } = useSelector((state) => state.questions);
  console.log('Questions ' ,questions);

  useEffect(() => {
    dispatch(getAllQuizQuestions(params.id));
  }, []);

  return (
    <div style={{ margin: "20px" }}>
       {!loading && <QuestionStepper questions={questions}/>}        
    </div>
  );
};

export default QuizQuestions;
