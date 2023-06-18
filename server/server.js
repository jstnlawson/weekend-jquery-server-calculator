const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = 5000
app.use(express.static('server/public'))
app.use(bodyParser.urlencoded({extended: true }))

let calculatorArray = require('./modules/calculatorArray')
let doTheMath = require('./modules/doTheMath')

app.get('/calculator', function (req, res) {
    console.log('Inside of app.get')
    res.send(calculatorArray)
    console.log('data from numbers app.get is:', calculatorArray)
  })

app.post('/calculator', function (req, res) {
    let num1 = Number(req.body.stringToAdd.num1)
    let num2 = Number(req.body.stringToAdd.num2)
    let btn = req.body.stringToAdd.btn
    let result = doTheMath(num1, num2, btn)
    //I got really stuck here, i had to google my way out of it
    //My understanding is that Object.assign() can tack another 
    //object onto an existing one
    calculatorArray.push(Object.assign(req.body.stringToAdd, { result: result }))
    //calculatorArray.push(req.body.stringToAdd), result
    console.log('in numbers app.post, Here is the data: ', req.body)
    res.sendStatus(201)
  })

  app.post('/clear', function (req, res) {
    res.sendStatus(201)
  })

app.listen(PORT, () => {
    console.log('listening on port', PORT)
})