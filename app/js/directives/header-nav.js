angular
	.module('hookah')
	.directive('headerNav', ['storageService', function(store){
		return {
			restrict: "E",
			templateUrl: '/templates/header-nav.html',
			scope: {
				page: '@'
			},
			link: function ($scope){
				store.promises.navigation[$scope.page].then(function(nav){
					$scope.left = nav.left;
					$scope.right = nav.right;
					$scope.title = nav.title;
				});
			}
		}
	}]);