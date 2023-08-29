import React, { useState } from 'react'
import { postQuestion } from '../redux/actions/question';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';

const Question = () => {

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    quizId:"",
    quesStmt:"",
    opt1:"",
    opt2:"",
    opt3:"",
    opt4:"",
    correctAns:""
})

const { quizId, quesStmt, opt1, opt2, opt3, opt4, correctAns } = formData



    function changeHandler(event) {
  
        setFormData( (prevData) =>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ) )
    
    }

    //console.log("formdata", formData)


    const options = [opt1, opt2, opt3, opt4];

    const addQuestion = (event) => {
        event.preventDefault();
        dispatch(postQuestion(quizId, quesStmt, options, correctAns))
        //toast.success("Question Added Successfully")

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // dispatch(postQuiz(quizName, userId))
         




    }

  return (
    
    <form>
        <div className='mt-[20px]'>
            <label className='w-full mt-[20px]'>
                    <p className='text-[1.175rem] text-richblack-900 mb-1 leading-[1.375rem]'>Question Statement<sup className='text-[#ef4444]'>*</sup></p>
                    <input
                        required
                        type="text"
                        name="quesStmt"
                        onChange={changeHandler}
                        placeholder="Enter your question statement "
                        value={formData.quesStmt}
                        className='bg-yellow-400 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                    />
            </label>
        </div>

        <div className='mt-[20px]'>
            <label className='w-full mt-[20px]'>
                    <p className='text-[1.175rem] text-richblack-900 mb-1 leading-[1.375rem]'>Enter option 1<sup className='text-[#ef4444]'>*</sup></p>
                    <input
                        required
                        type="text"
                        name="opt1"
                        onChange={changeHandler}
                        placeholder="Enter option 1"
                        value={formData.opt1}
                        className='bg-yellow-400 rounded-[0.5rem] text-richblack-5 w-full p-[12px] mt-4'
                    />
                    
                    
            </label>

            <label className='w-full mt-[20px]'>
                    <p className='text-[1.175rem] text-richblack-900 mb-1 leading-[1.375rem]'>Enter option 2<sup className='text-[#ef4444]'>*</sup></p>
                    <input
                        required
                        type="text"
                        name="opt2"
                        onChange={changeHandler}
                        placeholder="Enter option 2"
                        value={formData.opt2}
                        className='bg-yellow-400 rounded-[0.5rem] text-richblack-5 w-full p-[12px] mt-4'
                    />
                    
                    
            </label>

            <label className='w-full mt-[20px]'>
                    <p className='text-[1.175rem] text-richblack-900 mb-1 leading-[1.375rem]'>Enter option 3<sup className='text-[#ef4444]'>*</sup></p>
                    <input
                        required
                        type="text"
                        name="opt3"
                        onChange={changeHandler}
                        placeholder="Enter option 3"
                        value={formData.opt3}
                        className='bg-yellow-400 rounded-[0.5rem] text-richblack-5 w-full p-[12px] mt-4'
                    />
                    
                    
            </label>

            <label className='w-full mt-[20px]'>
                    <p className='text-[1.175rem] text-richblack-900 mb-1 leading-[1.375rem]'>Enter option 4<sup className='text-[#ef4444]'>*</sup></p>
                    <input
                        required
                        type="text"
                        name="opt4"
                        onChange={changeHandler}
                        placeholder="Enter option 4"
                        value={formData.opt4}
                        className='bg-yellow-400 rounded-[0.5rem] text-richblack-5 w-full p-[12px] mt-4'
                    />
                    
                    
            </label>
            </div>

            <div className='mt-[20px]'>
            <label className='w-full mt-[20px]'>
                    <p className='text-[1.175rem] text-richblack-900 mb-1 leading-[1.375rem]'>Enter the correct option<sup className='text-[#ef4444]'>*</sup></p>
                    <input
                        required
                        type="text"
                        name="correctAns"
                        onChange={changeHandler}
                        placeholder="Enter the correct option"
                        value={formData.correctAns}
                        className='bg-yellow-400 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                    />
            </label>
        </div>

        <button type="submit" className=' w-full bg-yellow-600 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6' onClick={handleSubmit}>
            Finish Quiz
        </button>

        <button type="submit" className=' w-full bg-yellow-600 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6' onClick={addQuestion}>
            Add Question
        </button>
    </form>
  )
}

export default Question
