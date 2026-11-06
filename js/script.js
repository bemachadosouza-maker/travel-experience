const formulario = document. querySelector(#formCadastro)

formulario.addEvenlistener("submit", function(event){

    const nome = document.querySelector("#nome").value;
    const destino = document.querySelector("#destino").value;

    const mensagem = document.querySelector("#mensagem");

    mensagem.textContent =
    "ola," + nome + "! Sua proxima aventura sera em " + destino + "!"

    formulario.reset():
})