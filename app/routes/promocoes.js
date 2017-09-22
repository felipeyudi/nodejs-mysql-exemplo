module.exports = function(app) {
	app.get("/promocoes/form", function(req, res, next) {
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.lista(function(err, results) {
            res.render('promocoes/form', {lista:results});
        });

        connection.end();
    });

	
	app.post('/promocoes', function(req, res, next) {
        var promocao = req.body
        app.get('io').emit('novaPromocao',promocao);

        console.log(promocao);
        res.redirect('promocoes/form')
    });


}
