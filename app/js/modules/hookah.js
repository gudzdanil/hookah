angular
	.module('hookah', [
		'ui.router'
	])
	.config([
		'$urlRouterProvider',
		'$stateProvider',
		function($urlRouterProvider, $stateProvider){
			$urlRouterProvider.otherwise('/');
			$stateProvider
				.state('home', {
					url: '/',
					templateUrl: 'templates/main-page.html',
					controller: function($scope){

					}
				})
				.state('flav-mood',{
					url: '/flav-mood',
					templateUrl: 'templates/choosePage.html',
					controller: function($scope){

					}
				})
				.state('fill-bowl',{
					url: '/fill-bowl',
					templateUrl: 'templates/choosePage.html',
					controller: function($scope){

					}
				})
				.state('choice',{
					url: '/choice',
					templateUrl: 'templates/choice.html',
					controller: function($scope){
						
					}
				})
		}
	]);
