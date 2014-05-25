angular.module("istim").controller("GamesController", ['$scope', '$http', function(scope, http){
	// -- mockup para servir de exemplo na view enquanto nao conecta com a api
	scope.game1 = {title: 'Joguim dos leleks 2 - Leks Revenge', subtitle: 'Prepare-se para essa lelekagem e zueira.'};
  	scope.games = [scope.game1];
  	// ----------------------------------------------------------------------

	scope.game_list = [];
	scope.api_url = "";

	http.get(scope.api_url)
		.success(function(data) {
			scope.game_list = data;
			console.log(data);
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});

}]);