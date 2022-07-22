const db = require("../db/index.js");

const User = db.account;

//User signup
exports.signup = (req, res) => {
    const {name, email, password} = req.body;

    // check for missing fields
    if (!name || !email || !password){
        res.send("Please enter all the fields");
    }

    const existingUser = User.findOne({
        where : {
            email : email
        }
    });

    if(existingUser){
        res.send('A user with the email already exits!');
    }
    else{
        User.create(req.body)
            .then((data) => {
                res.send("Account registered!");
                res.redirect("/login");
            })
            .catch((err) => console.log(err));
    }
};

//User login
exports.login = (req, res) => {
    const { email, password } = req.body;

    // check for missing fields
    if (!email || !password){
        res.send("Please enter the required fields");
    }

    const existingUser = User.findOne({ 
        where : {
            email : email
        }
    });

    if(!existingUser){
        res.send("Invalid email or password");
    }
    else{
        //confirm password

        res.redirect("/home");
    }
};

//Add address
exports.addAddress = (req, res) => {
    
};

//List users with address
exports.listUsersWithAddress = (req, res) => {
    User.findAll()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.send({message : `Error updating user`});
        });
};

//Update user
exports.updateUser = (req, res) => {
    User.update(req.body)
        .then((num) => {
            if(num == 1){
                res.send({message : `User was updated successfully.`});
            }
            else{
                res.send({message : `Cannot update user`});
            }
        }).catch((err) => {
            res.send({message : `Error updating user`});
        });
};