const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;
app.use(bodyParser.json());

const db = require('./db/index.js');

require("./routes/routes.js")(app);

const validFrontendRoutes = ['/', '/signup', '/login', '/userDetails', '/updateUserDetails'];
const indexPath = path.join(__dirname, '..', 'web', 'index.html');

validFrontendRoutes.forEach((stateRoute) => {
  app.get(stateRoute, (req, res) => {
    res.sendFile(indexPath);
  });
});

const rootPath = path.join(__dirname, '..');

const browserPath = path.join(rootPath, 'web');
const buildPath = path.join(rootPath, 'build');
const nodeModulesPath = path.join(rootPath, 'node_modules');

app.use(express.static(browserPath));
app.use(express.static(buildPath));
app.use(express.static(nodeModulesPath));

db.sequelize.sync({force : true})
    .then((result) => {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    }).catch((err) => {
        console.log(err);
    });
