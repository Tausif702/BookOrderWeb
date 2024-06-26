import exress from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors'


import bookRoute from "./route/book.route.js"
import userRoute from './route/user.route.js'

const app = exress();
app.use(exress.json());
app.use(cors());
dotenv.config();
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBUrl;

//connectoin database mongoDB
 
try{
    mongoose.connect(URI,{
      useNewUrlParser:true,
      useUnifiedTopology:true

    })
    console.log("Database connected successfully !!!");
}catch(error){
  console.log("Connetion failed..",error);
}

//defining route'
app.use("/book",bookRoute);
app.use('/user',userRoute);



app.listen(PORT, () => {
  console.log(`I'm running on port no. ${PORT} and we are success.`)
})
