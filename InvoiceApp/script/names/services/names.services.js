angular.module('names').factory("nameService",['$window',function(window){
    return({
        items:[

        ],addCustomer: function(id,name,addr){
            var i = parseInt(this.items.length)+parseInt("1");
            var customer = {id:parseInt(this.items.length)+parseInt("1"),name:name,addr:addr,cost:'0'};
            this.items.push(customer);
        },invoiceList:[

        ],newInvoice:[

        ], invItems:[

        ],addItem:function(customerId,ItemName,cost){

           var item = {itemName:ItemName, cost: cost};
           this.invItems.push(item);
            return this.invItems;
        },saveInvoice:function(newInvoice,invoiceList){
            console.log(invoiceList)
            if(invoiceList.length>0){
                invoiceList.push(newInvoice);
            } else{
                invoiceList.push(newInvoice);
            }
            console.log(invoiceList)
            return invoiceList;
        }
    })
}]);
