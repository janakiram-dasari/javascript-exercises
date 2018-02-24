function printReverse(array){
	for(var i = array.length-1 ; i>=0 ; i--){
		
	}
}
printReverse([8,6,4,2]);


function isUniform(array){
	var first = array[0];
	for(i = 1; i<array.length; i++){
		if(array[i] !== first){
			return false;
		}
	}
	return true;
}

isUniform([1,1,1,1])

function sumArray(array){
	var total = 0;
	array.forEach(function(element){
		total +=element;
	});
	return total; 
}


function max(array){
	var maximum = array[0];
	for(i = 1; i<array.length; i++){
		if(array[i] > maximum){
			maximum = array[i];
		}
	}
	return maximum;
}
