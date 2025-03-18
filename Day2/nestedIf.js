//Print the nested array
//[[1,2,30],[5,6],[8,5,3]]

console.log("----Print the nested array----")

let Array2 =[[1,2,30],[5,6],[8,5,3]]
Array2.forEach((n)=>{
	n.forEach((i) =>{
		console.log(i)
	})
})