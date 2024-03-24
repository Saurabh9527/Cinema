
import express from 'express';
import dotenv from 'dotenv'
import databaseConnection from './utils/database.js';
import cookieParser from 'cookie-parser'
import userRoute from './routes/userRoute.js'
import cors from 'cors'

databaseConnection();  
dotenv.config()

const app = express()
const port = process.env.PORT;

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());

const corsOptions = { 
    origin : "http://localhost:5174",
    credentials : true
}

app.use(cors(corsOptions));

app.use("/api/v1/user" , userRoute);


app.listen(port , () =>{
    console.log(`Server is Listing ${port}`);
});

