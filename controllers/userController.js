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
    readUser: async (req, res) => {
        try {
            const { id } = req.params;
            const user = await userModel.findById(id);

            if(!user) {
                return res.status(404).json({ message: "User not found" });
            }
            return res.status(200).json({ 
                id: user.id, 
                name: user.name,
                email: user.email,
                age: user.age
            });

        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server Error' });
        }
    },

    // Edit user 
    updateUser: async (req, res) => {
        try {
            // search user by id with url params
            const { id } = req.params; 
            // elements to edit in the request body
            const { name, email, age } = req.body;
    
            const user = await userModel.findById(id);
            // does not return user
            if(!user) {
                return res.status(404).json({ message: "User not found" });
            }
            // 
            const updateUser = await userModel.update(id, { name, email, age });
            return res.status(200).json({ 
                id: updateUser.id, 
                name: updateUser.name,
                email: updateUser.email,
                age: updateUser.age
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server Error' });
        }
    },

    deleteUser: async (req, res) => {
        try {
            const { id } = req.params;
            const user = await userModel.findById(id);
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
    
            // Appelle la méthode destroy du modèle avec l'id
            const deletedCount = await userModel.destroy(id);
            if (deletedCount === 0) {
                return res.status(404).json({ message: "User not found" });
            }
    
            return res.status(200).json({ message: "User deleted" });
    
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server Error' });
        }
    },
    
};


module.exports = userController;