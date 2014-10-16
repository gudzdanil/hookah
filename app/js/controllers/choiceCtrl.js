angular
	.module('hookah')
	.controller('choiceCtrl', ["$scope", "$http", 'storageService', function($scope, $http, store){
		$http
			.get('/data/choice.json')
			.then(function(res){
				$scope.nav = res.data.nav;
			});
			$scope.data = store;
	}]);