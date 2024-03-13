
import express from 'express';
import dotenv from 'dotenv'
import databaseConnection from './utils/database.js';
import cookieParser from 'cookie-parser'
import userRoute from './routes/userRoute.js'
import cors from 'cors'

databaseConnection();  //* database Connection
dotenv.config()

const app = express()
const port = process.env.PORT;

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());

const corsOptions = { //~ for cookies save
    origin : "http://localhost:5174",
    credentials : true
}

app.use(cors(corsOptions));

app.use("/api/v1/user" , userRoute);
// app.get("/" , (req , res) => {
//     res.status(200).json({
//         message:"Hello I am coming from backend",  //~test on chrome http://localhost:8080/
//         success:true
//     })
// })

app.listen(port , () =>{
    console.log(`Server is Listing ${port}`);
});

