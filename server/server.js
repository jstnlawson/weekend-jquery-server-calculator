const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = 5000
app.use(express.static('server/public'))
app.use(bodyParser.urlencoded({extended: true }))

let calculatorArray = require('./modules/calculatorArray')
let doTheMath = require('./modules/doTheMath')

let answer = doTheMath(calculatorArray)









app.get('/calculator', function (req, res) {
    console.log('Inside of app.get')
    res.send(calculatorArray)
    console.log('data from numbers app.get is:', calculatorArray)
  })

app.post('/calculator', function (req, res) {
    //console.log('in numbers app.post, Here is the data: ', req.body);
    let result = doTheMath (Number(req.body.stringToAdd),answer)
    req.body.stringToAdd.outcome = result
    console.log('the answer is:', result)
    calculatorArray.push(req.body.stringToAdd);
    console.log('in numbers app.post, Here is the data: ', req.body);
    res.sendStatus(201);
  })

app.listen(PORT, () => {
    console.log('listening on port', PORT)
})