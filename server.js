const app = require('./app/app')
const config = require('./app/config/configuracion')

app.listen(config.PORT,()=>{
    console.log(`Server is running on port ${config.PORT}`);
})