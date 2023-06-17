$(document).ready(onReady)



function onReady() {
    console.log('jquery loaded!')
    getString

    //POST on client side with submit button
    $('#equals-btn').on('click', stringToAdd)
}


function getString() {
    $.ajax({
      method: 'GET',
      url: '/calculator'
    }).then(function (response) {
      console.log('getString function!', response)
      //render(response);
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

function stringToAdd(event) {
    console.log('string to add function')
    event.preventDefault()

    //inputs 
    const digitOne = $('#digit-one').val()
    const digitTwo = $('#digit-two').val()

    //buttons
    const addBtn = $('#add-btn').text()
    // const minusBtn = $('#minus-btn').val('')
    // const multiplyBtn = $('#multiply-btn').val('')
    // const divideBtn = $('#divide-btn').val('')
    // const equalsBtn = $('#equals-btn').val('')
    //const clearBtn = $('#clear-btn')

    $.ajax({
        method: 'POST',
        url: '/calculator',
        data: {
          stringToAdd: {
            num1: digitOne,
            num2: digitTwo,
            add: addBtn //add comma!
            // minus: minusBtn,
            // multiply: multiplyBtn,
            // divide: divideBtn,
            // equals: equalsBtn
            }
        }
      }).then(function (response) {
        console.log('success!', response)
        //GET function here
        getString()
      }).catch(function (error) {
        alert('whoopsie!')
        console.log('error with post', error)
      })
    }
    

