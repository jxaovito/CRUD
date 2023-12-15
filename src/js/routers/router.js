import Router from "express";
const router = Router();
import productsController from "../controllers/controller";


router.get("/", (req, res) => {
    const resposta = productsController.buscar();
    res.send(resposta);
});

router.post("/", (req, res) => {
    const resposta = productsController.criar();
    res.send(resposta);
});

router.put("/:id", (req, res) => {
    const { id } = req.params;
    const resposta = productsController.atualizar(id);
    res.send(resposta);
});

router.delete("/:id", (req, res) => {
    const { id } = req.params;
    const resposta = productsController.deletar(id);
    res.send(resposta);
});

module.exports(router);