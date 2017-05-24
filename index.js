var express=require('express')

var mongoose=require('mongoose')







var bodyParser = require('body-parser')
var methodOverride = require("method-override");
var app=express()

mongoose.connect('mongodb://localhost/seriestv',function(err, res){
	if(err) console.log('Error: conectando a la base de datos: '+err);
	else console.log('Conexion Exitosa a la base de datos');
});

app.get(function(){
	app.use(bodyParser.urlencoded({ extended: false }));  
	app.use(bodyParser.json());  
	app.use(methodOverride());
	app.use(express.methodOverride());
	app.use(app.router);
});

app.get('/prueba',function(req, res){
	res.send('hola mundo');
});

require('./routes')(app);

app.listen(5000);
console.log('Servidor express Escuchando en el puerto 5000');	