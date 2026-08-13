const db = require("../database/conection");

async function begin() {
    return new Promise((resolve, reject) => {
        db.run(
            "begin",
            (erro) => {
                if(erro) return reject(erro)
                resolve();
            }
        )
    })
}

async function commit() {
    return new Promise((resolve, reject) => {
        db.run(
            "commit",
            (erro) => {
                if(erro) return reject(erro)
                resolve();
            }
        )
    })
}

async function roolback() {
    return new Promise((resolve, reject) => {
        db.run(
            "rollback",
            (erro) => {
                if(erro) return reject(erro)
                resolve();
            }
        )
    })
}

module.exports = {
    begin, commit, roolback
}