const botonEncriptar = document.getElementById("boton-encriptar");
const botonDesencriptar = document.getElementById("boton-desencriptar");
const entradaTexto = document.getElementById("entrada-texto");
const resultadoTexto = document.getElementById("resultado-texto");
const botonCopiar = document.getElementById("boton-copiar");

botonEncriptar.addEventListener("click", () => {
  resultadoTexto.innerText = encriptarTexto(entradaTexto.value);
});

botonDesencriptar.addEventListener("click", () => {
  resultadoTexto.innerText = desencriptarTexto(entradaTexto.value);
});

botonCopiar.addEventListener("click", () => {
  resultadoTexto.select();
  document.execCommand("copy");
});
function encriptarTexto(texto) {
  const conversiones = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat",
  };

  let textoEncriptado = "";
  for (let letra of texto) {
    if (conversiones[letra]) {
      textoEncriptado += conversiones[letra];
    } else {
      textoEncriptado += letra;
    }
  }

  return textoEncriptado;
}

function desencriptarTexto(texto) {
  const conversiones = {
    enter: "e",
    imes: "i",
    ai: "a",
    ober: "o",
    ufat: "u",
  };

  const regex = new RegExp(Object.keys(conversiones).join("|"), "g");

  return texto.replace(regex, (match) => conversiones[match]);
}
