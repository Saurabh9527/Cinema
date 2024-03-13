import { User } from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import jwt from 'jsonwebtoken'

//& ---------Login Logic---------

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body; //~check all data filled or not
    if (!email || !password) {
      return res.status(401).json({
        message: "Incomplete credentials.",
        success: false,
      });
    }

    const user = await User.findOne({ email }); //~ check email is present in database

    if (!user) {
      return res.status(401).json({
        message: "Invalid email or Password",
        success: false,
      });
    }

    const isMatch = await bcryptjs.compare(password, user.password); //~ password Check Correct or not


    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid email or Password",
        success: false,
      });
    }

    //~if all good email and passowrd matched
    const tokenData ={
        id : user._id
    }

    //~ generetae token
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

//& ---------Logout Logic---------
export const Logout = async (req , res) =>{
                                         //~Clear Cookie            
    return res.status(200).cookie("token" , "" , {expiresIn : new Date(Date.now()), httpOnly:true}).json({
        message :"Logged Out Successfully",
        success : true
    });
};


//& ---------Register Logic---------
export const Register = async (req, res) => {
  try {
    const { fullName, email, password } = req.body; //~check all data filled or not

    if (!fullName || !email || !password) {
      return res.status(400).json({
        message: "Invalid Credintial",
        success: false,
      });
    }

    const user = await User.findOne({ email }); // ~check email already used or not
    if (user) {
      return res.status(409).json({
        message: "email already registered",
        success: false,
      });
    }

    //~ password hashing
    const hashedPassword = await bcryptjs.hash(password, 16);
    //~ user created
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
