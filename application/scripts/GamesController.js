angular.module("istim").controller("GamesController", ['$scope', '$http', function(scope, http){
	// -- mockup para servir de exemplo na view enquanto nao conecta com a api
	scope.game1 = {title: 'Joguim dos leleks 2 - Leks Revenge', subtitle: 'Prepare-se para essa lelekagem e zueira.'};
	scope.game2 = {title: 'dfhhgdhghghdhghdh', subtitle: 'Prepare-se para essa lelekagem e zueira.'};
	scope.game3 = {title: '9334567875', subtitle: 'Prepare-se para essa lelekagem e zueira.'};
	scope.game4 = {title: 'JodfdfsdsRevenge', subtitle: 'Prepare-se para essa lelekagem e zueira.'};
	scope.game5 = {title: 'Josdsdsdos lelsdss Revenge', subtitle: 'Prepare-se para essa lelekagem e zueira.'};
  	scope.games = [scope.game1, scope.game2, scope.game3, scope.game4, scope.game5];
  	// ----------------------------------------------------------------------

	/*scope.game_list = [];
	scope.api_url = "";

	http.get(scope.api_url)
		.success(function(data) {
			scope.game_list = data;
			console.log(data);
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});*/

}]);