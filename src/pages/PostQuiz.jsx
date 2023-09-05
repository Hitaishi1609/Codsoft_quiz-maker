import React, { useEffect, useState } from 'react'
import Question from './Question'
import {  useNavigate } from 'react-router-dom'
import { addQuiz } from '../redux/actions/quiz';
import { useDispatch, useSelector } from 'react-redux';
import { getMyProfile } from '../redux/actions/auth';

const PostQuiz = () => {

    const navigate = useNavigate();
    const dispatch= useDispatch()

    
    const [quizName, setQuizName] = useState('')

    useEffect(() => {
      dispatch(getMyProfile());
    }, []);
    
    
    const {user}  = useSelector((state) => state.auth);
    console.log("user in post quiz", user)


  const submit=(e)=>{
    e.preventDefault();
    dispatch(addQuiz(quizName, user._id))
    navigate('/quizes')
  }
  

  return (
    <div className="flex flex-col items-center mt-8">
      <div className="flex flex-col bg-amber-200 border-4 border-amber-400 rounded-full w-3/4 h-3/4 absolute items-center">

        <p className="font-extrabold font-serif text-5xl text-amber-500 mt-14"> Begin Creating a Quiz!</p>

        {/* quiz name */}
        <form onSubmit={submit}>
        <div className='mt-[32px]'>
            <label className='w-full mt-[20px]'>
                    <p className='text-[1.175rem] text-richblack-900 mb-1 leading-[1.375rem]'>Quiz Name<sup className='text-[#ef4444]'>*</sup></p>
                    <input
                        required
                        type="text"
                        name="name"
                        onChange={(e)=>setQuizName(e.target.value)}
                        placeholder="Enter your quiz name "
                        value={quizName}
                        className='bg-yellow-400 rounded-[0.5rem] text-richblack-5 w-full p-[12px] mt-3'
                    />
            </label>
        </div>
        <button type="submit" 
        className="bg-amber-200 border-4 border-amber-400 text-amber-500 py-[8px] px-[10px] rounded-[8px] w-60 mt-14">
            Submit
        </button>
        </form>

        

      </div>
    </div>  
  )
}

export default PostQuiz