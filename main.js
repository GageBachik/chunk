var chunk = function(array, chunks){
	var isEven = ((chunks%2)===0);
	if (isEven) {
		var output = [];
		var howToSplit = array.length / chunks;
		for (var i = 0; i < chunks; i++) {
			output.push(array.splice(0,howToSplit));
		};

		console.log(output);
	}
};
// should return [ [1,2,3,4,5], [6,7,8,9,10] ]
var input = [1,2,3,4,5,6,7,8,9,10];
chunk(input, 2)