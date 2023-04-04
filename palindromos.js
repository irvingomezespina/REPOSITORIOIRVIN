function verificarPalindromo() {
    const palabra = document.getElementById("inputPalabra").value.toLowerCase();
    const reversa = palabra.split("").reverse().join("");
  
    if (palabra === reversa) {
      document.getElementById("output").textContent = "¡Sí es un palíndromo!";
    } else {
      document.getElementById("output").textContent = "No es un palíndromo.";
    }
  }