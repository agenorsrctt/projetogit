const produtosModels = require("../repository/produtos.repository");

async function listar() {
    const produtos = await produtosModels.listar();
    if (!produtos) {
        throw new Error("Nenhum produto encontrado!");
    }

    return produtos;
}


async function buscarPorID(id) {
    const produto = await produtosModels.buscarPorID(id);
    if (!produto) {
        throw new Error("Produto não localizado!");
    }

    return produto;
}

async function criar(produto, preco, estoque) {
    if (!produto || !preco || !estoque) {
        throw new Error("É nescessario preencher todos os campos!");
    }
    const produtoCriado = await produtosModels.criar(produto, preco, estoque);
    if (!produtoCriado) {
        throw new Error("Produto não criado!");
    }

    return produtoCriado;
}

async function alterar(produto, preco, estoque) {

    if (!produto || !preco || !estoque) {
        throw new Error("É nescessario preencher todos os campos!");
    }
    const produtoCriado = await produtosModels.criar(produto, preco, estoque);
    if (!produtoCriado) {
        throw new Error("Produto não atualizado!");
    }


    return produtoCriado;
}


async function deletar(id) {

    const produtoDeletado = await produtosModels.deletar(id);
    if (!produtoDeletado) {
        throw new Error("Produto não deletado");
    }

    return produtoDeletado;
}

module.exports = {
    listar, buscarPorID, criar, alterar, deletar
}