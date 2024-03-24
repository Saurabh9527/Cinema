import { User } from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import jwt from 'jsonwebtoken'


export const Login = async (req, res) => {
  try {
    const { email, password } = req.body; 
    if (!email || !password) {
      return res.status(401).json({
        message: "Incomplete credentials.",
        success: false,
      });
    }

    const user = await User.findOne({ email }); 

    if (!user) {
      return res.status(401).json({
        message: "Invalid email or Password",
        success: false,
      });
    }

    const isMatch = await bcryptjs.compare(password, user.password); 


    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid email or Password",
        success: false,
      });
    }

    const tokenData ={
        id : user._id
    }


    const token = await jwt.sign(tokenData , "gsdhgsdsksdgfsdkskdkhsd" , {expiresIn:"1d"});

    const userResponse = {
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
    };

    return res.status(200).cookie("token" , token ,  {httpOnly :true}).json({
        message : `Welcome ${user.fullName}`,
        success : true,
        user : userResponse,
    });
  } catch (error) {
    console.log(error);
  }
};


export const Logout = async (req , res) =>{
                                                 
    return res.status(200).cookie("token" , "" , {expiresIn : new Date(Date.now()), httpOnly:true}).json({
        message :"Logged Out Successfully",
        success : true
    });
};



export const Register = async (req, res) => {
  try {
    const { fullName, email, password } = req.body; 

    if (!fullName || !email || !password) {
      return res.status(400).json({
        message: "Invalid Credintial",
        success: false,
      });
    }

    const user = await User.findOne({ email }); 
    if (user) {
      return res.status(409).json({
        message: "email already registered",
        success: false,
      });
    }

    
    const hashedPassword = await bcryptjs.hash(password, 16);
   
    await User.create({
      fullName,
      email,
      password: hashedPassword,
    });

    return res.status(201).json({
      message: "Account Created Succssfully",
      success: true,
    });

  } catch (error) {
    console.log(error);
  }
};
