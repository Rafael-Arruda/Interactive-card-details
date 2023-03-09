/* Pegando os elementos dos Cards */
var cardNumber = document.querySelector('.number')
var cardName = document.querySelector('.name')
var cardDate = document.querySelector('.date')
var cardCvc = document.querySelector('.cvc')

/* Pegando os elementos do Formulário */
var inputName = document.querySelector('.input-name')
var inputNumber = document.querySelector('.input-number')
var inputMonth = document.querySelector('.input-month')
var inputYear = document.querySelector('.input-year')
var inputCvc = document.querySelector('.input-cvc')

var btnConfirm = document.querySelector('.btn-confirm')
var btnContinue = document.querySelector('.btn-continue')

/* Pegando span's de Erro*/
var numberErrorMessage = document.querySelector('.number-error')
var nameErrorMessage = document.querySelector('.name-error')
var expirationErrorMessage = document.querySelector('.expiration-error')
var cvcErrorMessage = document.querySelector('.cvc-error')

/**/
var formContainer = document.querySelector('.form-container')
var boxConfirmation = document.querySelector('.box-confirmation')

function checkName(name) {
    if(name !== '') {
        nameErrorMessage.innerHTML = ''
        inputName.classList.remove('input-error')
        return true
    }else {
        nameErrorMessage.innerHTML = "Can't be blank"
        inputName.classList.add('input-error')
        return false
    }
}
function checkNumber(num) {    
    if(!isNaN(num) && num !== '') {
        numberErrorMessage.innerHTML = ''
        inputNumber.classList.remove('input-error')
        return true
    }else if(isNaN(num)){
        numberErrorMessage.innerHTML = 'Wrong format, numbers only'
        inputNumber.classList.add('input-error')
        return false
    }else {
        numberErrorMessage.innerHTML = "Can't be blank"
        inputNumber.classList.add('input-error')
        return false
    }
}
function checkExpiration(month, year) {
    if(month !== '' && year !== '') {
        expirationErrorMessage.innerHTML = ''
        inputMonth.classList.remove('input-error')
        inputYear.classList.remove('input-error')
        return true
    }else {
        expirationErrorMessage.innerHTML = "Can't be blank"
        inputMonth.classList.add('input-error')
        inputYear.classList.add('input-error')
        return false
    }
}
function checkCvc(cvc) {
    if(cvc !== '') {
        cvcErrorMessage.innerHTML = ''
        inputCvc.classList.remove('input-error')
        return true
    }else {
        cvcErrorMessage.innerHTML = "Can't be blank"
        inputCvc.classList.add('input-error')
        return false
    }
}

function formatNumber(num) {
    let formatedNumber = []
    let cont = 0

    for(let i=0; i<num.length; i++) {
        if(cont == 3) {
            formatedNumber.push(num[i])
            formatedNumber.push(' ')

            cont = 0
        }else {
            formatedNumber.push(num[i])
            cont++
        }
    }

    return formatedNumber.join('')
}

btnConfirm.onclick = function(e) {
    e.preventDefault()

    let checkedName = checkName(inputName.value)
    let checkedNumber = checkNumber(inputNumber.value)
    let checkedExpiration = checkExpiration(inputMonth.value, inputYear.value)
    let checkedCvc = checkCvc(inputCvc.value)

    if(checkedName && checkedNumber && checkedExpiration && checkedCvc) {
        cardName.innerHTML = inputName.value
        cardNumber.innerHTML = formatNumber(inputNumber.value)
        cardDate.innerHTML =  inputMonth.value + '/' + inputYear.value
        cardCvc.innerHTML = inputCvc.value

        inputName.value = ''
        inputNumber.value = ''
        inputMonth.value = ''
        inputYear.value = ''
        inputCvc.value = ''

        formContainer.style.display = 'none'
        boxConfirmation.style.display = 'flex'
    } else {
        return
    }

}

btnContinue.onclick = function(e) {
    e.preventDefault()

    cardNumber.innerHTML = '0000 0000 0000 0000'
    cardDate.innerHTML = '00/00'
    cardName.innerHTML = 'Jane Appleseed'
    cardCvc.innerHTML = '000'

    boxConfirmation.style.display = 'none'
    formContainer.style.display = 'flex'
}