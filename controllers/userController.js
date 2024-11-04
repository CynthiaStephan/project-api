const userModel = require('../models/userModel');

const userController = {
    // Add an user
    addUser: async(req, res) => {
        try{
            const { name, email , age } = req.body;
            const newUser = await userModel.create({ name, email , age });
            return res.status(201).json({ 
                id: newUser.id, 
                name: newUser.name,
                email: newUser.email,
                age: newUser.age
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server Error' });
        } 

        
    },

    // Get user by id
    getUser: async (req, res) => {
        try {
            const { id } = req.params;
            const user = await userModel.findByPk(id);

            if(!user) {
                return res.status(404).json({ message: "User not found" });
            }

        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server Error' });
        }
    },

    // Edit user 
    editUser: async (req, res) => {
        try {
            // search user by id with url params
            const { id } = req.params; 
            // elements to edit in the request body
            const { name, email, age } = req.body;
    
            const user = await userModel.findByPk(id);
            // does not return user
            if(!user) {
                return res.status(404).json({ message: "User not found" });
            }
    
            await userModel.update({ name, email, age });
            return res.json({ message: 'User updated successfully', user });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server Error' });
        }
    },

    deleteUser: async (req, res) => {
        try {
            const { id } = req.params;
            const user = await userModel.findByPk(id);
            if(!user) {
                return res.status(404).json({ message: "User not found" });
            }

            await userModel.destroy({
                where: {
                    id: { id },
                }
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server Error' });
        }
    },
    
};

module.exports = userController;