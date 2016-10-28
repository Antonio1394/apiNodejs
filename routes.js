module.exports=function(app){
	var SerieTV=require('./SerieTV');

	//GET
	findAllSeriesTV=function(req, res){
		SerieTV.find(function(err,serietv){
			if(!err) res.send(serietv);
			else console.log('ERROR'+ err);
		});
	};

	//GET
	findByID=function(req,res){
		SerieTV.findByID(req.param.id,function(err,serietv){
			if(!err) res.send(serietv);
			else console.log('ERROR'+ err);
		});
	};

	//POST
	addSerieTV=function(req,res){
		console.log('POST');
		console.log(req.body);
		var serietv =new SerieTV({
			titulo:req.body.titulo,
			temporadas:req.body.temporadas,
			pais:req.body.pais,
			genero.req.body.genero,
		});

		SerieTV.save(function(err){
			if(!err) console.log('SerieTV Guardad');
			else console.log('ERROR'+ err);
		});

		res.send(serietv);
	};

	//PUT
	updateSerieTv=function(req,res){
		SerieTV.findByID(req.param.id,function(err,serietv){
			
		});
	}
}	