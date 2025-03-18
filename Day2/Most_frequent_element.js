//[4,8,3,4,3,2,1,8,4]
//Find the most frequent element in the Array

console.log("----most frequent element in the Array----")

let mostFrequent = arr => {
    let freq = {}, maxCount = 0, maxElement;
    arr.forEach(num => {
        freq[num] = (freq[num] || 0) + 1;
        if (freq[num] > maxCount) [maxCount, maxElement] = [freq[num], num];
    });
    return maxElement;
};

console.log(mostFrequent([4,8,3,4,3,2,1,8,4]));
