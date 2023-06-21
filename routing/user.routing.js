import express from 'express';
import bodyParser from 'body-parser';

import UsersController from '../controllers/User.controller.js';

var urlencodedParser = bodyParser.urlencoded({ extended: false });
const UserRouter = express.Router();
UserRouter.delete("/DeleteUser/:id", urlencodedParser, UsersController.DeleteUser)
UserRouter.post("/AddUser", urlencodedParser, UsersController.AddUser);
UserRouter.get("/GetUsers", UsersController.GetUsers);
UserRouter.put("/UpdateUser/:id",urlencodedParser, UsersController.UpdateUser);

export default UserRouter;