import express from 'express';
const app = express();
import mongoose from 'mongoose';
// import { userRoutes } from './routes/user.routes.js';
import { userRoutes } from './routes/user.routes.js';
import { videoRoutes } from './routes/video.routes.js';
import cookieParser from 'cookie-parser';
import { commentRoutes } from './routes/comment.routes.js';
import cors from 'cors'

app.use(cors({
    origin:'http://localhost:5173', // My react app running port
    credentials:true
}))

mongoose.connect('mongodb://localhost:27017/Youtube')
.then(()  => {
    console.log("DB connected")
})
.catch((err) => {
    console.log("DB not Connected ", err)
})

app.use(express.json()) // middleware
app.use(cookieParser());

app.get('/', (req, res) =>{
    res.send("Welcome to root routes")
})

app.post('/', (req, res) => {
  res.send("POST request received at root");
});

userRoutes(app)
videoRoutes(app)
commentRoutes(app)

const PORT = 5000;
app.listen(PORT, ()=>{
    console.log(`Server Connected At PORT:${PORT}`)
})