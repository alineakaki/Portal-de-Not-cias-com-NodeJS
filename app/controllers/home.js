module.exports.home = function(application, req, res) {
    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.NoticiasDAO(connection);
    
    noticiasModel.get5UltimasNoticias(function(error, result) {
        res.render('home/index', {noticias : result});
        
    });
}

