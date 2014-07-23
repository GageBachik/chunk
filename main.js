var chunk = function(array, chunks){
	// var isEven = ((chunks%2)===0);
	// if (isEven) {
	// 	var output = [];
	// 	var howToSplit = array.length / chunks;
	// 	for (var i = 0; i < chunks; i++) {
	// 		output.push(array.splice(0,howToSplit));
	// 	};

	// 	console.log(output);
	// }else{
	// 	var data = [];
	// 	var output = [];
	// 	var count = 0;
	// 	for (var i = 0; i < array.length; i++) {
	// 		data.push([array[i]]);
	// 	}
	// 	var	all = data.length/2;
	// 	for (var i = 0; i < all; i++) {
	// 		var current = data.splice(0,1);
	// 		var next = data.splice(0,1);
	// 		output.push([current, next]);
	// 		console.log('current: '+current, 'next: '+next, 'output: '+output, 'data: '+data);
	// 	}
	// 	console.log(output);
	// }
	// var output = [];
	// var chunkIt = function(array){
	// 	var division = array / chunks;
	// 	output.push(array.splice(0,1));
	// 	for (var i = 0; i < chunks; i++) {
	// 		console.log(output);
	// 		output.push(array.splice(0,1));
	// 		output[i].push(output.splice(0,1));
	// 	}
	// 	if (array.length>0) {
	// 		chunkIt(array);
	// 	}else{
	// 		console.log(output);
	// 	}
	// };

	// chunkIt(array);
};
// should return [ [1,2,3,4,5], [6,7,8,9,10] ]
var input = [1,2,3,4,5,6,7,8,9,10];
// chunk(input, 2)
// should return [ [1,2,3,4], [5,6,7], [8,9,10] ]
chunk(input, 3)
