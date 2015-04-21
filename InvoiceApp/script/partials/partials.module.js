angular.module('partials',['ui.router']).config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise("/state1/list");//default state
    $stateProvider
        .state('state1',{
            url:"/state1",
            templateUrl:"script/partials/about.html"
        }).state('state2',{
            url:"/state2",
            templateUrl:"script/partials/contact.html"
        })  //url can be kept blank, it is used to show changes url in browser.
});