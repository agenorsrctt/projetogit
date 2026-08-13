const express = require("express");
const app = express();
require("./database/conection");

app.use(express.json());

const produtoRouter = require("./routes/produtos.routes");

app.use("/produtos", produtoRouter);

console.log("App iniciado");

module.exports = app;