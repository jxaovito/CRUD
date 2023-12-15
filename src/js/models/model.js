import { connect } from "../db.js";
const connection = await connect();

class productsModel {
    list(){
        const sql = "SELECT nome_produto FROM produtos";
        return new Promise( (resolve, reject) => {
            connection.query(sql, {}, (error, response) => {
                if (error){
                    console.log("erro no select");
                    reject(error);
                }
                console.log("perfeito");
                resolve(resposta);
            });
        }) 
    }
    create(){
        const sql = "INSERT nome_produtos descricao_produto, preco_produto, quantidade_produto WHERE ID = ?? INTO produtos";
        return this.connection.query();
    }
    list(){
        const sql = "SELECT nome_produtos FROM produtos";
        return this.connection.query();
    }
    list(){
        const sql = "SELECT nome_produtos FROM produtos";
        return this.connection.query();
    }

}

module.exports = new productsModel();