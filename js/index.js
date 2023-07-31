//Accediento a los input tipo number
const bill = document.getElementById('bill');
const tip = document.getElementById('tip');
const people = document.getElementById('people');
//Accedientos a los botones de porcentaje
const percents = document.querySelectorAll('.calculator-input__percent button');
//Mensaje de error
const error = document.querySelector('.error');
//Acceder a los elementos de salida
const amount = document.querySelector('.calculator-output__amount output')
const total = document.querySelector('.calculator-output__total output')
//Acceder al boton reiniciar
const reset = document.getElementById('reset');
//Regex: verificar input person
const pattern = /^([1-9])([0-9]?)+$/;


percents.forEach((percent) => {
  percent.addEventListener('click', (e) => {
    if(!pattern.test(people.value)) {
      error.classList.add('isVisible');
      setTimeout(() => {
        error.classList.remove('isVisible');
      }, 3000)
    } else {
      const percentValue = e.target.value/100;
      const billValue = parseInt(bill.value);
      const peopleValue = parseInt(people.value);
      const tipAmount =  ((percentValue * billValue) / peopleValue).toFixed(2);
      const totalPerson = (Number(tipAmount) + (billValue / peopleValue)).toFixed(2);
      amount.textContent = `$${tipAmount}`;
      total.textContent = `$${totalPerson}`;
    }
  })
})
