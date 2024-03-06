let cronometro;
let segundos = 0;
let minutos = 0;
let horas = 0;

function iniciarCronometro() {
  cronometro = setInterval(function() {
    segundos++;
    if (segundos === 60) {
      segundos = 0;
      minutos++;
      if (minutos === 60) {
        minutos = 0;
        horas++;
      }
    }
    actualizarDisplay();
  }, 1000);
}

function pausarCronometro() {
  clearInterval(cronometro);
}

function resetearCronometro() {
  clearInterval(cronometro);
  segundos = 0;
  minutos = 0;
  horas = 0;
  actualizarDisplay();
}

function actualizarDisplay() {
  let formatoSegundos = segundos < 10 ? "0" + segundos : segundos;
  let formatoMinutos = minutos < 10 ? "0" + minutos : minutos;
  let formatoHoras = horas < 10 ? "0" + horas : horas;

  let display = document.getElementById("display");
  display.textContent = formatoHoras + ":" + formatoMinutos + ":" + formatoSegundos;
}