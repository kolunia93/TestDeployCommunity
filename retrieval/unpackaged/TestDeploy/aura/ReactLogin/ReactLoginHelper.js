({
	handleLogin : function(cmp) {

		var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        var action = cmp.get("c.UserLogin");
        action.setParams({ 
            			 username : username,
            			 password: password
        });
       
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
				console.log(response.getReturnValue());
                cmp.set('v.messange', response.getReturnValue() );
            }
            else if (state === "INCOMPLETE") {

            }
            else if (state === "ERROR") {
                var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        console.log("Error message: " + 
                                 errors[0].message);
                        cmp.set('v.messange',errors[0].message );
                    }
                } else {
                    console.log("Unknown error");
                }
            }
        });
        console.log('sss1');
        $A.enqueueAction(action);
        console.log('sss2');
	}
})