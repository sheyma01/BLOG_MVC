const express = require('express');
const mysql = require('mysql');
//App expresss
const app = express();
app.use(express.urlencoded({extended:true}));
const routes =require('./routes/routers');
//connect to database
const db = mysql.createConnection({
    user:'root',
    host: 'localhost',
    password: '',
    database: 'pfs2'
});

app.use(routes);
app.get('/',(req, res)=>{
    res.send('Welcome to Question repond PS: Tout les resultats sont disponible dans postman ');
});
app.listen(3002, ()=>{
    console.log('Listening on port 3002!');
});
