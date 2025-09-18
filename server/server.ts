const express= require('express');
const dotenv= require('dotenv');
const app= express();

dotenv.config({path: './config/config.env'})
const PORT= process.env.PORT 

app.listen(PORT, ()=> console.log(`Server is listening on port ${PORT} on ${process.env.NODE_ENV} environment`))