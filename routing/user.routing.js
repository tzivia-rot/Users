import express from 'express';

import UsersController from '../controllers/User.controller.js';

const UserRouter = express.Router();
UserRouter.delete("/DeleteUser", UsersController.DeleteUser)
UserRouter.post("/addUser", UsersController.addUser);
UserRouter.get("/getUsers", UsersController.getUsers);
UserRouter.put("/updateUser", UsersController.UpdateUser);

export default UserRouter;