//Find the max number of this array using forEach
console.log("----max number of this array using forEach----")
let numArray = [1,2,3,4,5]
let max = 0
numArray.forEach((n)=>{
	/*
	if(max<n)
	{
		max=n
	}
	*/
	(max<n)&&(max=n)
})
console.log("Max number is: " + max)