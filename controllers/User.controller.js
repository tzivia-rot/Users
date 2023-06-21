import UserModel from "../Models/Users.model.js";
import { HDate } from '@hebcal/core';

const UsersController = {

    getUsers: (req, res) => {
        let users = UserModel.Get();
        res.json(users);
    },
    getById: (req, res) => {
        try {
            const { id } = req.body;
            let user = UserModel.getById(id);
            res.json(user);
        }
        catch (e) {
            res.status(404).json({ message: e.message });
        }
    },
    addUser:  (req, res) => {
        console.log(req.body);
        const {name,email,phone,date}=req.body;
       
        if(UserModel.AllValid(name,email,phone))
        {
            try{
                const hdate=new HDate(new Date(date));
                const newUser =  UserModel.Add({ name, email,phone ,hdate});
                res.json(newUser);
            }
            catch(e){
                res.status(400).json({ message: e.message });
            }
        }
        else
            res.status(400).json({message:'the parms not valid'});

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
        console.log("up")
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