const app = angular.module('app', ['ui.router'])

app.config(($stateProvider, $urlRouterProvider) => {

  $stateProvider.state('grandparent', {
    url: '/grandparent',
    templateUrl: './templates/grandparent.html'
  });

  $stateProvider.state('grandparent.parent', {
    url: '/parent',
    templateUrl: './templates/parent.html'
  });

  $stateProvider.state('grandparent.parent.child', {
    url: '/child',
    templateUrl: './templates/child.html'
  });

  $stateProvider.state('grandparent.parent.naughtyChild', {
    url: '/naughty-child',
    views: {
      '$default@grandparent': {
        templateUrl: './templates/child.html'
      }
    }
  });

  $urlRouterProvider.otherwise('/grandparent');

});

