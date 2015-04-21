angular.module('names').factory("nameService",[function(){
    return({
        items:[
            'Name 1',
            'Name 2'
        ],
        addName: function(name){
            this.items.push(name);
        }
    })
}]);
