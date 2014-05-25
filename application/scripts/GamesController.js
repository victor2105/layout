angular.module("istim").controller("GamesController", ['$scope', function(scope){
  scope.game1 = {title: 'Joguim dos leleks 2 - Leks Revenge', subtitle: 'Prepare-se para essa lelekagem e zueira.'};
  scope.games = [scope.game1];
}]);