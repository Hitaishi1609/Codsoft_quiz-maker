const jwt = require("jsonwebtoken");

exports.sendToken = (res, user, message, statusCode = 200) => {
    const token = user.getJWTToken();
    const options = {
      expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
      httpOnly: true,
      // secure: true,
      sameSite: "none",
    };
  
    res.status(statusCode).cookie("token", token, options).json({
      success: true,
      message,
      user
    });
  };


  exports.authenticateToken = (req, res, next) => {
    const token = req.cookies.token;
  
    if (!token) {
      return res.status(401).json({ success: false, message: "User Not Logged In - token" });
    }
  
    try {
      const decodedToken = jwt.verify(token, "secret");
      console.log("decoded token ",decodedToken);
      req.user = { _id: decodedToken._id }; // Attach the user's ID to req.user
      next();
    } catch (error) {
      res.status(401).send("Unauthorized error");
    }
  };