const botaoCriar = document.getElementById("botaoCriar");
const botaoApagar = document.getElementById("botaoApagar");
const retorno = document.getElementById ("retorno");

const frases = [
    "Você esta arassando! 🚀",
    "Hora de codar! 💻",
    "Cafê, codigo e criatividade! ☕",
    "Javascript é magica! ☀️"
];
const cores = ["#fde68a", "#bfdbfe", "#bbf7d0", "#fbcfe8"];

botaoCriar.addEventListener("click", () => {
    const i = Math.floor(math.random() * frases.length);
    retorno.textContent = frases[i];
    retorno.style.backgroundColor = cores[i];
    retorno.style.fontSize = "24px";
    retorno.style.padding = "15px";
    retorno.style.borderRadius = "10px";
    retorno.style.textAlign = "center";

});