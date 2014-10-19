angular
	.module('hookah')
	.factory('storageService', function() {
	    return {
	    	selectedValues: {},
	    	promises: {
	    		navigation: {},
	    		selects: {}
	    	}
	    };
	});