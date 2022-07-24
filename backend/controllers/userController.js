const { user } = require("../db/index.js");
const db = require("../db/index.js");

const User = db.user;

//User signup
exports.signup = (req, res) => {
    const {firstName, lastName, email, password, address} = req.body;

    // check for missing fields
    if (!firstName || !lastName || !email || !password){
        res.status(400).send("Please enter the missing fields");
        return;
    }

    //find if the user already exists
    User.findOne({
            where : {
                email : email
            }
        }).then(existingUser => {
            if(existingUser){
                res.status(409).send({message : `User with the email ${email} already exits`});
            }
            else{       //if user does not exist then create a new one
                User.create(req.body)
                    .then((createdUser) => {
                        res.status(200).send({
                            firstName : createdUser.firstName,
                            lastName : createdUser.lastName,
                            email : createdUser.email,
                            address : createdUser.address
                        });
                    }); 
            }
        }).catch((err) => {
            res.status(500).send({message : `Error while creating user with email ${email}`})
        });
};

//User login
exports.login = (req, res) => {
    const attemptedPassword = req.body.password;
    delete req.body.password;

    User.findOne({
        where : {
            email : req.body.email
        }
        }).then(existingUser => {
            if(!existingUser || !attemptedPassword){      //if invalid email is provided or password is not provided
                res.status(401).send({message : 'Not Authorized to access the user account'});
            }
            else{
                const hashedPassword = existingUser.hashPassword(attemptedPassword);
                //if user with the given email exists then check the attempted hashedPassword with the hashed password of already existing user
                if(hashedPassword !== existingUser.password){   
                    res.status(401).send({message : 'Not Authorized to access the user account'});
                    return;
                }
                else{
                    res.status(200).send({
                        firstName : existingUser.firstName,
                        lastName : existingUser.lastName,
                        email : existingUser.email,
                        address : existingUser.address
                    });
                } 
            }
        }).catch((err) => {
            res.status(500).send({message : 'Error while logging in'});
        })
};

//List user details
/* exports.getUserDetails = (req, res) => {
    const email = req.params.userEmail;

    User.findOne({
        where : {
            email : email
        },
        attributes : {
            include : ['firstName', 'lastName', 'email', 'address']
        }
    }).then(existingUser => {
        if(!existingUser){
            res.status(200).send({message : `User with the email ${email} already exits`});
        }
        else{
            res.send(existingUser);
        }
    }).catch((err) => {
        res.status(500).send({message : `Error while creating user with email ${email}`})
    });
}; */

//Update user details
exports.updateUser = (req, res) => {
    const emailId = req.body.email;

    //only update address of the user with the given email in user model
    User.update(req.body, {
            where : {
                email : emailId
            }
        })
        .then((num) => {        //where "num" represents number of rows affected
            console.log(num);
            if(num == 1){
                return User.findByPk(emailId);
            }
            else{
                res.status(400).send({message : `Cannot update user with email ${emailId}`});
            }
        }).then( user => {
            console.log('UPDATED USER' , user);
                res.status(200).send({
                    message : `User was updated successfully`,
                        firstName : user.firstName,
                        lastName : user.lastName,
                        email : user.email,
                        address : user.address
                });
        }).catch((err) => {
            res.status(500).send({message : `Error updating user with email ${emailId}`});
        });
};
