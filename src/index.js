import express from 'express'
import dotenv from 'dotenv'
import dbConnection from './db/db.connection.js'
import TodoRouter from './routes/todo.routes.js'

dotenv.config({path: './.env'})
const app = express()
const PORT =  process.env.PORT || 3000

// middewars 
app.use(express.json())

// routes
app.use('/', TodoRouter)


app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`)
    dbConnection()
}
)