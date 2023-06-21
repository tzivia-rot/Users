import UserModel from "../Models/Users.model.js";

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
    addUser: (req, res) => {
        const { name, email, phone } = req.body;

        try {
            const newUser = UserModel.Add({ name, email, phone });
            res.json(newUser);
        }
        catch (e) {
            res.status(400).json({ message: e.message });
        }
    },

    DeleteUser: async (req, res) => {
        try {
            const id = req.params;
            UserModel.Delete(id);
        }
        catch (e) {
            res.status(404).json({ message: e.message });
        }
    },

    UpdateUser: async (req, res) => {
        try {
            const { id } = req.params;
            const { user } = req.body;
            UserModel.Update(id, user);
        }
        catch (e) {
            res.status(404).json({ message: e.message });
        }
    }
}

export default UsersController;