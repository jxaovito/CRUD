const path = require('path');
const express = require('express');
const router = express.Router()
const { list, create } = require('../controllers/controller.js');
const fs = require('fs');
const bodyParser = require('body-parser');

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
    try {
        res.json(await create(req.body));
    } catch (err) {
        console.error('erro durante a criação de produtos', err.message);
        next(err);
    }
});


module.exports = router;