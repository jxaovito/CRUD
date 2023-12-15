const express = require('express');
const { connect } = require('./db.js')
const connection = connect();
const productsController = require('./controllers/controller.js');

const app = express();
const port = 3000;
const router = require('./routers/router.js');

app.use(router);


// app.get(port, (req, res) => {
//     console.log(`app online na ${port}`);
// })


// let showList = document.querySelector("buttonList");

// function showList() {
//     const [rows, fields] = connection.execute("SELECT nome_produto FROM produtos");
//     console.log(rows);
// };


