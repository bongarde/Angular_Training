angular.module('partials',['ui.router']).config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise("/state1");//default state
    $stateProvider
        .state('state1',{
            url:"/Custmers",
            templateUrl:"script/partials/customerList.html",
            controller:function($scope){
                $scope.items=["Item1","Item2","Item3"]
            }

        }).state('state2',{
            url:"/Invoices",
            templateUrl:"script/partials/invoiceList.html"
        }) //url can be kept blank, it is used to show changes url in browser.
        .state('addInvoice',{
            url:"/createInvoice",
            templateUrl:"script/partials/createInvoice.html"
        })
});