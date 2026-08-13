const transaction = require("../repository/transaction.repository");
const produtoService = require("../services/produtos.service");

async function listar(req, res) {
    try {
        const produtos = await produtoService.listar();
        res.status(200).json(produtos);
    } catch (error) {
        res.status(500).json(error.message);
    }
}

async function buscarPorID(req, res) {
    try {
        const id = req.params.id;
        res.status(200).json(await produtoService.buscarPorID(id))
    } catch (error) {
        res.status(500).json(error.message);
    }
}

async function criar(req, res) {
    try {
        await transaction.begin();
        const { produto, preco, quantidade } = req.body;
        const retorno = await produtoService.criar(produto, preco, quantidade);
        await transaction.commit();

        res.status(201).json(retorno);

    } catch (error) {
        await transaction.roolback();
        res.status(500).json(error.message)        
    }
}

async function alterar(req, res) {
    try {
        await transaction.begin();
        const { produto, preco, quantidade } = req.body;
        const retorno = await produtoService.alterar(produto, preco, quantidade);
        await transaction.commit();

        res.status(200).json(retorno);
    } catch (error) {
        await transaction.roolback();
        res.status(500).json(error.message);
    }
}


async function deletar(res, res) {
    try {
        await transaction.begin();
        const id = req.params.id;
        const retorno = await produtoService.deletar(id);
        await transaction.commit();

        res.status(200).json(retorno);
    } catch (error) {
        await transaction.roolback();
        res.status(500).json(error.message);
    }
}

module.exports = {
    listar, buscarPorID, criar, alterar, deletar
}