var express=require('express');
var mongoose=require('mongoose');
var app=express();

app.get(function(){
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
});

app.get('/',function(req, res){
	res.send('hola mundo');
});

app.listen(5000);
console.log('Servidor express Escuchando en el puerto 5000');	