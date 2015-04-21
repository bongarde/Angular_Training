angular.module('partials',['ui.router']).config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise("/state1/list");//default state
    $stateProvider
        .state('state1',{
            url:"/list",
            templateUrl:"script/partials/customerList.html",
            controller:function($scope){
                $scope.items=["Item1","Item2","Item3"]
            }

        }).state('state2',{
            url:"/state2",
            templateUrl:"script/partials/invoiceList.html"
        })  //url can be kept blank, it is used to show changes url in browser.

});