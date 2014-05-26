angular.module("istim").controller("LoginController", ['$scope', '$http', function(scope, http){
	scope.user;
	scope.auth = function (user) {
		var data = {'email' : user.email, 'password' : user.password};
		http.post('http://istimuser.nodejitsu.com/auth/login', data)
		.success(function(response) {
			console.log(response);
		})
		.error(function(response) {
			console.log("ERROR::: " + response);
		});
	};
}]);