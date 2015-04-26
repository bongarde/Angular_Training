angular.module('partials',['ui.router']).config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise("/state1");//default state
    $stateProvider
        .state('Customers',{
            url:"/Customers",
            templateUrl:"script/partials/customerList.html"
        }).state('Invoices',{
            url:"/Invoices",
            templateUrl:"script/partials/invoiceList.html"
        }) //url can be kept blank, it is used to show changes url in browser.
        .state('Customers.addInvoice',{
            url:"/createInvoice:customerId",
            templateUrl:"script/partials/Customers.addInvoice.html",
            controller:function($scope , $stateParams,$window){
                $scope.customerId = $stateParams.customerId;

                angular.forEach($scope.CustNames,function(value,index){
                   if(value.id == $scope.customerId){
                       $scope.customerName = value.name;
                   }

                })
            }
        }).state('Customers.showInvoice',{
            url:"/createInvoice:customerId",
            templateUrl:"script/partials/Customers.showInvoice.html",
                controller:function($scope , $stateParams,$window){
                $scope.customerId = $stateParams.customerId;
                   // $window.alert($scope.invoiceList);
                    $scope.fiteredInvoices = [];
                    angular.forEach($scope.invoiceList,function(value,index){
                        //$window.alert($stateParams.customerId+'---'+value.customerId);
                        if(value.customerId == $scope.customerId) {
                            $scope.fiteredInvoices[index] = value;

                        }
                })
            }
        })
});