angular.module("istim").controller("LoginController", ['$scope', '$http', '$location', function(scope, http, location){

	scope.auth = function (user) {
		var data = {'name' : user.name, 'email' : user.email, 'password' : user.password};
		http.post(scope.urlApiUser + 'auth/login', data)
		.success(function(response) {
			scope.session.sessionUser = response;
			console.log(scope.session.sessionUser);
			location.path('/dashboard');
		})
		.error(function(response) {
			console.log("ERROR::: " + response);
		});
	};
}]);