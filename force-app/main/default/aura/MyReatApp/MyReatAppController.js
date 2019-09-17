({
    doInit: function(cmp){
       var pagename = cmp.get('v.pageName'); 
        console.log(pagename);
       var msg = {
            name: "pageName",
           	target: "Page",
            value: pagename
        };
        cmp.find("reactApp").message(msg);
        console.log('SEND', msg);
    },
    
    handleError: function(component, error, helper) {
        console.log('sss');
        var description = error.getParams().description;
        console.log(description);
        component.set("v.error", description);
    },
    
     handleMessage: function (cmp, event, hlp) {
        var payload = event.getParams().payload;
        var name = payload.name;
         var selected = cmp.get('v.selected');
         if(!selected){
                selected=[];
         }
         var value = payload.value;
        if (name === "ADD") {
            selected.push(value);
        }else if (name === "REMOVE"){
            for( var i = 0; i < selected.length; i++){ 
               if ( selected[i] === value) {
                 selected.splice(i, 1); 
               }
            }
        }
          cmp.set('v.selected', selected);
         hlp.showSuccessToast(name, value);
    },
    
    sendMessange: function (cmp, event, helper) {
        console.log('sss', cmp.get('v.param'));
        var msg = {
            name: "Search",
            value: cmp.get('v.param')
        };
		console.log(msg);
        cmp.find("reactApp").message(msg);
        
    },
    
    handleRemove: function (cmp, evt, hlp) {
        var label = evt.getSource().get("v.label");
        var msg = {
            name: "Disable",
            value: label
        };
        cmp.find("reactApp").message(msg);
         var selected = cmp.get('v.selected');
        for( var i = 0; i < selected.length; i++){ 
            if ( selected[i] === label) {
               selected.splice(i, 1); 
            }
         }
        
        cmp.set('v.selected', selected);
        
    }
    
    
    
})