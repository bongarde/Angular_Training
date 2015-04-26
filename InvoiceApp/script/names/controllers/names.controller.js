//angular.module('names',[]);
angular.module('names').controller('myCtrl',['$scope','nameService','$filter','$window','$stateParams',function($scope,myService,filter,win,$stateParams){

    $scope.addCustomer = function(name,addr) {
        var i = parseInt(myService.items.length)+parseInt("1")
        win.alert(name);
            $scope.edit = true;
            $scope.incomplete = true;
            $scope.name = '';
            $scope.addr = '';
        var count = myService.items.length;
            $scope.id=i;
            myService.addCustomer(i,name,addr);

    };

    $scope.addItem = function(customerId,ItemName,cost){
       win.alert(customerId);
        $scope.invoiceItems = myService.addItem(ItemName,cost,customerId);
    };
   $scope.invoiceList = myService.invoiceList;

    $scope.invoiceItems = myService.invoiceItems;
    $scope.CustNames=myService.items;

    $scope.getTotal = function(){
        //win.alert("hi");
        var total = 0;
      /*  for(var i = 0; i < $scope.fiteredInvoices.invoiceItems.length; i++){
            var product =  $scope.fiteredInvoices.invoiceItems[i];
            total += product.cost;
        }*/
        return total;
    }

}]);
