const ques = require("./routes/question")
const quiz = require("./routes/quiz")
const user = require("./routes/user")
const express = require ("express")
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser"); 

require("dotenv").config()
const PORT = process.env.PORT || 5000

app.use(express.json())

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
    cors({
      origin: "http://localhost:3000" || "*",
      credentials: true,
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
      allowedHeaders: ["Content-Type","Authorization"],
    })
);

app.use("/api/v1/auth", user)

app.use("/api/v1/quiz", quiz)

app.use("/api/v1/ques", ques)

app.listen(PORT, ()=>{
    console.log("App started successfully at ", PORT)
})

const dbConnect = require("./config/database")
dbConnect()

app.get("/", (req,res)=>{
    res.send("This is home page")
})