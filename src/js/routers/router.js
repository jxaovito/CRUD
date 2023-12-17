const path = require('path');
const express = require('express');
const router = express.Router()
const { list } = require('../controllers/controller.js');
const fs = require('fs');
const bodyParser = require('body-parser');
const { connect } = require('../db.js');

router.use(express.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get("/", (req, res) => { 
    const filePath = path.join(__dirname, "../../../index.html");

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Erro ao ler o arquivo');
        }
        res.send(data);
})});

router.get("/lista", (req, res) => {
    const resposta = list();
    res.json(resposta);
});


router.post("/cadastro", async (req, res, next) => {
async function create() {
    if (!req.body || !req.body.productName || !req.body.productDesc || !req.body.productPrice || !req.body.productQuantity) {
        console.log("ddddddddd");
    }
    let productId = "";
    let productName = req.body.productName;
    let productDesc = req.body.productDesc;
    let productPrice = req.body.productPrice;
    let productQuantity = req.body.productQuantity;

    const connection = await connect();
    const result = await connection.query(`INSERT INTO produtos(id_produto, nome_produto, descricao_produto, preco_produto, quantidade_produto) VALUES ("${productId}", "${productName}", "${productDesc}", "${productPrice}", "${productQuantity}")`);
    let message = 'Error in the prodcuts creation';
    if (result.affectedRows) {
        message = 'Products created successfully';
    }
}

    try {
        res.json(await create(req.body));
    } catch (err) {
        console.error('erro durante a criação de produtos', err.message);
        next(err);
    }
});

router.put("/alteracao", (req, res) => {
 async function update(){
    const connection = await connect();
    const result = await connection.query(`UPDATE produtos(id_produto, nome_produto, descricao_produto, preco_produto, quantidade_produto) VALUES ("${productId}", "${productName}", "${productDesc}", "${productPrice}", "${productQuantity}")`);
 }
});


module.exports = router;