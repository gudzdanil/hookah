angular
	.module('hookah')
	.controller('fillBowlCtrl', ["$scope", "$http", "storageService", function($scope, $http, storage){
		$http.get('data/fill-bowl.json')
	       .then(function(res){
	          	$scope.lists = res.data.lists; 
	          	$scope.nav = res.data.nav;  
	        });
	}]);