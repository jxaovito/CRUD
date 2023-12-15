import express from 'express';
import { connect } from './db.js';
const app = express();
const port = 3000;
const connection = await connect();
const router = express.Router();


app.use(router);

// app.get(port, (req, res) => {
//     console.log(`app online na ${port}`);
// })


// let showList = document.querySelector("buttonList");

// function showList() {
//     const [rows, fields] = connection.execute("SELECT nome_produto FROM produtos");
//     console.log(rows);
// };


