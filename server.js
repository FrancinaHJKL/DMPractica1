const app = require('./app/app')
const config = require('./app/config/configuracion')
const conexion = require ('./app/config/conexion')

conexion.connect()
app.listen(config.PORT,()=>{
    console.log(`Server is running on port ${config.PORT}`);
})