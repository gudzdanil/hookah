angular
	.module('hookah')
	.directive("selectData", ["storageService", function(store){
		return {
			restrict: "E",
			templateUrl: 'templates/select-data.html',
			scope: {
				vals: '='
			},
			link: function ($scope, $elem, $attr){
				$scope.$watch(function(){
					return $scope.vals.val
				}, function(){
					console.log($scope.vals.title.toLowerCase())
					store[$scope.vals.title.toLowerCase()] = $scope.vals.val;
				});
			}
		}
	}]);