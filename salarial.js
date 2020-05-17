
var texto = document.getElementById("caja_salario");
var boton = document.getElementById("boton_enviar");
boton.addEventListener("click", calculo );

function calculo()
{
  var valor_texto = parseInt(texto.value);
  var descuento4 = ((valor_texto*4)/100);
  var transporte = (102000);
  resultado.innerHTML =("tu aporte (4%) a pension es: " + descuento4 +
  "<br /> tu aporte (4%) a salud es: " + descuento4 +
  "<br /> descuentos totales: " + (descuento4*2) +
  "<br /> tu auxilio de transporte es: " + transporte +
  "<br /> <h1> Saldo neto a pagar es: " +
  (valor_texto - descuento4 + transporte) + "</h1>");
}
