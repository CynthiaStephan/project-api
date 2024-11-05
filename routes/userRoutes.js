const { Router } = require('express');

const userController = require('../controllers/userController');

const router = Router(); 
// Add user
router.post('/api/users', userController.addUser);
// Get user
router.get('/api/users/:id', userController.readUser);
// Edit user
router.put('/api/users/:id', userController.updateUser);
// Delete user
router.delete('/api/users/:id', userController.deleteUser);

module.exports = router;