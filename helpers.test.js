const {findMean, findMedian, findMode,} = require("./helpers");

describe("#findMedian", function(){
    it("finds the median of an even set", function(){ 
        expect(findMedian([1, -1, 4, 2])).toEqual(1.5)
    })
    it("finds the median of an odd set", function(){
        expect(findMedian([1,3,5])).toEqual(3)
    })
});

descibe("#findMode", function() {
    it("finds the mode of an array of numbers", function() {
        expect(findMode([2,2,2,4,4,4,4])).toEqual(4)
    })
});

describe("#findMean", function() {
    it("finds the mean of an empty array", function() {
        expect(findMean([])).toEqual(0)
    })
    it("finds the mean of an array of numbers", function() {
        expect(findMean([1,1,3,4,2])).toEqual(2.2)
    })
})