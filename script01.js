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

  var capitals = function (word) {
	let newArr = []
 word.split('').map(function(item, index, array) {
   if(item === item.toUpperCase()) {
	 newArr.push(index)
   } 
 })
 return newArr
};

function formatPoem(poem) {
	return poem.split('. ').join('.\n')
}


function sumStr(a,b) {
	// return a === "" && b === "" ? 0 : (Number(a) + Number(b)).toString()
	if(a === "" && b === "") {
	  a = 0
	  b = 0
	  let result = Number(a) + Number(b)
	  return result.toString()
	} else {
	  let result = Number(a) + Number(b)
	  return result.toString()
	  
	}
  }
  console.log(sumStr("1", ""))
  
  function bucketOf(str) {
	const newStr = str.toLowerCase()
	const arrWater = ['water', 'wet', 'wash']
	const arrSlime = ["i don't know", 'slime']
  
	let saidWater = arrWater.some(word => newStr.includes(word))
	let saidSlime = arrSlime.some(word => newStr.includes(word))
  
	if(saidWater && saidSlime) return 'sludge'
	if(saidWater) return "water"
	if(saidSlime) return 'slime'
	
	return 'air'
  }
  
  
  
  // console.log(bucketOf("What is that, WATER?!?"))
  // console.log(bucketOf("I don't know if I'm doing this right."))
  console.log(bucketOf("water, I don't know"))
  


  function bucketOf(str) {
	const newStr = str.toLowerCase()
   if(newStr.includes("water") && newStr.includes("slime")) {
	 return 'sludge'
   } 
   if(newStr.includes("i don't know") || newStr.includes('slime')) {
	 return 'slime'
   } 
   else if(newStr.includes('water') || newStr.includes('wet') || newStr.includes('wash')) {
	 return 'water'
   } 
	 else {
	 return 'air'
   }
 }
  