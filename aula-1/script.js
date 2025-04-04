function conversordolar() {
  const valor = document.getElementById("valorInput").value;
  dolar = 5.63;
  resultado = dolar * valor;
  document.getElementById("resultado").innerHTML =
    "O valor em reais convertido para dólar é: US$ " + resultado.toFixed(2);
}

function conversoreuro() {
  const valor = document.getElementById("valorInput").value;
  euro = 6.23;
  resultado = euro * valor;
  document.getElementById("resultado").innerHTML =
    "O valor em reais convertido para euro é: €" + resultado.toFixed(2);
}

function conversorlibra() {
  const valor = document.getElementById("valorInput").value;
  libra = 7.37;
  resultado = libra * valor;
  document.getElementById("resultado").innerHTML =
    "O valor em reais convertido para libra é: £ " + resultado.toFixed(2);
}

function conversorwon() {
  const valor = document.getElementById("valorInput").value;
  won = 0.0039;
  resultado = won * valor;
  document.getElementById("resultado").innerHTML =
    "O valor em reais convertido para won é:  ₩ " + resultado.toFixed(2);
}
