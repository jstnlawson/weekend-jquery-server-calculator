const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = 5000
app.use(express.static('server/public'))
app.use(bodyParser.urlencoded({extended: true }))

let calculatorArray = require('./modules/calculatorArray')











app.post('/calculator', function (req, res) {
    console.log('in POST request! Here is the data: ', req.body);
    calculatorArray.push(req.body.getString);
    res.sendStatus(201);
  })

app.listen(PORT, () => {
    console.log('listening on port', PORT)
})