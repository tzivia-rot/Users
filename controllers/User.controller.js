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

    AddUser: (req, res) => {
        const user = req.body;
        console.log(user);
        if (UserModel.AllValid(user.name,user.email,user.phoneNumber)) {
            console.log('valid');
            try {
                const hdate = new HDate(new Date(user.date));
                user.date=hdate;
                const newUser = UserModel.Add(user);
                res.json(newUser);
            }
            catch (e) {
                res.status(400).json({ message: e.message });
            }
        }
        else
            res.status(400).json({ message: 'the parms not valid' });
    },

    DeleteUser: async (req, res) => {
        try {
            const { id } = req.params;
            UserModel.Delete(id);
            res.status(200);
        }
        catch (e) {
            res.status(404).json({ message: e.message });
        }
    },

    UpdateUser: async (req, res) => {
        try {
            const { id } = req.params;
            const user = req.body;
            UserModel.Update(id, user);
            res.status(200);
        }
        catch (e) {
            res.status(404).json({ message: e.message });
        }
    }
}

export default UsersController;