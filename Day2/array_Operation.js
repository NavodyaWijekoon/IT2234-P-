//array Operation
//Push and pop
console.log("----Push and Pop----")

Array3 = ['a','b','c']
console.log(Array3)
Array3.push('e')
console.log(Array3)
Array3.pop()
console.log(Array3)

//reverse the array using push and pop
//a b c d -> d c b a
console.log("----reverse the array using push and pop----")

let arr = ['a', 'b', 'c', 'd'];

let reverseArr = [];

while (arr.length > 0) 
{
  reverseArr.push(arr.pop());
}
console.log(reverseArr);
