import UserRouter from './routing/user.routing.js';
import express from 'express';
const app = express()
const port = 3000
const router = express.Router();

app.use('/Users',UserRouter);

app.listen(port,function(){
    console.log("");
})