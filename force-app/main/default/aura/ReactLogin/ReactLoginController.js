({
	doInit: function(cmp) {
        //cmp.set("v.username", "s");

    },
    
    handleLogin:function(cmp, evt, hlp){
    	hlp.handleLogin(cmp);
	},
    register:function(cmp, evt, hlp){
         var urlEvent = $A.get("e.force:navigateToURL");
    urlEvent.setParams({
      "url": "/SelfRegister"
    });
    urlEvent.fire();
	}
    
})