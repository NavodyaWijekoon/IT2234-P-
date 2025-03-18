//Array
console.log("----Print array----")
let numArray = [1,2,3,4]
console.log(numArray);

console.log("----Print array in for loop----")
for(let i=0; i<numArray.length; i++)
{
	console.log(numArray[i]);
}

console.log("----Print array in forEach loop----")
numArray.forEach((n)=>{
	console.log(n)
})

