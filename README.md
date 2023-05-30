# User Management System
It is an user management system that displays all of the users on a dashboard and has register, login and user update functionality


## Code Replication steps and Setup documentation on local machine

### Requirements :-
For this project, we need <b>Visual Studio Code</b> and <b>MySQL</b> Workbench. This application is built using express, react, sequelize and MySQL.

#### Working/ Setup :-

1. In MySQLWorkbench, create a database using the following queries :-
- create database usermanagementsystem
- use usermanagementsystem

2. In VS Code, open this folder.
3. In the backend/config/config.js file update the username an password of MySQL Workbench local instance.
4. Using the terminal in VS Code, install the dependencies using : <b>npm i</b>
5. Then start the app with : <b>npm run start</b>

#### Functionality using Frontend :-

- When user requests the first time for address <b>localhost://3000/signup</b> in the browser, he/she will land on the <b>signup</b> page.

- On <b>signup</b> page,user can enter details like firstname, lastname, email, password and confirm password.

<img width="1440" alt="Sign Up Details" src="https://github.com/VeeranganaMalav/User-Management/assets/77395344/28972301-ebdd-410e-b9e3-0e1123712874">

- After signup, the user will be redirected to <b>updateUserDetails</b> (<b>localhost://3000/updateUserDetails</b>) page.

- In <b>updateUserDetails</b> page given by the address <b>localhost://3000/updateUserDetails</b> , it will fetch the first name, last name and email from signup but we can update first name, last name and address of the user.
<img width="1440" alt="Update User Details" src="https://github.com/VeeranganaMalav/User-Management/assets/77395344/1fade16c-e79b-4fa2-9c64-f329b8de5276">

- After updating user, he/she will be redirected to <b>userDetails</b> page where the first name, last name , email and address of the user will be displayed.

<img width="1440" alt="userDetails page preview" src="https://github.com/VeeranganaMalav/User-Management/assets/77395344/bb0910fa-6919-40ab-901e-19a5e7924c37">

- Also a user can request for address <b>localhost://3000/login</b>, he/she will land on the <b>login</b> page.

- In the <b>login</b> page, user will be asked for entering email and password.

<img width="1440" alt="login page preview" src="https://github.com/VeeranganaMalav/User-Management/assets/77395344/d9f51e74-bc40-473a-9aa9-21fe399d1f9e">

- After logging in, the user will be redirected to <b>userDetails</b> page.

#### DB Design :-
The database is named <b>usermanagementsystem</b> which contains a <b>users</b> table. It consists of following fields:-
- firstName
- lastName
- email
- password
- salt
- address

#### Test functionality without frontend using Postman :-
<img width="1440" alt="postman preview" src="https://github.com/VeeranganaMalav/User-Management/assets/77395344/be254c44-9f5f-4b6f-be76-02cb93a1fa30">

