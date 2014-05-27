angular.module("istim").controller("LogoutController", ['$scope', '$http', '$location', function(scope, http, location){
	console.log("entrou na logout");
	alert("ISSO");
	http.post(scope.urlApiUser + 'auth/logout')
	.success(function(response) {
		alert(response);
		scope.session.sessionUser = null;
		console.log(response);
		location.path('/login');
	})
	.error(function(response) {
		alert(response);
		console.log("ERROR::: " + response);
	});

}]);