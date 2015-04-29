//angular.module('names',[]);
angular.module('names').controller('myCtrl',['$scope','nameService','$filter','$window','$stateParams',function($scope,myService,filter,win,$stateParams){

    $scope.addCustomer = function(name,addr) {
        var i = parseInt(myService.items.length)+parseInt("1")
        //win.alert(name);
            $scope.edit = true;
            $scope.incomplete = true;
            $scope.name = '';
            $scope.addr = '';
        var count = myService.items.length;
            $scope.id=i;
            myService.addCustomer(i,name,addr);

    };
    $scope.invoiceList = myService.invoiceList;
    $scope.$newInvoice = myService.newInvoice;
    $scope.addItem = function(customerId,ItemName,cost){

        var invItems = myService.addItem(customerId,ItemName,cost);

        var newInvoiceId = parseInt(myService.invoiceList.length)+parseInt("1")
        $scope.newInvoice = { invoiceId:newInvoiceId, customerId:customerId, invoiceItems:invItems};
        console.log($scope.newInvoice);
        $scope.total = getTotal($scope.newInvoice);
    };



    $scope.saveInvoice = function(){
        $scope.invoiceList = myService.saveInvoice();
    };


  //  $scope.invoiceItems = myService.invoiceItems;
    $scope.CustNames=myService.items;

    getTotal = function(newInvoice){

        var total = 0;
        console.log(newInvoice.invoiceItems.length);
       for(var i = 0; i < newInvoice.invoiceItems.length; i++){
            var product =  newInvoice.invoiceItems[i];
            total = parseInt(total)+parseInt(product.cost);

        }
        return total;
    }

}]);
