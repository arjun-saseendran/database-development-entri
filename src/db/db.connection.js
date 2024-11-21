import mongoose from "mongoose";

const dbConnection =  async ()=> {
    await mongoose.connect(`${process.env.MONGODB_URL}`).then(()=>{
        console.log('MongoDB connected successfully')
        
    }).catch(error => console.log('MongoDB connection error ',error)
    )
}

export default dbConnection