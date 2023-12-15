const productsModel = require('../models/model.js');
const { connect } = require('../db.js');
const connection = connect();

class productsController {
list(){
    return productsModel.list();
}
create(){
    return "";
}
delete(){
    return "";
}
update(){
    return "";
}
};

module.exports = new productsController();