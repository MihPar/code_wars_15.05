var numberFormat = function (number) {
    return number.toLocaleString()
};

function reverseWords(str) {
	const arr = str.split(" ")
	let arr2 = []
	for(let item of arr) {
	  let result = item.split("").reverse().join("")
	  arr2.push(result)
	}
	const r = arr2.join(' ')
	return r
	
  }
  console.log(reverseWords('The quick brown fox jumps over the lazy dog.'))