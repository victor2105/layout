angular.module("istim").controller("ProfileController", ['$scope', '$http', '$location', function($scope, $http, $location){
	$scope.edit_profile = function (user) {
		var data = {'name' : user.name, 'email' : user.email, 'password' : user.password};
		$http.put($scope.urlApiUser + 'user/', data, {
              withCredentials: true
           })
		.success(function(response) {
			$scope.session.sessionUser = response;
			console.log($scope.sessionUser);
			$location.path('/dashboard');
		})
		.error(function(response) {
			console.log("ERROR::: " + response);
		});
	};
}]);
