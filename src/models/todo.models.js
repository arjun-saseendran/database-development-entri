import mongoose, { Schema } from "mongoose"


const todoSchema = new Schema({
    todo: {
        type: String,
        required: true
    }
})

export const Todo = mongoose.model('todo', todoSchema)