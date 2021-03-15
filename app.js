const express = require('express')

const app = express();
app.arguments(express.json());

let nums = req.query;

app.get('/mean', (req, res) => {
    let result = {
        operation: "mean",
        result: findMean(nums)
      }
    return res.json()
})

app.get('/median', (req, res) => {

})

app.get('/mode', (req, res) => {
    
}) 


app.listen(3000, function() {
    console.log('App on Port 3000')
});