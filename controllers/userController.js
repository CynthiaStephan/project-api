const userModel = require('../models/userModel');

const userController = {
    // Add an user
    addUser: async(req, res) => {
        try{
            const { name, email , age } = req.body;
            
            // Check the data format before sending using it
            if (name === ""){
                return res.status(400).json({ message : "Name not valid"});
            } if (!email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
                return res.status(400).json({ message : "Email not valid"});
            } if (age < 1){
                return res.status(400).json({ message : "Age not valid"});
            }
            
            const isUserExist = await userModel.getByMail(email);
            console.log( "console = " + isUserExist)
            if (isUserExist){
                return res.status(400).json({ message : "Already a registered user?"})
            }
            
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

            const { id } = req.params; 
            
            const { name, email, age } = req.body;

            // Check the data before sending it to th ebd
            if (name === ""){
                return res.status(400).json({ message : "Name not valid"});
            } if (!email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
                return res.status(400).json({ message : "Email not valid"});
            } if (age < 1){
                return res.status(400).json({ message : "Age not valid"});
            }

            // Récupérer le user par l'id avec la fonction du model
            const user = await userModel.findById(id);
            if(!user) {
                // n'a pas trouvé de user
                return res.status(404).json({ message: "User not found" });
            }
            // Stocker dans updatedUser le resultat de 
            const updatedUser = await userModel.update(id, { name, email, age });
            // console.log(updatedUser)
            return res.status(200).json({ 
                id: updatedUser.id, 
                name: updatedUser.name,
                email: updatedUser.email,
                age: updatedUser.age
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
            await userModel.destroy(id);

            return res.status(200).json({ message: "User deleted" });
    
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server Error' });
        }
    },
    
};


module.exports = userController;