var reviewPage = angular.module('istim', []);

var url_default = 'https://reviewapi-t.jit.su/review';

function reviewCreateController($scope, $http, $routParams) {
	$scope.formData = {};
    $scope.gameName = 'Mario';
	$http.get(url_default+'/gamereviews?gameName='+$scope.gameName)
		.success(function(data) {
			$scope.reviews = data;
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});
    
    
    
    $scope.createReview = function(){
        var url = url_default+'/create?userId='+$scope.formData.userId+'&gameName='+$scope.gameName+'&star='+$scope.formData.star+'&comment='+$scope.formData.comment;
        $http.post(url)
            .success(function(data) {
                scope.formData = {};
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    }
}
