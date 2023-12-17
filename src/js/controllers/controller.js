const productsModel = require('../models/model.js');
const { connect } = require('../db.js')

async function list() {
    try{
        const connection = await connect();
        const products = await connection.query('SELECT nome_produto FROM produtos');
        console.log(products);
    } catch(error) {
        console.error('Erro na consulta:', error);
        throw error;
    }
};

// async function create() {
//     try{
//         const connection = await connect();
//         const sign = await connection.query('INSERT INTO produtos (nome_produto, descricao_produto, preco_produto, quantidade_produto) values ('+productName+','+productDesc+','+productPrice+','+productQuantity+')');
//     } catch(error) {
//         console.error('Erro no cadastro:', error);
//         throw error;
//     }
// };




module.exports = {
    list,
};
