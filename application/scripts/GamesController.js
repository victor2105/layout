angular.module("istim").controller("GamesController", ['$scope', '$http', function(scope, http){

	scope.game_list = [];
	scope.api_url = "https://projetos.dimap.ufrn.br/istim/games";

	http.get(scope.api_url+"/game")
		.success(function(data) {
			scope.game_list = data;
			console.log(data);
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});

}]);