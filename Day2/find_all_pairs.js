/*
arr=[1,2,3,4,5,6]
target = 7
write a code to find all pairs that sum up to the target
*/

console.log("----Find all pairs that sum up to the target----")

function findPairs(arr, target) {
    let pairs = [];
    let seen = new Set();

    for (let num of arr) {
        let complement = target - num;
        if (seen.has(complement)) {
            pairs.push([complement, num]);
        }
        seen.add(num);
    }

    return pairs;
}

let arr = [1, 2, 3, 4, 5, 6];
let target = 7;
console.log(findPairs(arr, target));
