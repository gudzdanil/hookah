angular
	.module('hookah')
	.controller('fillBowlCtrl', ["$scope", "$http", function($scope, $http){
		$http.get('data/fill-bowl.json')
	       .then(function(res){
	          	$scope.lists = res.data.lists; 
	          	$scope.nav = res.data.nav;              
	        });
	}]);