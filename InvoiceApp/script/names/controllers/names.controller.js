//angular.module('names',[]);
angular.module('names').controller('myCtrl',['$scope','nameService','$filter','$window',function($scope,myService,filter,win){

    $scope.addName=function(){
//pass the name via service. directly adding name not possible
        var test = filter('myFilter')(myService.addName($scope.name));
        //win.alert(test);
        myService.addName(test);
        $scope.name='';
    };
    $scope.names=myService.items;
}]);
