const { user } = require("../db/index.js");
const db = require("../db/index.js");

const User = db.user;

//User signup
exports.signup = (req, res) => {
    // check for missing fields
    const {firstName, lastName, email, password, address} = req.body;

    if (!firstName || !lastName || !email || !password){
        res.status(400).send("Please enter the missing fields");
        return;
    }

    //find if the user already exists
    User.findOne({
            where : {
                email : req.body.email
            }
        }).then(existingUser => {
            if(existingUser){
                res.status(200).send({message : `User with the email ${req.body.email} already exits`});
            }
            else{
                User.create(req.body)
                    .then((data) => {
                        res.status(200).send(data);
                        // res.send("Account registered!");
                    });
                
            }
        }).catch((err) => {
            res.status(500).send({message : `Error while creating user with email ${req.body.email}`})
        });
};

//User login
exports.login = (req, res) => {
    const attemptedPassword = req.body.password;
    delete req.body.password;

    User.findOne({
        where : {
            email : req.body.email
        },
        attributes : {
            include : ['password', 'salt']
        }
        }).then(existingUser => {
            if(!existingUser || !attemptedPassword){      //if invalid email or password is provided
                res.status(401).send({message : 'Not Authorized to access the user account'});
            }
            else{
                const hashedPassword = existingUser.hashPassword(attemptedPassword);
                if(hashedPassword !== existingUser.password){
                    res.status(401);
                    return;
                }
                else{
                    res.status(200).send(existingUser);
                } 
            }
        }).catch((err) => {
            res.status(500).send({message : 'Error while loggong in'});
        })
};

//Update user
exports.updateUser = (req, res) => {
    const emailId = req.body.email;

    //only update address of the user with the given email in user model
    User.update(req.body, {
            where : {
                email : emailId
            }
        })
        .then((num) => {        //where "num" represents number of rows affected
            if(num == 1){
                res.status(200).send({message : `User with email ${emailId} was updated successfully`});
            }
            else{
                res.send({message : `Cannot update user with email ${emailId}`});
            }
        }).catch((err) => {
            res.status(500).send({message : `Error updating user with email ${emailId}`});
        });
};
