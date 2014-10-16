angular
	.module('hookah')
	.controller('choiceCtrl', ["$scope", "$http", 'flavMoodCtrl', 'fillBowlCtrl', function($scope, $http, flavMoodCtrl, fillBowlCtrl){
		$http
			.get('/data/choice.json')
			.then(function(res){
				$scope.nav = res.data.nav;
			});
			console.log(flavMoodCtrl)
			console.log(fillBowlCtrl)
	}]);