import express from 'express';

import UsersController from '../controllers/User.controller.js';
import bodyParser from 'body-parser';

var urlencodedParser = bodyParser.urlencoded({ extended: false });
const UserRouter = express.Router();
UserRouter.delete("/DeleteUser/:id",urlencodedParser, UsersController.DeleteUser)
UserRouter.post("/AddUser",urlencodedParser, UsersController.addUser);
UserRouter.get("/GetUsers",UsersController.getUsers);
UserRouter.put("/UpdateUser/:id", UsersController.UpdateUser);

export default UserRouter;