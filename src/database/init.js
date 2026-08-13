const db = require("./conection");

db.serialize(() => {
    db.run(
        `
        create table if not exists usuarios(
            id integer primary key autoincrement,
            nome text not null,
            senha text not null,
            email text not null unique
        )
        `
    ),

    db.run(
        `
        create table if not exists clientes(
            id integer primary key autoincrement,
            nome text not null,
            telefone text not null,
            email text not null unique
        )
        `
    ),

    db.run(
        `
        create table if not exists produtos(
            id integer primary key autoincrement,
            produto text not null,
            preco real not null,
            estoque integer not null
        )
        `
    ),

    db.run(
        `
        create table if not exists vendas(
            id integer primary key autoincrement,
            
            idcliente integer not null,
            idusuario integer not null,
            data timestamp default current_timestamp,
            valor_total real not null,
            constraint fk_cliente foreign key (idcliente) references clientes(id),
            constraint fk_usuario foreign key (idusuario) references usuarios(id)
        )
        `
    ),


    db.run(
        `
        create table if not exists itens_pedidos(
            id integer primary key autoincrement,
            idvenda integer not null,
            idproduto integer not null,
            quantidade integer not null,
            constraint fk_produto foreign key (idproduto) references produtos(id),
            constraint fk_produto foreign key (idproduto) references produtos(id)
        )
        `
    )
});