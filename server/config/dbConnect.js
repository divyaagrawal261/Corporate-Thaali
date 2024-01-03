import mongoose from "mongoose";

const connectDb=()=>{
    try{
        mongoose.connect(process.env.MONGO_URI)
        console.log("Database is successfully connected");
    }
    catch(err)
    {
        console.log("Can't connect to DB")
    }
}

export default connectDb;