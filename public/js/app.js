var app = angular.module('guestCheckoutApp', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
  .state('step1', {
    url: '/',
    templateUrl:'views/steps/step1.html',
    controller:'step1Ctrl'    
  })
  .state('step2', {
    url: '/step2',
    templateUrl:'views/steps/step2.html',
    controller:'step2Ctrl'    
  })
  .state('step3', {
    url: '/step3',
    templateUrl:'views/steps/step3.html',
    controller:'step3Ctrl'    
  })
}]);  
