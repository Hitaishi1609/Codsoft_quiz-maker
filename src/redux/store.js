import { configureStore } from "@reduxjs/toolkit"

import {authReducer} from "../redux/reducer/authReducer"

import { quizReducer } from '../redux/reducer/quizReducer'

import { questionReducer } from '../redux/reducer/questionReducer'



const store = configureStore({
    reducer:{
        auth: authReducer,
        quiz: quizReducer,
        questions: questionReducer
    }

})

export default store
