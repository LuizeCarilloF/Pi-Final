var database = require("../database/config");

function buscarUltimasMedidas(idUsuario, limite_linhas) {
    instrucaoSql = `select pontuacao as pontos,
    idranking as dtHora
from ranking
where fkusuario = ${idUsuario}
order by idranking desc limit ${limite_linhas};`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



function buscarMedidasEmTempoReal(idUsuario) {
    instrucaoSql = `select pontuacao,
        idranking
    from ranking
    where fkusuario = ${idUsuario}
    order by idranking `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
    
}