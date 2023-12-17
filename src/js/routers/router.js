const path = require('path');
const express = require('express');
const router = express.Router()
const { list } = require('../controllers/controller.js');
const fs = require('fs');

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

router.post("/cadastro", (req, res) => {
    const resposta = create();
});


module.exports = router;