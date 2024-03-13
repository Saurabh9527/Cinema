
import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config()

//~ database Connection
const databaseConnection = () =>{
    
    mongoose.connect(process.env.MONGO_URL).
    then(()=>{
        console.log("Database Connected Successfully");
    })
    .catch((error)=>{
        console.log(error);
    });
}

export default databaseConnection;


