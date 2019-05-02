angular.module('campaignApp')
  //=========================================================================
  //Configuring CitrixApp
  //=========================================================================
  .config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

      /**
       * Routes definition for navigation
       */
      $stateProvider

        .state('dashboard', {
          url: '/dashboard',
          templateUrl: 'app/components/dashboard/dashboard.view.html',
          controller: 'DashboardController',
          controllerAs: 'DashCtrl'
        })

        .state('dashboard.home', {
          url: '/home',
          templateUrl: 'app/components/dashboard/home/home.view.html',
          controller: 'HomeController',
          controllerAs: 'HomeCtrl'
        })

        .state('dashboard.live', {
          url: '/live',
          templateUrl: 'app/components/dashboard/live/live.view.html',
          controller: 'LiveController',
          controllerAs: 'LiveCtrl'
        })

        .state('dashboard.past', {
          url: '/past',
          templateUrl: 'app/components/dashboard/past/past.view.html',
          controller: 'PastController',
          controllerAs: 'PastCtrl'
        })

      $urlRouterProvider.otherwise('/dashboard/home');
    }])
