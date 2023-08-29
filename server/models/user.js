const mongoose = require("mongoose")
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema(
    {
        firstName:{
            type:String,
            required:true,
            trim:true
        },
        lastName:{
            type:String,
            required:true,
            trim:true
        },
        email:{
            type:String,
            required:true,
            trim:true
        },
        password:{
            type:String,
            required:true
        }
    }
)

userSchema.methods.getJWTToken = function () {
    return jwt.sign({ _id: this._id }, "secret", {
      expiresIn: "15d",
    });
};

module.exports = mongoose.model("User", userSchema)