angular
	.module('hookah')
	.controller('flavMoodCtrl', ["$scope", "$http", "$q", "storageService", function($scope, $http, $q, store){
		var navPromise = $q.defer();
		$http
			.get('data/navigation/flav-mood.json')
			.then(function(data){
	          	navPromise.resolve(data.data);
	        });
		store.promises.navigation.flavMood = navPromise.promise;

		var flavPromise = $q.defer();
		$http
			.get('data/flav.json')
			.then(function(data){
				flavPromise.resolve(data.data);
			});
		store.promises.selects.flav = flavPromise.promise;

		var moodPromise = $q.defer();
		$http
			.get('data/mood.json')
			.then(function(data){
				moodPromise.resolve(data.data);
			});
		store.promises.selects.mood = moodPromise.promise;
	}]);