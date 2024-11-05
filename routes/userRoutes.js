const { Router } = require('express');

const userController = require('../controllers/userController');

const router = Router(); 
// Add user
router.post('/api/users', userController.addUser);
// Get user
router.get('/api/users/:id', userController.getUser);
// Edit user
router.put('/api/users/:id', userController.editUser);
// Delete user
router.delete('/api/users/:id', userController.deleteUser);

module.exports = router;