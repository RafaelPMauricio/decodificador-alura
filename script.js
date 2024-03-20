function mudarEstilosParaResultado() {
  document.querySelector(".resultado-placeholder").style.display = "none";
  document.querySelector(".butao-copiar").style.display = "block";
  document.querySelector(".resultado-texto").style.fontSize = "20px";
}

function codificar() {
  let textoCodificado = "";
  let texto = document.querySelector(".decodificador-texto").value;
  if (!texto) {
    return;
  }
  let resultado = document.querySelector(".resultado-texto");

  mudarEstilosParaResultado();

  for (const letra of texto) {
    switch (letra) {
      case "a":
        textoCodificado += "ai";
        break;
      case "e":
        textoCodificado += "enter";
        break;
      case "i":
        textoCodificado += "imes";
        break;
      case "o":
        textoCodificado += "ober";
        break;
      case "u":
        textoCodificado += "ufat";
        break;
      default:
        textoCodificado += letra;
        break;
    }
  }
  resultado.textContent = textoCodificado;
}

function decodificar() {
  let textoDecodificado = "";
  let texto = document.querySelector(".decodificador-texto").value;
  if (!texto) {
    return;
  }
  let resultado = document.querySelector(".resultado-texto");

  mudarEstilosParaResultado();

  textoDecodificado = texto.replaceAll("ai", "a");
  textoDecodificado = textoDecodificado.replaceAll("enter", "e");
  textoDecodificado = textoDecodificado.replaceAll("imes", "i");
  textoDecodificado = textoDecodificado.replaceAll("ober", "o");
  textoDecodificado = textoDecodificado.replaceAll("ufat", "u");
  resultado.textContent = textoDecodificado;
}

function copiarResultado() {
  let resultado = document.querySelector(".resultado-texto");

  navigator.clipboard.writeText(resultado.textContent);
}
