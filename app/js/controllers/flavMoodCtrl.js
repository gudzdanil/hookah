angular
	.module('hookah')
	.controller('flavMoodCtrl', ["$scope", "$http", function($scope, $http){
		$http.get('data/flav-mood.json')
	       .then(function(res){
	          	$scope.lists = res.data.lists; 
	          	$scope.nav = res.data.nav; 
	        });
	}]);