import { Todo } from "../models/todo.models";

const createTodo = async (req, res) => {
const {todo} = req.body
await Todo.create({todo})

res.status(201).json({message: 'Created'})

};

const readTodo = async(req, res) => {
const todo = await Todo.find()    
res.status(200).json({todo})
};

const updateTodo = async (req, res) => {};

const deleteTodo = async (req, res) => {};

export { createTodo, readTodo, updateTodo, deleteTodo };

