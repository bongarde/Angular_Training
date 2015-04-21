angular.module('names').factory("nameService",[function(){
    return({
        items:[
            {id:1, name:'Hege',  addr:'Pege', cost:'150' },
            {id:2, name:'Kim',   addr:'Pim', cost:'150' }
        ],test:"abcd"
    })
}]);
