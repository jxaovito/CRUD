const { connect } = require('./db.js')
const connection = connect();
const express = require('express');
const port = 3000;
const router = require('./routers/router.js');
const app = express();
const bodyParser = require('body-parser');
const handlebars = require('express-handlebars');


app.use(bodyParser.urlencoded({ extended: true }));
app.engine('handlebars', handlebars.engine({defaultLayout: false}));
app.set('view engine','handlebars');
app.use(express.json());


app.use('/src', express.static('../src/'));
app.use(router);


    app.listen(port, () => {
        console.log("Server is running on port 3000");
      });
