import dotenv from "dotenv";
import mysql from "mysql2/promise";

dotenv.config();

async function connect(){
    try {
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;
 
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
    });
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
} catch (error) {
    console.error("Erro ao conectar ao MySQL:", error);
    throw error; // Rejeita a promise com o erro
}
}

export { connect };