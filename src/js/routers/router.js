const path = require('path');
const express = require('express');
const router = express.Router()
const fs = require('fs');
const bodyParser = require('body-parser');
const { connect } = require('../db.js');

router.use(express.json());
router.use(bodyParser.urlencoded({ extended: true }));

// Rota da página inicial - cadastro
router.get("/", (req, res) => {
    const filePath = path.join(__dirname, "../../../index.handlebars");
    fs.readFile(filePath, 'utf8', (err, data) => {
        res.send(data);
    })
});

// Rota que confirma o cadastro do produto
router.post("/register", async (req, res, next) => {
    const connection = await connect();
    const result = await connection.query(`INSERT INTO produtos(id_produto, nome_produto, descricao_produto, preco_produto, quantidade_produto) VALUES ("", "${req.body.productName}", "${req.body.productDesc}", "${req.body.productPrice}", "${req.body.productQuantity}")`);
    res.redirect('/');
});

// Rota que gera a lista dos produtos
router.get("/form", async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query('SELECT * FROM produtos');
    res.render('itemList.handlebars', { produtos: rows });
});

// Rota que reconhece o produto pelo id ao editar
router.get("/updateProduct/:id_produto", async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query(`SELECT * FROM produtos WHERE id_produto = "${req.params.id_produto}"`);

    res.render('updateForm.handlebars', { produtos: rows[0] });
})

// Rota que realiza a atualização do cadastro
router.post("/updateProduct/:id_produto", async (req, res) => {
    const connection = await connect();
    const result = await connection.query(`UPDATE produtos SET nome_produto = "${req.body.productName}", descricao_produto = "${req.body.productDesc}", preco_produto = "${req.body.productPrice}", quantidade_produto = "${req.body.productQuantity}" WHERE id_produto = "${req.params.id_produto}"`).then(function () {
        console.log("Cadastro atualizado");
    }).catch(function (error) {
        console.log("Cadastro não atualizado");
    })
    res.redirect('/form');
})

// Rota que deleta o cadastro
router.get("/delProduct/:id_produto", async (req, res) => {
    const connection = await connect();
    const del = await connection.query(`DELETE FROM produtos WHERE id_produto = "${req.params.id_produto}"`).then(function () {
        console.log("Produto excluído");
    }).catch(function (error) {
        console.log("Produto não excluído");
    })
    res.redirect('/form');
})


module.exports = router;