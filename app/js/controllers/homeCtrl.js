angular
	.module('hookah')
	.controller('homeCtrl',["$scope", function($scope){
		$scope.nav = [];
		$scope.menus = [
			{
				title: "Make Hookah",
				src: "/flav-mood"
			},
			{
				title: "Add Hookah",
				src: "/add"
			},
			{
				title: "Share Hookah",
				src: "/share"
			},
			{
				title: "Places",
				src: "/places"
			}
		];
	}]);