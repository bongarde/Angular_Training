angular.module('names').filter('myFilter',[function(){
    var filter = function(items){
        var filtered = [];
        for(var i=0;i<items.length;i++){
            var item = items[i];
            if(item.search(/day*/) != -1){
                filtered.push(item);
            }
        }
        return filtered;
    }
    return filter;
}]).filter('capFilter',function(){
    return function(text){
        return text.toString().toUpperCase();
    }
});
