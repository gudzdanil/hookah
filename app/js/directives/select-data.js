angular
	.module('hookah')
	.directive("selectData", ["storageService", function(store){
		return {
			restrict: "E",
			templateUrl: 'templates/select-data.html',
			scope: {
				item: '@'
			},
			link: function ($scope){
				store.promises.selects[$scope.item].then(function(data){
					$scope.title = data.title;
					$scope.elements = data.items;
					$scope.$watch('value', function(){
						store.selectedValues[$scope.item] = $scope.value;
					});
				});
			}
		}
	}]);