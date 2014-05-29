
angular.module("istim").controller("LoginController", ['$scope', '$http', '$location', '$cookies', function(scope, http, location, cookies){
	scope.auth = function (user) {
		var data = {'name' : user.name, 'email' : user.email, 'password' : user.password};
		http.post(scope.urlApiUser + 'auth/login', data, {
              withCredentials: true
           })
		.success(function(data, status, headers, config) {
			scope.session.authenticated = true;
			scope.session.sessionUser = data;
			location.path('/dashboard');
		})
		.error(function(response) {
			console.log("ERROR::: " + response);
		});
	};
}]);