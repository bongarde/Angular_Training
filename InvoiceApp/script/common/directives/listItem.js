angular.module('common').directive('myElement',function(){
    return {
        scope:{
            text:'@info'
        },template:'<span>Item-{{text}}</span>'
    }
})