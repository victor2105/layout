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
  .when( '/game_show/:id', { 
        templateUrl: 'game_show.html',
        controller: 'GamesController'
    })
  .otherwise( { redirectTo: '/' } );
});

istim.controller("IstimController", ['$scope' , function($scope){
    $scope.frase = "ISTIM";
}]);