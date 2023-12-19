const productsModel = require('../models/model.js');
const { connect } = require('../db.js');


async function list() {
        const connection = await connect();
        const [rows] = await connection.query('SELECT nome_produto FROM produtos');
        console.log(rows);
        
};



module.exports = {
    list,
    // create,
};
