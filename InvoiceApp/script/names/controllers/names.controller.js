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

    $scope.addItem = function(customerId,ItemName,cost){

        $scope.newInvoice = myService.addItem(customerId,ItemName,cost);
        console.log($scope.newInvoice);
    };
   $scope.invoiceList = myService.invoiceList;
    $scope.$newInvoice = myService.newInvoice;

  //  $scope.invoiceItems = myService.invoiceItems;
    $scope.CustNames=myService.items;

    $scope.getTotal = function(){

        var total = 0;
      /* for(var i = 0; i < $scope.invoiceItems.length; i++){
            var product =  $scope.invoiceItems[i];
            total += product.cost;
        }*/
       /* for(var i = 0; i<$scope.newInvoice.invoiceItems.length;i++){
            /*var invoiceItems = $scope.newInvoice[i].invoiceItems;
            for(var j=0; j<invoiceItems.length;j++){
                win.alert(invoiceItems[j].cost);
            }*/

        //}


        return total;
    }

}]);
