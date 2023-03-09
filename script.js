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

btnConfirm.onclick = function(e) {
    e.preventDefault()

    if(inputName.value !== '' && inputNumber.value !== '' && inputMonth.value !== '' && inputYear.value !== '' && inputCvc.value !== '') {
        cardName.innerHTML = inputName.value
        cardNumber.innerHTML = inputNumber.value
        cardDate.innerHTML =  inputMonth.value + '/' + inputYear.value
        cardCvc.innerHTML = inputCvc.value

        inputName.value = ''
        inputNumber.value = ''
        inputMonth.value = ''
        inputYear.value = ''
        inputCvc.value = ''
    } else {
        alert('Preencha todos os campos para concluir o cadastro do seu cartão!')
    }

}