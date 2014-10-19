angular
	.module('hookah')
	.controller('fillBowlCtrl', ["$scope", "$http", "$q", "storageService", function($scope, $http, $q, store){
		var navPromise = $q.defer();
		$http.get('data/navigation/fill-bowl.json').then(function(data){
          	navPromise.resolve(data.data);
        });
		store.promises.navigation.fillBowl = navPromise.promise;

		var fillPromise = $q.defer();
		$http
			.get('data/fill.json')
			.then(function(data){
				fillPromise.resolve(data.data);
			});
		store.promises.selects.fill = fillPromise.promise;

		var bowlPromise = $q.defer();
		$http
			.get('data/bowl.json')
			.then(function(data){
				bowlPromise.resolve(data.data);
			});
		store.promises.selects.bowl = bowlPromise.promise;
	}]);