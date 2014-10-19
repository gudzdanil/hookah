angular
	.module('hookah')
	.controller('homeCtrl',["$scope", "$http", "$q", "storageService", function($scope, $http, $q, store){
		//generating menu
		var navPromise = $q.defer();
		$http
			.get('data/navigation/home.json')
			.then(function(data){
				navPromise.resolve(data.data);
			});
		store.promises.navigation.home = navPromise.promise;

		$http
			.get('data/home-menu.json')
			.then(function(list){
				$scope.menus = list.data.nav;
			});
	}]);