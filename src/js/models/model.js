const { connect } = require('../db.js')
const connection = connect();

class productsModel {
   list(){
        const sql = connection.query('SELECT nome_produto FROM produtos');
        return sql;
        };
    
    // create(){
      
    // };
    // update(){
     
    // };
    // delete(){
      
    // };

}

module.exports = new productsModel();