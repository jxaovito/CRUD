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
    const connection = await connect();
    const result = await connection.query(`INSERT INTO produtos(id_produto, nome_produto, descricao_produto, preco_produto, quantidade_produto) VALUES ("", "${req.body.productName}", "${req.body.productDesc}", "${req.body.productPrice}", "${req.body.productQuantity}")`);

    try {
        res.json(await create(req.body));
    } catch (err) {
        console.error('erro durante a criação de produtos', err.message);
        next(err);
    }
}});

router.put("/alteracao", (req, res) => {
 async function update(){
    const valueSelected = req.body.selectpicker;
    //process your data
    res.status(200).send('Processed');
    const connection = await connect();
    const result = await connection.query(`UPDATE produtos SET nome_produto = "${productName}", descricao_produto = "${productDesc}", preco_produto = "${productPrice}", quantidade_produto = "${productQuantity}" WHERE id_produto = ${valueSelected}`);
 }
});

router.get("/form", async (req, res) => {  
    const filePath = path.join(__dirname, "../../../updateForm.html");
     fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Erro ao ler o arquivo');
        }
        res.send(data);

        async function getProducts() {
            const connection = await connect();
            const [rows] = await connection.execute('SELECT id_produto, nome_produto FROM produtos');
            console.log('dd', rows);
            const updatedHtml = html.replace('<!-- SELECT_OPTIONS -->', generateSelectOptions(rows));
            res.send(updatedHtml);
        }
  
        const html = path.join(__dirname, "../../../updateForm.html");
 
        function generateSelectOptions(rows) {
            return rows.map(product => `<option value="${product.id_produto}">${product.nome_produto}</option>`).join('');
        }
})});



module.exports = router;