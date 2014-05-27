angular.module("istim").controller("ProfileController", ['$scope', '$http', '$location', function(scope, http, location){

	alert(scope.session.sessionUser);
	console.log(scope.session.sessionUser);
	scope.edit_profile = function (user) {
		var data = {'name' : user.name, 'email' : user.email, 'password' : user.password};
		http.post(scope.urlApiUser + 'auth/login', data)
		.success(function(response) {
			scope.session.sessionUser = response;
			console.log(scope.sessionUser);
			location.path('/dashboard');
		})
		.error(function(response) {
			console.log("ERROR::: " + response);
		});
	};
}]);