$(document).ready(onReady)

//const addBtn = $('#add-btn').on('click', getMathBtnText)

let thisVal = 0

function onReady() {
    console.log('jquery loaded!')
    getString

    //POST on client side with submit button
    $('#equals-btn').on('click', stringToAdd)
    $('.math-btn').on('click', mathButton)
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

  function mathButton() {
    thisVal = $(this).val()
    console.log('Selected button is:', thisVal)
  }
  
  


//add strings from the inputs and buttons to an array

// function getMathBtnText() {
//     let buttonText = $(this).text()
//     console.log(buttonText)
// }
// const addBtn = $('#add-btn').on('click', getMathBtnText)
// console.log("addBtn is:", addBtn)

function stringToAdd(event) {
    console.log('string to add function')
    event.preventDefault()
    

    const digitOne = $('#digit-one').val()
    const digitTwo = $('#digit-two').val()
    //buttons
    
    // const addBtn = $('#add-btn').val()
    // const minusBtn = $('#minus-btn').val()
    // const multiplyBtn = $('#multiply-btn').val()
    // const divideBtn = $('#divide-btn').val()
    // const equalsBtn = $('#equals-btn').text()
    // const clearBtn = $('#clear-btn').text()
   
        $.ajax({
        method: 'POST',
        url: '/calculator',
        data: {
          stringToAdd: {
            num1: digitOne,
            num2: digitTwo,
            btn: thisVal//,
            //minus: minusBtn//,
            // multiply: multiplyBtn,
            // divide: divideBtn
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

    
    
    //MATH BUTTON FUNCTIONS

   

    

