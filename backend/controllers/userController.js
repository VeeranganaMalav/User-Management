const db = require("../db/index.js");

const User = db.user;

//User signup
exports.signup = (req, res) => {
    // check for missing fields
    if (!req.body.name || !req.body.email){
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
                // const salt = bcrypt.genSalt(10);
                User.create(req.body)
                    .then((data) => {
                        res.status(200).send(data);
                        // res.send("Account registered!");
                        // res.redirect("/login");
                    });
                
            }
        }).catch((err) => {
            res.status(500).send({message : `Error while creating user with email ${req.body.email}`})
        });
};

//User login
exports.login = (req, res) => {
    User.findOne({
        where : {
            email : req.body.email
        }
        }).then(existingUser => {
            if(!existingUser){
                res.status(404).send({message : `Account with email ${req.body.email} does not exist`});
            }
            else{
                var comparePassword = bcrypt.compareSync(req.body.password, existingAccount.password);

                if(!comparePassword){
                    res.send({message : 'Invalid Password'});
                }

            }
        })
};

//Add address in user model
/* exports.addAddress = (req, res) => {
    const emailId = req.body.email;

    const existingUser = User.findByPk({
                                where : {
                                    email : emailId
                                }
                            });

    if(!existingUser){      //User not found
        res.status(404).send({message : `User with email ${emailId} does not exist`});
    }
    else{
        if(!existingUser.address){      //if user address is empty
            existingUser.address = req.body.address;
            existingUser.save();

            res.status(200).send({message : `Address for the user with email ${emailId} was added successfully`});
        }
        else{       //if user address is not empty
            res.status(400).send({message : `Address for the user with email ${emailId} is already added`});
        }
    }
}; */

//List users with address
/* exports.listUsersWithAddress = (req, res) => {
    User.findAll({
            attributes : ['name', 'address']    //only selected fields from user model will be retrieved
        })
        .then((data) => {
            res.status(200).send(data);
        })
        .catch((err) => {
            res.status(500).send({message : 'Error retrieving users'});
        });
}; */

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
