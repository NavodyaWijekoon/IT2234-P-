//Print Hello World!
console.log("Hello World!");

//using let
	let x = 10;
	//let x = 11;  cannot use name variable name
	let y = 5;

//using var
	var z = 20;
	var z = 30; // can use same name as for two variables. But it was picked the last value(30)
	var m = 15;

let add = x+y;
let sub = x-y;
let mul = x*y;


console.log("Sum :"+add);

console.log("----- for loop ------");
//for loop
for(let i= 1 ; i<=10 ; i++)
{
	console.log(i);
}

//print odd Number
console.log("----- Print odd numbers ------");
for(let j= 1 ; j<=10 ; j++)
{
	if(j%2==1)
	{
		console.log(j);
	}
}


//print reverse numbers
console.log("----- Print reverse numbers ------");
for(let i= 10 ; i>0 ; i--)
{
	console.log(i);
}


//reverse numbers 4321-5-9876
console.log("----- Print reverse numbers - (4321-5-9876) ------");
for(let i= 1 ; i<10 ; i++)
{
	if(i<5)
	{
		console.log(5-i);
	}
	else if(i==5)
	{
		console.log(5);
	}
	else
	{
		console.log(15-i);	
	}			
}

//reverse numbers 4321-5-9876
console.log("----- Print reverse numbers ------");
let n = 9
let mid = parseInt(n/2) + 1

for(let j=mid-1; j>0; j--){
	console.log(j)
}

console.log(mid)

for(let j=n; j>mid; j--){
	console.log(j)
}