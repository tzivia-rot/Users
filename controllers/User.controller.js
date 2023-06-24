import { HDate } from '@hebcal/core';

import UserModel from "../Models/Users.model.js";

const UsersController = {
    GetUsers: (req, res) => {
        let users = UserModel.Get();
        res.json(users);
    },

    GetById: (req, res) => {
        try {
            const { id } = req.body;
            let user = UserModel.getById(id);
            res.json(user);
        }
        catch (e) {
            res.status(404).json({ message: e.message });
        }
    },

    AddUser:  (req, res) => {
        const {name,email,phoneNumber,date}=req.body;
        try{
            const hdate=new HDate(new Date(date));
            const newUser =  UserModel.Add({ name, email,phoneNumber ,hdate});
            res.json(newUser);
        }
        catch(e){
            res.status(400).json({ message: e.message });
        }
    },

    DeleteUser: async (req, res) => {
        console.log('del')
        try {
            const {id} = req.body;
            UserModel.Delete(id);
        }
        catch (e) {
            res.status(404).json({ message: e.message });
        }
    },

    UpdateUser: async (req, res) => {
        try {
            const { id } = req.params.id;
            const { user } = req.body;
            UserModel.Update(id, user);
        }
        catch (e) {
            res.status(404).json({ message: e.message });
        }
    }
}

export default UsersController;