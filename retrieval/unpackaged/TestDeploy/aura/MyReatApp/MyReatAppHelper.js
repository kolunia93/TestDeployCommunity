({
	showSuccessToast : function(name, msg) {
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            title : 'Message from React : '+name,
            message: msg,
            messageTemplate: 'success',
            duration:'500',
            key: 'info_alt',
            type: 'success',
            mode: 'sticky'
        });
        toastEvent.fire();
    },
})