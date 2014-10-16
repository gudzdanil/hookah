angular
	.module('hookah', [
		'ui.router',
		'ngCookies'
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
					controller: 'homeCtrl'
				})
				.state('flav-mood',{
					url: '/flav-mood',
					templateUrl: 'templates/flav-mood.html',
					controller: 'flavMoodCtrl'
				})
				.state('fill-bowl',{
					url: '/fill-bowl',
					templateUrl: 'templates/fill-bowl.html',
					controller: 'fillBowlCtrl'
				})
				.state('choice',{
					url: '/choice',
					templateUrl: 'templates/choice.html',
					controller: 'choiceCtrl'
				});
		}
	]);
