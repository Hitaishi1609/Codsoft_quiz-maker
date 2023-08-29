import React, { useEffect, useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast'; 
import { useDispatch, useSelector } from 'react-redux';
import { clearErrorMessage, login } from '../redux/actions/auth';


function Login() {

  const dispatch = useDispatch();

    const [formData, setFormData] = useState( {
        email:"", password:""
    })

  const[showPassword, setShowPassword] = useState(false);

  function changeHandler(event) {

    setFormData( (prevData) =>(
        {
            ...prevData,
            [event.target.name]:event.target.value
        }
    ) )

}

  function submitHandler(event) {
    event.preventDefault();
    console.log("Printing the formData ");
    console.log(formData)
    dispatch(login(formData.email, formData.password))

}

  return (
    <div>
      <form
       onSubmit={submitHandler}
        className="flex flex-col w-1/2 gap-y-4 mt-40 ml-80">

        <label className='w-full'>
            <p className='text-[1.175rem] text-richblack-900 mb-1 leading-[1.375rem]'>
                Email Address<sup className='text-[#ef4444]'>*</sup>
            </p>
            <input 
                required
                type="email"
                value = {formData.email}
                onChange={changeHandler}
                placeholder="Enter email address"
                name="email"
                className='bg-yellow-400 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />
        </label>

        <label className='w-full relative'>
            <p className='text-[1.175rem] text-richblack-900 mb-1 leading-[1.375rem]'>
                Password<sup className='text-[#ef4444]'>*</sup>
            </p>
            <input 
                required
                // type= {showPassword ? ("text") : ("password")}
                value = {formData.password}
                onChange={changeHandler}
                placeholder="Enter Password"
                name="password"
                className='bg-yellow-400 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />

            <span 
            className='absolute right-3 top-[38px] cursor-pointer'>
            {/* // onClick={() => setShowPassword((prev) => !prev)}>
            //     {showPassword ?  */}

            {/* //     (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : 

            //     (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)} */}
            </span>

        </label>

        <button className='bg-yellow-600 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
            Log In
        </button>

      </form>
    </div>
  );
}

export default Login;

