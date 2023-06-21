import express from 'express'
import UserRouter from './routing/user.routing.js';

const app =express()
const router = express.Router();
const port = 3000;

app.use('/Users',UserRouter);

app.listen(port , function(){
    console.log(`app listening http://localhost:${port}`);
})