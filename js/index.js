//Accediento a los input tipo number
const bill = document.getElementById('bill');
const custom = document.getElementById('tip');
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


//Funcionalidad del area de botones para calcular por porcentaje
percents.forEach((percent) => {
  percent.addEventListener('click', (e) => {
    if(!pattern.test(people.value)) {
      warnning();
    } else if(!pattern.test(e.target.value) || bill.value === '') {
      return
    }  else {
      calculator(e);
    }
  })
})

//Personalizar porcentaje
custom.addEventListener('input', (e)=> {
  if(!pattern.test(people.value)) {
    warnning();
  } else if(!pattern.test(e.target.value) || bill.value === '') {
    return
  } 
  else {
     calculator(e);
  }
})

//Funcion que calcula porcentaje
function calculator(e) {
  const percentValue = e.target.value/100;
  const billValue = parseInt(bill.value);
  const peopleValue = parseInt(people.value);
  const tipAmount =  ((percentValue * billValue) / peopleValue).toFixed(2);
  const totalPerson = (Number(tipAmount) + (billValue / peopleValue)).toFixed(2);
  amount.textContent = `$${tipAmount}`;
  total.textContent = `$${totalPerson}`;
}

function warnning() {
  error.classList.add('isVisible');
  setTimeout(() => {
    error.classList.remove('isVisible');
  }, 3000)
}


//Resetear los valores originales
reset.addEventListener('click', ()=> {
  bill.value = "";
  people.value = "";
  custom.value = "";
  amount.textContent = "$0.00";
  total.textContent = "$0.00";
})
