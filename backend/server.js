const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;
app.use(bodyParser.json());

const db = require('./db/index.js');

require("./routes/routes.js")(app);

db.sequelize.sync({force : true})
    .then((result) => {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    }).catch((err) => {
        console.log(err);
    });
