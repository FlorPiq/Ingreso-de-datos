let btnEnv = document.getElementById("btnEnviar");
let formulario = document.forms[0];
let dato = document.forms[0].dato;
let rotulo = document.getElementById("rotulo");

btnEnv.addEventListener("click", () => {
  console.log("La altura es", dato.value);
});
rotulo.innerHTML = "Indique la altura de una persona: ";
