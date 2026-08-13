const express = require("express");

const router = express.Router();

const produtoController = require("../controllers/produtos.controllers");


router.get("/", produtoController.listar);
router.get("/:id", produtoController.buscarPorID);
router.post("/", produtoController.criar);
router.put("/:id", produtoController.alterar);
router.delete("/:id", produtoController.deletar);

module.exports = router;