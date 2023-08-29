import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import TakeQuiz from "./pages/TakeQuiz"
import PostQuiz from "./pages/PostQuiz"
import Question from "./pages/Question"
import { useDispatch, useSelector } from "react-redux";
import { ProtectedRoute } from "protected-route-react";
import { useEffect } from "react";
import { clearErrorMessage, getMyProfile } from "./redux/actions/auth";
import { toast } from "react-hot-toast";
import QuizList from "./pages/QuizList";
import QuizQuestions from "./pages/QuizQuestions";

const App = () => {
  const { isAuthenticated, message, error, loading } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  console.log("Authenticated : ", isAuthenticated);
  
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
  
  return (
    <div className="w-screen h-screen bg-yellow-300 flex flex-col overflow-auto">

      <Routes>
        <Route path="/" element= {<Home/>} />
        <Route
          exact
          path="/login"
          element={
            <ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/">
              <Login />
            </ProtectedRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/">
              <Signup />
            </ProtectedRoute>
          }
        />

        <Route path="/take-quiz" element= {<TakeQuiz/>} />
        <Route path="/post-quiz" element= {<PostQuiz/>} />
        <Route path="/question" element= {<Question/>} />
        <Route path="/quizes" element= {<QuizList/>} />
        <Route path="/quiz/:id" element= {<QuizQuestions/>} />



      </Routes>

      
      
    </div>
  );
};

export default App;
