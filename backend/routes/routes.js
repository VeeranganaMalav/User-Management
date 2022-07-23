module.exports = app => {
    var router = require("express").Router();
    const userController = require('../controllers/userController');

    //User Signup
    router.post('/signup', userController.signup);

    //User Login
    router.get('/login', userController.login);

    //Add user address
    // router.post('/addAddress', userController.addAddress);

    //List all users with address
    // router.get('/users', userController.listUsersWithAddress);

    //Update user
    router.put('/updateUser', userController.updateUser);

    app.use('/api', router);
};