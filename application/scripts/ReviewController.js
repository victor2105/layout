angular.module("istim").controller("ReviewController", ['$scope', '$http', function(scope, http){

	scope.review_list = [];
	scope.api_url = "https://reviewapi.jit.su/review";

	http.get(scope.api_url+"/game")
		.success(function(data) {
			scope.review_list = data;
			console.log(data);
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});
}]);
