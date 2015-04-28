angular.module('names').factory("nameService",['$window',function(window){
    return({
        items:[
            {id:1, name:'Hege',  addr:'Pege', cost:'150', cars:[{make:'BMW'},{make:'Merc'}] },
            {id:2, name:'Kim',   addr:'Pim', cost:'150', cars:[{make:'BMW1'},{make:'Merc1'}] }
        ],addCustomer: function(id,name,addr){
            var i = parseInt(this.items.length)+parseInt("1");
            var customer = {id:parseInt(this.items.length)+parseInt("1"),name:name,addr:addr,cost:'0'};
            this.items.push(customer);
        },invoiceList:[
            { invoiceId:'1', customerId:"2", invoiceItems:[{itemName:'aa1', cost: '441'},{itemName:'bb2', cost: '552'}]},
            { invoiceId:'2', customerId:"2", invoiceItems:[{itemName:'aa3', cost: '443'},{itemName:'bb4', cost: '554'}]}
        ],newInvoice:[

        ], invItems:[

        ],addItem:function(customerId,ItemName,cost){

           var item = {itemName:ItemName, cost: cost};
           this.invItems.push(item);
            return this.invItems;
        },saveInvoice:function(){
            this.invoiceList.push(this.newInvoice);
            return this.invoiceList;
        }
    })
}]);
