var database = require("../database/config");

function listar() {
    console.log("ACESSEI O AVALIACAO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
        SELECT 
            a.id AS idAvaliacao,
            a.titulo,
            a.genero,
            a.descricao,
            a.nota,
            a.fkUsuario,
            u.id,
            u.nome,
            u.email,
            u.senha
        FROM avaliacao a
            INNER JOIN usuario u
                ON a.fkUsuario = u.id;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function publicar(titulo, genero,descricao,nota, fkUsuario) {
    console.log("ACESSEI O AVALIACAO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", titulo, genero,descricao,nota, fkUsuario);
    var instrucaoSql = `
        INSERT INTO avaliacao (titulo, genero,descricao,nota, fkUsuario) VALUES ('${titulo}','${genero}', '${descricao}','${nota}', '${fkUsuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function editar(novaDescricao, idAviso) {
    console.log("ACESSEI O AVALIACAO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ", novaDescricao, idAviso);
    var instrucaoSql = `
        UPDATE avaliacao SET descricao = '${novaDescricao}' WHERE id = ${idAviso};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function deletar(idAviso) {
    console.log("ACESSEI O AVALIACAO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", idAviso);
    var instrucaoSql = `
        DELETE FROM avaliacao WHERE id = ${idAviso};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function exibirGeneroPopular(){
    var instrucaoSql = 
    `
    SELECT genero, COUNT(genero) AS quantidade FROM avaliacao GROUP BY genero ORDER BY quantidade DESC LIMIT 1;
    `
    return database.executar(instrucaoSql)
}
function exibirGeneroMenosPopular(){
    var instrucaoSql = 
    `
    SELECT genero, COUNT(genero) AS quantidade FROM avaliacao GROUP BY genero ORDER BY quantidade ASC LIMIT 1;
    `
    return database.executar(instrucaoSql)
}
function exibirQtdAvaliacoes(){
    var instrucaoSql = 
    `
    SELECT COUNT(id) as quantidade FROM avaliacao;    
    `
    return database.executar(instrucaoSql)
}
function exibirMediaNotas(){
    var instrucaoSql = 
    `
    SELECT TRUNCATE(AVG(nota),1) as media FROM avaliacao;    
    `
    return database.executar(instrucaoSql)
}
module.exports = {
    listar,
    publicar,
    editar,
    deletar,
    exibirGeneroMenosPopular,
    exibirGeneroPopular,
    exibirQtdAvaliacoes,
    exibirMediaNotas
}
