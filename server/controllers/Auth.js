const bcrypt = require("bcrypt")
const User = require("../models/user");
const { sendToken } = require("../utils/sendToken");

require("dotenv").config();

//signup handler
exports.signup = async (req,res)=>{
    try{
        
        //fetch data
        const {firstName, lastName, email, password, confirmPassword} = req.body;

        // Check if All Details are there or not
        if (
        !firstName ||
        !lastName ||
        !email ||
        !password ||
        !confirmPassword
        ) {
         res.send().status(400)({
          success: false,
          message: "All Fields are required",
        })
        }

        // Check if password and confirm password match
        if (password !== confirmPassword) {
        return res.status(400).json({
          success: false,
          message:
            "Password and Confirm Password do not match. Please try again.",
        })
        }

        // Check if user already exists
      const existingUser = await User.findOne({ email })
      if (existingUser) {
        return res.status(400).json({
          success: false,
          message: "User already exists. Please sign in to continue.",
        })
      }

        //secure the password
        let hashedPassword;
        try{
            hashedPassword = await bcrypt.hash(password, 10)
        }
        catch(err){
            res.status(400).json({
                success: false,
                message: "Error in hashing password"
            })
        }

        //create entry for user
        const user = await User.create({
            firstName, lastName, email, password:hashedPassword
        })

        await user.save();

        res.status(200).json({
            success: true,
            message: "User Created Successfully"
        })
    }
    catch(error){
        console.error(error)
        return res.status(400).json({
            success: false,
            message: "User can't be registered. Try again later"
        })
    }

}

//login handler
exports.login = async (req, res) => {
    try {
      //get data
      const { email, password } = req.body;
  
      if (!email || !password) {
        return res.status(400).json({
          success: false,
          message: "Please enter all details carefully",
        });
      }
  
      //check for registered user
      let user = await User.findOne({ email });
      console.log("User", user)
  
      //if not a registered user
      if (!user) {
        return res.status(401).json({
          success: false,
          message: "User is not registered",
        });
      }
  
      if (await bcrypt.compare(password, user.password)) {
        sendToken(res, user, "Logged In Successfully", 201);
      } else {
        return res.status(403).json({
          success: false,
          message: "Incorrect Password",
        });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Login failure",
      });
    }
  }


  exports.getMyProfile = async (req, res) => {
    try {
     const user = await User.findById(req.user._id);
     console.log("USER>>>>>", req.user._id)
     if (!user) {
       return res
         .status(500)
         .json({ success: false, message: "User Not Logged In" });
     }
     res.status(200).json({ success: true, User: user });
   } catch (error) {
     res.status(400).json({ success: false, message: error });
   }
 };


  exports.logout = async (req, res) => {
    res
      .status(200)
      .cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
        secure: true,
        sameSite: "none",
      })
      .json({
        success: true,
        message: "Logged out Successfully",
      });
  };