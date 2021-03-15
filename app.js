const express = require('express');
const ExpressError = require('./expressError');

const app = express();
app.arguments(express.json());

const { findMode, findMean, findMedian, handleNumsArray } = require('./helpers');


app.get('/mean', (req, res, next) => {
    if(!req.query.nums) {
        throw new ExpressError('Numbers are required for this operation.', 400)
    }
    
    let queryNums = req.query.nums.split(',');
    let nums = handleNumsArray(queryNums);
    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
    }

    let result = {
        operation: "mean",
        result: findMean(nums)
      }
    return res.send(result)
})

app.get('/median', (req, res) => {
    if(!req.query.nums) {
        throw new ExpressError('Numbers are required for this operation.', 400)
    }

    let queryNums = req.query.nums.split(',');
    let nums = handleNumsArray(queryNums);
    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
    }

    let result = {
        operation: "median",
        result: findMedian(nums)
      }
    return res.send(result)
})

app.get('/mode', (req, res) => {
    if(!req.query.nums) {
        throw new ExpressError('Numbers are required for this operation.', 400)
    }  

    let queryNums = req.query.nums.split(',');
    let nums = handleNumsArray(queryNums);
    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
    }

    let result = {
        operation: "mode",
        result: findMode(nums)
      }
    return res.send(result)
}) 

app.use((req, res, next) => {
	const e = new ExpressError('Page not found', 404)
    next(e)
});

app.use((error, req, res, next) => {
	let status = error.status || 500;
    let msg = error.message;
    
	return res.status(status).json({
        error: {msg, status}
    });
});


app.listen(3000, function() {
    console.log('App on Port 3000')
});