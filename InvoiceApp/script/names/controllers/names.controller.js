//angular.module('names',[]);
angular.module('names').controller('myCtrl',['$scope','nameService','$filter','$window',function($scope,myService,filter,win){

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
        win.alert($scope.id);
    };
    $scope.names=myService.items;
}]);
