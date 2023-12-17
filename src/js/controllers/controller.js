const productsModel = require('../models/model.js');
const { connect } = require('../db.js');


async function list() {
    try {
        const connection = await connect();
        const products = await connection.query('SELECT nome_produto FROM produtos');
        console.log(products);
    } catch (error) {
        console.error('Erro na consulta:', error);
        throw error;
    }
};

// async function create(req, res) {

//     if (!req.body || !req.body.productName || !req.body.productDesc || !req.body.productPrice || !req.body.productQuantity) {
//         console.log("ddddddddd");
//     }

//     let productId = "";
//     let productName = req.body.productName;
//     let productDesc = req.body.productDesc;
//     let productPrice = req.body.productPrice;
//     let productQuantity = req.body.productQuantity;

//     const connection = await connect();
//     const result = await connection.run(`INSERT INTO produtos(id_produto, nome_produto, descricao_produto, preco_produto, quantidade_produto) VALUES ("${productId}", "${productName}", "${productDesc}", "${productPrice}", "${productQuantity}")`);
//     let message = 'Error in the prodcuts creation'
//     if (result.affectedRows) {
//         message = 'Products created successfully';
//     }

//     console.log(message);

// };


module.exports = {
    list,
    // create,
};
