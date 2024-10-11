import mongoose from "mongoose";

export const connectDB = async () => {

        await mongoose.connect('mongodb+srv://nehakashyap1011:1234@cluster0.16i8j.mongodb.net/todo-app');
        console.log("DB connected");
 
};
