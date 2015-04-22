angular.module('names').factory("nameService",[function(){
    return({
        items:[
            {id:1, name:'Hege',  addr:'Pege', cost:'150' },
            {id:2, name:'Kim',   addr:'Pim', cost:'150' }
        ],addCustomer: function(id,name,addr){
            var i = parseInt(this.items.length)+parseInt("1");
            var customer = {id:parseInt(this.items.length)+parseInt("1"),name:name,addr:addr,cost:'0'};
            this.items.push(customer);
        }
    })
}]);
