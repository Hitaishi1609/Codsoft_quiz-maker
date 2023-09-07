import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  const {success}  = useSelector((state) => state.auth);

  return (
    <div className="flex flex-col items-center m-14">
      <div className="flex flex-col bg-amber-200 border-4 border-amber-400 rounded-full w-3/4 h-3/4 absolute items-center">
        <p className="font-extrabold font-serif text-4xl text-amber-500 mt-10">
          {" "}
          {(localStorage.getItem("LoggedIn") === "true")
            ? "Welcome to Online Quiz Maker!"
            : "Test Your Knowledge Here!"}
        </p>

        <p className="font-medium font-serif text-amber-500 w-11/12 mt-6 ">
        Welcome to a revolutionary online platform that empowers you to not only test your knowledge but also gain valuable insights and feedback in real-time. Our platform is your go-to destination for interactive quizzes that challenge your intellect and provide immediate results. Whether you're a student preparing for exams, a professional looking to sharpen your skills, or simply an inquisitive mind eager to explore new subjects, our platform is designed to cater to your needs. Say goodbye to the guesswork of how you performed – with us, you'll receive detailed scores, personalized feedback, and access to correct answers for every question. Join us today and embark on a journey of continuous learning, self-improvement, and knowledge discovery like never before.
        </p>

        <div className="flex flex-col gap-4 w-3/4 items-center mt-6">
          {localStorage.getItem("LoggedIn") === "true" ? (
            <div>
              <Link to="/quizes">
                <button
                  className="bg-amber-200 border-4 border-amber-400   text-amber-500 py-[8px] px-[10px] rounded-[8px] w-60 mr-4"
                  onClick={() => localStorage.setItem("User", "user")}
                >
                  Take a Quiz
                </button>
              </Link>

              <Link to="/post-quiz">
                <button
                  className="bg-amber-200 border-4 border-amber-400   text-amber-500 py-[8px] px-[10px] rounded-[8px] w-60"
                  onClick={() => localStorage.setItem("User", "admin")}
                >
                  Post a Quiz
                </button>
              </Link>
            </div>
          ) : (
            <div>
              <Link to="/login">
                <button className="bg-amber-200 border-4 border-amber-400 text-amber-500 py-[8px] px-[10px] rounded-[8px] w-60 mr-4">
                  Login
                </button>
              </Link>

              <Link to="/signup">
                <button className="bg-amber-200 border-4 border-amber-400 text-amber-500 py-[8px] px-[10px] rounded-[8px] w-60">
                  Sign Up
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
