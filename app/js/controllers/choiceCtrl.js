angular
	.module('hookah')
	.controller('choiceCtrl', ["$scope", "$http", "$q", 'storageService', 'genTobacco', function($scope, $http, $q, store, genTobacco){
		var navPromise = $q.defer();
		$http
			.get('data/navigation/choice.json')
			.then(function(data){
	          	navPromise.resolve(data.data);
	        });
		store.promises.navigation.choice = navPromise.promise;

		$scope.choice = [];
		var values = store.selectedValues;
		$scope.choice.push({
			title: "Filling",
			value: values.fill
		});
		$scope.choice.push({
			title: "Bowl",
			value: values.bowl
		});
		$scope.choice.push({
			title: "Tobacco",
			value: genTobacco.getTobacco(values.flav, values.mood)
		});
	}]);