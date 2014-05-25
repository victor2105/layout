var istim = angular.module( "istim", ['ngRoute'] ); //definindo istim como um módulo do angular

istim.controller("IstimController", ['$scope' , function($scope){ //adicionando o controller do módulo istim
    $scope.frase = "ISTIM";
}]);

istim.config( function ( $routeProvider ) { // configurando as rotas do módulo istim
  $routeProvider
  .when( '/', { 
        //templateUrl: 'index.html',
        //controller: 'IstimController'
    })
  .when( '/games', { 
        templateUrl: 'games.html',
        controller: 'GamesController'
    })
  .when( '/game_show/:id', { 
        templateUrl: 'game_show.html',
        controller: 'GamesController'
    })
  .when( '/about', { 
        templateUrl: 'about.html'//,
        //controller: 'GamesController'
    })
  .when( '/contact_us', { 
        templateUrl: 'contact_us.html'//,
        //controller: 'GamesController'
    })
  .when( '/dashboard', { 
        templateUrl: 'dashboard.html'//,
        //controller: 'IstimController'
    })
  .when( '/developers', { 
        templateUrl: 'developers.html'//,
        //controller: 'GamesController'
    })
  .when( '/news', { 
        templateUrl: 'news.html'//,
        //controller: 'GamesController'
    })
  .when( '/ranking', { 
        templateUrl: 'ranking.html'//,
        //controller: 'GamesController'
    })
  .when( '/statistics', { 
        templateUrl: 'statistics.html'//,
        //controller: 'GamesController'
    })
  .otherwise( { redirectTo: '/' } );
});

