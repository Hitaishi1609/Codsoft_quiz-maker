import React, { useEffect, useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import {toast} from "react-hot-toast"
// import { setSignupData } from "../slices/authSlice"
import { useDispatch, useSelector } from "react-redux"
import { clearErrorMessage, signup } from "../redux/actions/auth"
import { Navigate, useNavigate } from 'react-router-dom';


function Signup() {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const {loading, success, message, error} = useSelector(state => state.auth)

    useEffect(()=>{
        if(message){
            toast.success(message)
            dispatch(clearErrorMessage())
            navigate("/")
        }
        if(error){
            toast.error(error)
            dispatch(clearErrorMessage())
        }

    }, [loading,success])


    const [formData, setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    })

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const { firstName, lastName, email, password, confirmPassword } = formData

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
    if(formData.password != formData.confirmPassword) {
        toast.error("Passwords do not match");
        return ;
    }


    dispatch(signup(firstName, lastName, email, password, confirmPassword))
    console.log("LOADING",loading, message,error)

    // Reset
    setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

}


  return (
    <div className='w-1/2 ml-80 mt-32'>
      <form 
        onSubmit={submitHandler} 
      >
        {/* first name and lastName */}
            <div className='flex gap-x-4 mt-[20px]'>
                    <label className='w-full'>
                        <p className='text-[1.175rem] text-richblack-900 mb-1 leading-[1.375rem]'>First Name<sup className='text-[#ef4444]'>*</sup></p>
                        <input
                            required
                            type="text"
                            name="firstName"
                            onChange={changeHandler}
                            placeholder="Enter First Name"
                            value={formData.firstName}
                            className='bg-yellow-400 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                        />
                    </label>

                    <label className='w-full'>
                        <p className='text-[1.175rem] text-richblack-900 mb-1 leading-[1.375rem]'>Last Name<sup className='text-[#ef4444]'>*</sup></p>
                        <input
                            required
                            type="text"
                            name="lastName"
                            onChange={changeHandler}
                            placeholder="Enter Last Name"
                            value={formData.lastName}
                            className='bg-yellow-400 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                        />
                    </label>
            </div>
            {/* email Add */}
            <div className='mt-[20px]'>
            <label className='w-full mt-[20px]'>
                    <p className='text-[1.175rem] text-richblack-900 mb-1 leading-[1.375rem]'>Email Address<sup className='text-[#ef4444]'>*</sup></p>
                    <input
                        required
                        type="email"
                        name="email"
                        onChange={changeHandler}
                        placeholder="Enter Email Address "
                        value={formData.email}
                        className='bg-yellow-400 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                    />
            </label>
            </div>
            

            {/* createPassword and Confirm Password */}
            <div className='w-full flex gap-x-4 mt-[20px]'>
                <label className='w-full relative'>
                    <p className='text-[1.175rem] text-richblack-900 mb-1 leading-[1.375rem]'>Create Password<sup className='text-[#ef4444]'>*</sup></p>
                    <input
                        required
                        // type= {showPassword ? ("text") : ("password")}
                        name="password"
                        onChange={changeHandler}
                        placeholder="Enter Password"
                        value={formData.password}
                        className='bg-yellow-400 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                    />
                    <span
                     className='absolute right-3 top-[38px] cursor-pointer' >
                    {/* onClick={() => setShowPassword((prev) => !prev)}>
                        {showPassword ? 

                        (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : 

                        (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)} */}
                    </span>
                </label>

                <label className='w-full relative'>
                    <p className='text-[1.175rem] text-richblack-900 mb-1 leading-[1.375rem]'>Confirm Password<sup className='text-[#ef4444]'>*</sup></p>
                    <input
                        required
                        // type= {showConfirmPassword ? ("text") : ("password")}
                        name="confirmPassword"
                        onChange={changeHandler}
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        className='bg-yellow-400 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                    />
                    <span 
                     className='absolute right-3 top-[38px] cursor-pointer'>
                    {/* // onClick={() => setShowConfirmPassword((prev) => !prev)}>
                    //     {showConfirmPassword ? */}

                    {/* //      (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : 

                    //      (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)} */}
                    </span>
                </label>
            </div>
        <button type="submit" className=' w-full bg-yellow-600 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
            Create Account
        </button>
        </form>
    </div>
  );
}

export default Signup;
