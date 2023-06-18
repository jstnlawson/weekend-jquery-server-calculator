$(document).ready(onReady)

//const addBtn = $('#add-btn').on('click', getMathBtnText)

let thisVal = 0

function onReady() {
    console.log('jquery loaded!')
    getString

    //POST on client side with submit button
    $('#equals-btn').on('click', stringToAdd)
    $('.math-btn').on('click', mathButton)
    $('.math-btn').on('click', displayTheBtn)
    $('#clear-btn').on('click', clearInputs)

}


function getString() {
    $.ajax({
        method: 'GET',
        url: '/calculator'
    }).then(function (response) {
        render(response)
        console.log('getString function!', response)
        //render(response);
    }).catch(function (error) {
        alert('Whoops!')
        console.log('Error server', error)
    })
}

//get the text values from the math buttons
function mathButton() {
    thisVal = $(this).val()
    console.log('Selected button is:', thisVal)
    // let inputBox = $('#equation-data')
    // inputBox.val() = thisVal.val()
}

function displayTheBtn() {
    $('#equation-data').val($('#equation-data').val() + $(this).val())
}

//add strings from the inputs and buttons to an array

function stringToAdd(event) {
    console.log('string to add function')
    event.preventDefault()

    // const digitOne = $('#digit-one').val()
    // const digitTwo = $('#digit-two').val()
    const equationData = $('#equation-data').val();
    //const btnValue = thisVal;

    //I was returning 3 of whichever number I entered last
    //and ended up finding this use of split() for the 
    //math operators. The '|' symbol is an OR operator.
    const [num1, operator, num2] = equationData.split(/(\+|\-|\*|\/)/)

    $.ajax({
        method: 'POST',
        url: '/calculator',
        data: {
            stringToAdd: {
                // num1: digitOne,
                // num2: digitTwo,
                // btn: thisVal

                //the example I found said trim ignores whitespace
                //which causes errors
                num1: num1.trim(),
                btn: operator.trim(),
                num2: num2.trim()
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

function render(response) {
    console.log('render is running')
    $('#solution').empty()
    if (response.length > 0) {
        const latestResult = response[response.length - 1]
        $('#solution').append(`<h2>${latestResult.result}</h2>`)
    }
    $('#full-equation').empty()
    for (let value of response) {
        $('#full-equation').append(`
        <li>${value.num1}${value.btn}${value.num2}=${value.result}</li>`)
    }
}
    function clearInputs() {
        $('input[type="text"]').val('')
        //$(".clear"+$(this).attr('class')).remove()
        console.log('is clearInputs being called?')
        //$('#arrayData').empty()
        $.ajax({
            method: 'POST',
            url: '/clear',
        }).then(function (response) {
            console.log('did .then clear work?', response);
            getString();
        })
    }







