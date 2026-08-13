const db = require("../database/conection");

async function listar() {
    return new Promise((resolve, reject) => {
        db.all(
            "select * from produtos",
            (erro, produtos) => {
                if (erro) return reject(erro);
                resolve(produtos);
            }
        );
    })
};

async function buscarPorID(id) {
    return new Promise((resolve, reject) => {
        db.get(
            "select * from produtos where id = ?",
            [id],
            (erro, produto) => {
                if (erro) return reject(erro);
                resolve(produto);
            }
        )
    })
};

async function criar(produto, preco, estoque) {
    return new Promise((resolve, reject) => {
        db.run(
            "insert into produtos(produto, preco, estoque) values(?,?,?)",
            [produto, preco, estoque],
            function (erro) {
                if (erro) return reject(erro)

                resolve({
                    id: this.lastID,
                    mensagem: "Produto criado com sucesso!"
                });
            }
        )
    })
};

async function alterar(produto, preco, estoque, id) {
    return new Promise((resolve, reject) => {
        db.run(
            "update produtos set produto = ?, preco = ?, estoque = ? where id = ?",
            [produto, preco, estoque, id],
            function (erro) {
                if (erro) return reject(erro)
                resolve({
                    mensagem: "Produto alterado com sucesso!"
                });
            }
        )
    })
};

async function deletar(id) {
    return new Promise((resolve, reject) => {
        db.run(
            "delete from produtos where id = ?",
            [id],
            function (erro) {
                if (erro) return reject(erro);
                resolve({
                    mensagem: "Produto alterado com sucesso!"
                })
            }
        )
    })
}

module.exports = {
    listar, buscarPorID, criar, alterar, deletar
}