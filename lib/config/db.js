import mongoose from "mongoose";
export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://nehakashyap1011:mongodb123@cluster0.16i8j.mongodb.net/todo-app');
    console.log("DB connected");
}