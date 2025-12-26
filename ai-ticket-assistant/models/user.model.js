import mongoose from "mongoose"

//Schema is defined here

const userSchema = new mongoose.Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    role: {type: String, default: "User", enum: ["user", "moderator", "admin"]},
    skills: [String],
    createdAt: {type: Date, default: Date.now},
})

export default mongoose.model("User", userSchema)
