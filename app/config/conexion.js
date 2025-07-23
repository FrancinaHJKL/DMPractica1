const mongoose = require('mongoose');
const CONFIG = require('./configuracion.js');

module.exports={
    conection : null, 
    connect :()=>{
        if(this.conection)return this.connection
        return mongoose.connect(CONFIG.DB)
        .then(conn =>{
            this.conection=conn
            console.log('conectado a la base de datos')
        })
        .catch (e => console.log('error en la conexion',e))
    }
}