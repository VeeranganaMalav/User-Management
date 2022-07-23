module.exports = app => {
    var router = require("express").Router();
    const userController = require('../controllers/userController');

    //User Signup
    router.post('/signup', userController.signup);

    //User Login
    router.get('/login', userController.login);

    //List all users details
    // router.get('/usersDetails', userController.getUserDetails);

    //Update user details
    router.put('/updateUserDetails', userController.updateUser);

    app.use('/api', router);
};