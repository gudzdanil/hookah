angular
	.module('hookah')
	.directive('headerNav', function(){
		return {
			restrict: "E",
			templateUrl: '/templates/header-nav.html',
			scope: {
				nav: '='
			}
		}
	});