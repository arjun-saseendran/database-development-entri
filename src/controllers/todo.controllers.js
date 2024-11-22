import { Todo } from "../models/todo.models.js";

const createTodo = async (req, res) => {
  try {
    const { todo } = req.body;
    const newTodo = new Todo({ todo });
    await newTodo.save();
    res.status(201).json({ message: "Created" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Todo conetent is required" });
  }
};

const readTodo = async (req, res) => {
  const todo = await Todo.find();
  res.status(200).json({ todo });
};

const updateTodo = async (req, res) => {
  const { id } = req.params;
  await Todo.findByIdAndUpdate(id, req.body);
  res.status(202).json({ message: "Updated" });
};

const deleteTodo = async (req, res) => {
  const { id } = req.params;
  await Todo.findByIdAndDelete(id);
  res.status(204).json({ message: "Deleted" });
};

export { createTodo, readTodo, updateTodo, deleteTodo };
