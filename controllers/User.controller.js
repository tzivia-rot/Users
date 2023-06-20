import UserModel from '../Models/Users.model.js'

const UsersController = {

    getUsers: async (req, res) => {


    },

    addUser: async (req, res) => {

    },

    DeleteUser: async (req, res) => {
        try {
            const id = req.body;
            UserModel.Delete(id);
        }
        catch (e) {
            res.status(404).json({ message: e.message });
        }
    },

    UpdateUser: async (req, res) => {
        try {
            const { id, user } = req.body;
            UserModel.Update(id, user);
        }
        catch (e) {
            res.status(404).json({ message: e.message });
        }
    }
}

export default UsersController;