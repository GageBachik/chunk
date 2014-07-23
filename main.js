var chunk = function(array, chunks){
	var count = 0;
	var remainder = array.length % chunks;
	var output = [];
	var spliceAmount = Math.floor(array.length / chunks);
	for (var i = 0; i < chunks; i++) {
		if ( count < remainder) {
			console.log('pushed');
			output.push(array.splice(0,spliceAmount+1));
			count++
		}else{
			output.push(array.splice(0,spliceAmount));
		}
	}
	console.log(output);
};

// should return [ [1,2,3,4,5], [6,7,8,9,10] ]
var input = [1,2,3,4,5,6,7,8,9,10];
// chunk(input, 2);
// should return [ [1,2,3,4], [5,6,7], [8,9,10] ]
// chunk(input, 3);
// should return [ [1,2], [3,4], [5,6], [7], [8], [9], [10] ]
// chunk(input, 7);

