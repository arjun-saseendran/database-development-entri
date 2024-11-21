import {Router} from 'express'
import { createTodo, readTodo, updateTodo, deleteTodo } from "../controllers/todo.controllers.js";

const router = Router()


router.get('/', readTodo)
router.post('/', createTodo)
router.put('/', updateTodo)
router.delete('/', deleteTodo)

export default router;