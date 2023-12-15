import productsModel from "../models/model"

const connection = await connect();

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