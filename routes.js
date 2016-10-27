module.exports=function(app){
	var SerieTV=require('./SerieTV');

	//GET
	findAllSeriesTV=function(req, res){
		SerieTV.find(function(err,serietv){
			if(!err) res.send(serietv);
			else console.log('ERROR'+ err);
		});
	}

	//GET
	findByID=function(req,res){
		SerieTV.findByID(req.param.id,function(err,serietv){
			if(!err) res.send(serietv);
			else console.log('ERROR'+ err);
		});
	}
}	