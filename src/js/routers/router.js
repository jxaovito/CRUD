const express = require('express');
const router = express.Router()
const productsController = require('../controllers/controller');



router.get("/", (req, res) => {
    const resposta = productsController.list();
    res.send(resposta);
});

router.post("/", (req, res) => {
    const resposta = productsController.create();
    res.send(resposta);
});

router.put("/:id", (req, res) => {
    const { id } = req.params;
    const resposta = productsController.update(id);
    res.send(resposta);
});

router.delete("/:id", (req, res) => {
    const { id } = req.params;
    const resposta = productsController.delete(id);
    res.send(resposta);
});

module.exports = router();