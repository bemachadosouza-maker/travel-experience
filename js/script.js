const botaoCriar = document.getElementById("botaoCriar");
const botaoApagar = document.getElementById("botaoApagar");
const retorno = document.getElementById ("retorno");

botaoCriar.addEventListener("click", () => {
    retorno.textContent ="Hoje e um otimo dia para aprender, JS!"

});

// botaoApagar .addEventListener("click", fuction (){
//  ...
// });

botaoApagar.addEventListener("click", () => {
        retorno.textContent = "";
})