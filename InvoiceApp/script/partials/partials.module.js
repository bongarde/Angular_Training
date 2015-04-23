angular.module('partials',['ui.router']).config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise("/state1");//default state
    $stateProvider
        .state('Customers',{
            url:"/Customers",
            templateUrl:"script/partials/customerList.html",
            controller:function($scope){
                $scope.items=["Item1","Item2","Item3"]
            }

        }).state('Invoices',{
            url:"/Invoices",
            templateUrl:"script/partials/invoiceList.html"
        }) //url can be kept blank, it is used to show changes url in browser.
        .state('Customers.addInvoice',{
            url:"/createInvoice",
            templateUrl:"script/partials/Customers.addInvoice.html"
        }).state('Customers.showInvoice',{
            url:"/createInvoice",
            templateUrl:"script/partials/Customers.showInvoice.html"
        })
});