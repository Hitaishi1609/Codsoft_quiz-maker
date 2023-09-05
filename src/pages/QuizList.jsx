import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { getAllQuizes, getSingleQuiz } from "../redux/actions/quiz";
import { useNavigate } from "react-router-dom";

const QuizList = () => {
  const dispatch = useDispatch();
  const { quizes, loading } = useSelector((state) => state.quiz);
  const isUser = localStorage.getItem("User") === "user";

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllQuizes());
  }, [dispatch, loading]);

  const getQuizById = (id) => {
    navigate(`/${id}/question`);
  };
  const getQuizById2 = (id) => {
    navigate(`/quiz/${id}`);
  };

  const rows = (quizes || []).map((quiz, index) => ({
    id: index + 1,
    quizId: quiz._id,
    quizName: quiz.quizName,
    userId: quiz.userId,
    createdAt: quiz.createdAt,
  }));

  const columns = [
    { field: "quizId", headerName: "ID", flex: 0.1 },
    { field: "quizName", headerName: "Quiz Name", flex: 0.4 },
    { field: "userId", headerName: "User ID", flex: 0.3 },
    { field: "createdAt", headerName: "Created At", flex: 0.2 },
    {
      field: "actions",
      headerName: "Actions",
      flex: 0.2,
      renderCell: (params) => {
        return (
          <>
            {isUser ? (
              <button
              className="bg-amber-200 border-4 border-amber-400 text-amber-500 py-[4px] px-[5px] rounded-[8px] w-fit mt-2 mr-2"
               onClick={() => getQuizById2(params.row.quizId)}>
                Start Quiz
              </button>
            ) : (
              <button
              className="bg-amber-200 border-4 border-amber-400 text-amber-500 py-[4px] px-[5px] rounded-[8px] w-fit mt-2 mr-2"
               onClick={() => getQuizById(params.row.quizId)}>
                Add Questions
              </button>
            )}
          </>
        );
      },
    },
  ];

  return (
    <div>
      <button
    className="bg-amber-200 border-4 border-amber-400 text-amber-500 py-[4px] px-[5px] rounded-[8px] w-fit ml-14"
     onClick={()=>navigate("/")}>Home</button>
    <div style={{ height: "100vh", width: "90%", margin: "auto" }}>
    
      <DataGrid rows={rows} columns={columns} />
    </div>
    </div>
  );
};

export default QuizList;
