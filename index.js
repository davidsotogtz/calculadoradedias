///DOM
const $inputDay = document.querySelector('#inputDay');
const $inputMonth = document.querySelector('#inputMonth');
const $inputYear = document.querySelector('#inputYear');

const $inputLeapYear = document.querySelector('#inputLeap');
const $inputWeekDay = document.querySelector('#inputWeekday');
const $inputWorkingDay = document.querySelector('#inputWorkingDay');

const $btnCalculate = document.querySelector('#btnCalculate');

const $textError = document.querySelector('#textError');

// Constantes
const WEEKDAYS = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

// Establecer datos por defecto en el DOM (Inicio de la aplicación)
const date = new Date();
$inputDay.value = date.getDate();
$inputMonth.value = date.getMonth();
$inputYear.value = date.getFullYear();

// Eventos
$btnCalculate.addEventListener('click', () => {
  const day = $inputDay.value;
  const month = $inputMonth.value;
  const year = $inputYear.value;

  // Validaciones 
  if(day > 31 || day < 1) return $textError.textContent = 'El día debe estar entre 1 y 31';
  if(month > 11 || month < 0) return $textError.textContent = 'El mes debe estar entre 1 y 12';

  // Fecha completa 
  const date = new Date(year, month, day);

  // Resultados
  const leapYear = isLeapYear(year);
  const isWorkingDay = itsWorkingDay(date.getDay());
  const weekDay = WEEKDAYS[date.getDay()];

  // Mostrar resultados
  $inputLeapYear.value = leapYear ? 'Año bisiesto' : 'Año normal';
  $inputWorkingDay.value = `${weekDay}, ${isWorkingDay ? 'día laborable' : 'fin de semana'}`;

  // Limpiar errores
  $textError.textContent = '';
});


// Utilidades
function isLeapYear(year) {
  return new Date(year, 1, 29).getDate() === 29;
}

function itsWorkingDay(day) {
  // 0 = Domingo, 6 = Sábado
  switch (day) {
    case 0: case 6:
      return false;
    default:
      return true;
  }
}
