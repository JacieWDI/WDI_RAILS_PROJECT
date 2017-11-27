angular
  .module('activitybar', [])
  .config(Router);

Router.$inject = [
  '$stateProvider',
  '$urlRouterProvider',
  '$locationProvider'
];
function Router(
  $stateProvider,
  $urlRouterProvider,
  $locationProvider
){
  $locationProvider.html5Mode(true);


  $stateProvider
    .state('barsIndex', {
      url: '/bars',
      templateUrl: '/js/views/bars/index.html',
      controller: 'BarsIndexCtrl as vm'
    });

  $urlRouterProvider.otherwise('/bars');
}
