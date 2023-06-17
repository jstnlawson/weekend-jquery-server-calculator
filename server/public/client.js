$(document).ready(onReady)

let calaculatorArray = []

function onReady() {
    console.log('jquery loaded!')
$('#submit-button').on('click', )
}


function getGuesses() {
    $.ajax({
      method: 'GET',
      url: '/calculator'
    }).then(function (response) {
      console.log('getGuesses function!', response)
      render(response);
    }).catch(function (error) {
      alert('Whoops!')
      console.log('Error server', error)
    })
  }

// //inputs
// const digitOne = $('#digit-one').val()
// const digitTwo = $('#digit-two').val()

// //buttons
// const addBtn = $('#add-btn').val()
// const minusBtn = $('#minus-btn').val()
// const multiplyBtn = $('#multiply-btn').val()
// const divideBtn = $('$#divide-btn').val()
// const equalsBtn = $('#equals-btn')
// const clearBtn = $('#clear-btn')

//add strings from the inputs and buttons to an array

function getString(event) {
    event.preventDefault()

    //inputs 
    const digitOne = $('#digit-one').val()
    const digitTwo = $('#digit-two').val()

    //buttons
    const addBtn = $('#add-btn').val()
    const minusBtn = $('#minus-btn').val()
    const multiplyBtn = $('#multiply-btn').val()
    const divideBtn = $('$#divide-btn').val()
    const equalsBtn = $('#equals-btn').val()
    const clearBtn = $('#clear-btn')

    $.ajax({
        method: 'POST',
        url: '/calculator',
        data: {
          addEquation: {
            num1: digitOne,
            num2: digitTwo,
            add: addBtn,
            minus: minusBtn,
            multiply: multiplyBtn,
            divide: divideBtn,
            equals: equalsBtn
            }
        }
      }).then(function (response) {
        console.log('success!', response)
        //GET function here
      }).catch(function (error) {
        alert('whoopsie!')
        console.log('error with post', error)
      })
    }
    

