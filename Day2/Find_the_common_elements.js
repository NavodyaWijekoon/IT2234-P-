/*Find the common elements between a and b
	a=[4,5,6,3,7]
	b=[8,3,2,1,5]
*/

console.log("----Find the common elements between a and b----")

let commonElements = (a, b) => a.filter(num => b.includes(num));

let a = [4, 5, 6, 3, 7];
let b = [8, 3, 2, 1, 5];

console.log("Common elements are: " + commonElements(a, b));