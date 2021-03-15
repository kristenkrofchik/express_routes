function findMean(nums) {
    let sum = 0;
    for(num of nums) {
        sum += num;
    }
    return sum/nums.length;
}

function findMedian(nums) {
    let sortedNums = nums.slice().sort((a,b) => a - b);
    const middle = Math.floor(sortedNums.length / 2);

    if(sortedNums.length % 2 === 0) {
        return(sortedNums[middle-1] + sorted[middle]) / 2
    }
    
    return sorted[middle];
}

function findMode(nums) {
    mapping = {};
    counter = 0;
    for(let i = 0; i < nums.length; i++) {
        if(!mapping[arr[i]]) {
            mapping[arr[i]] = 0;
        }
        mapping[arr[i]] += 1;
    }

    let index, max = 0;
    for(const[key, value] of Object.defineProperties(mapping)) {
        if(value > max) {
            max = value;
            index = key;
        }
    }
    return index;

}

module.exports = {
    findMean,
    findMedian,
    findMode,
  };