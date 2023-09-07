import Home from "./pages/Home";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import TakeQuiz from "./pages/TakeQuiz";
import PostQuiz from "./pages/PostQuiz";
import Question from "./pages/Question";
import { useDispatch, useSelector } from "react-redux";
import { ProtectedRoute } from "protected-route-react";
import { useEffect, useState } from "react";
import { clearErrorMessage, getMyProfile } from "./redux/actions/auth";
import { toast } from "react-hot-toast";
import QuizList from "./pages/QuizList";
import QuizQuestions from "./pages/QuizQuestions";

const App = () => {
  const { isAuthenticated, message, error, loading, user } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyProfile());
  }, [dispatch]);


  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch(clearErrorMessage());
    }
    if (error) {
      toast.error(error);
      dispatch(clearErrorMessage());
    }
  }, [message, loading]);
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen bg-yellow-300 flex flex-col overflow-auto">
      {localStorage.getItem("LoggedIn") === "true" && (

        <div className="flex flex-col items-end">
          
        <button
        className="bg-amber-200 border-4 border-amber-400 text-amber-500 py-[4px] px-[5px] rounded-[8px] w-fit mt-2 mr-2"
          onClick={() => {
            localStorage.setItem("LoggedIn", "false");
            navigate("/");
          }}
        >
          Logout
        </button>
        </div>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/take-quiz" element={<TakeQuiz />} />
        <Route path="/post-quiz" element={<PostQuiz />} />
        <Route path="/:id/question" element={<Question />} />
        <Route path="/quizes" element={<QuizList />} />
        <Route path="/quiz/:id" element={<QuizQuestions />} />
      </Routes>
    </div>
  );
};

export default App;
