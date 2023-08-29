import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { getAllQuizes } from "../redux/actions/quiz";
import { useNavigate } from "react-router-dom";

const QuizList = () => {
  const dispatch = useDispatch();
  const { quizes } = useSelector((state) => state.quiz);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getAllQuizes());
  }, [dispatch]);

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
            <button onClick={() => navigate(`/quiz/${params.row.quizId}`)}>
              Start Quiz
            </button>
          );
    },
    },
  ];

  return (
    <div style={{ height: "100vh", width: "80%", margin: "auto" }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
};

export default QuizList;
