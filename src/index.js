module.exports = function makeExchange(currency) {
    
    var H = 0;
    var Q = 0;
    var D = 0;
    var N = 0;
    var P = 0;

    var result = {};

    if(currency > 10000) {
    	return result = {error: "You are rich, my friend! We don't have so much coins for exchange"}
    } else if (currency <= 0) {
    	return result;
    } else {
    			if (currency >= 50){
    			while(currency >= 50){
    				 var count = currency - 50;
    				 H++;
    				 currency = count;
    			}
    			 result.H = H;
    			} 
    			if(currency >= 25){
    				while(currency >= 25){
    				 	var count1 = currency - 25;
    					 Q++;
    				 	currency = count1;
    				}
    				 result.Q = Q;
    			} 
    			if(currency >=10){
    				while(currency >= 10){
    					 var count2 = currency - 10;
    					 D++;
    				 	currency = count2;
    				}
    				 result.D = D;
    			}  
    			if(currency >=5){
    				while(currency >= 5){
    				 	var count3 = currency - 5;
    				 	N++;
    				 	currency = count3;
    				}
    				 result.N = N;
    			} 
    		 	if(currency < 5){
    				while(currency != 0){
	    				var count4 = currency - 1;
	    				P++;
	    				currency = count4;
    			}
    		 		result.P = P;
    		}  

    		for (key in result) {
    			if(result[key] === 0){
    				delete result[key];
    			}
    		}
		return result;
    }
}



