import React, { useState } from 'react'
import Question from './Question'
import {  useNavigate } from 'react-router-dom'

const PostQuiz = () => {

    const navigate = useNavigate();

  
      const [formData, setFormData] = useState( { quizName:"" } )

      //const { quizName } = formData
  
    
  
    function changeHandler(event) {
  
      setFormData( (prevData) =>(
          {
              ...prevData,
              [event.target.name]:event.target.value
          }
      ) )
  
  }
  

  return (
    <div className="flex flex-col items-center mt-20">
      <div className="flex flex-col bg-amber-200 border-4 border-amber-400 rounded-full w-3/4 h-3/4 absolute items-center">

        <p className="font-extrabold font-serif text-5xl text-amber-500 mt-14"> Begin Creating a Quiz!</p>

        {/* quiz name */}
        <form>
        <div className='mt-[20px]'>
            <label className='w-full mt-[20px]'>
                    <p className='text-[1.175rem] text-richblack-900 mb-1 leading-[1.375rem]'>Quiz Name<sup className='text-[#ef4444]'>*</sup></p>
                    <input
                        required
                        type="text"
                        name="name"
                        onChange={changeHandler}
                        placeholder="Enter your quiz name "
                        //value={formData.name}
                        className='bg-yellow-400 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                    />
            </label>
        </div>
        </form>

        <button onClick={()=>{navigate('/question')}} 
        className='border-black'>
            Add Question
        </button>

      </div>
    </div>  
  )
}

export default PostQuiz