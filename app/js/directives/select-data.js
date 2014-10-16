angular
	.module('hookah')
	.directive("selectData", ["$rootScope", function($rootScope){
		return {
			restrict: "E",
			templateUrl: 'templates/select-data.html',
			scope: {
				vals: '='
			}
		};
	}]);