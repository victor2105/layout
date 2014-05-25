var istim = angular.module( "istim", ['ngRoute'] );

istim.config( function ( $routeProvider ) {
  $routeProvider
  .when( '/', { 
        templateUrl: 'dashboard.html',
        controller: 'IstimController'
    })
  .when( '/games', { 
        templateUrl: 'games.html',
        controller: 'GamesController'
    })
  .otherwise( { redirectTo: '/' } );
});

istim.controller("IstimController", ['$scope' , function($scope){
    $scope.frase = "ISTIM";
}]);

istim.controller("GamesController", ['$scope', function(scope){
  scope.game1 = {title: 'Joguim dos leleks 2 - Leks Revenge', subtitle: 'Prepare-se para essa lelekagem e zueira.'};
  scope.games = [scope.game1];
}]);