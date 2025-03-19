let participantes = [];

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();
    if (nome && !participantes.includes(nome)) {
        participantes.push(nome);
        atualizarLista();
    }
    input.value = "";
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    participantes.forEach(nome => {
        let item = document.createElement("li");
        item.textContent = nome;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (participantes.length < 2) {
        alert("É necessário pelo menos 2 participantes para o sorteio.");
        return;
    }
    
    let disponiveis = [...participantes];
    let participante = participantes[Math.floor(Math.random() * participantes.length)];
    let possiveis = disponiveis.filter(p => p !== participante);
    
    if (possiveis.length === 0) {
        return sortearAmigo(); 
    }
    
    let sorteado = possiveis[Math.floor(Math.random() * possiveis.length)];
    
    exibirResultado(sorteado);
}

function exibirResultado(sorteado) {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    
    let item = document.createElement("li");
    item.textContent = `O seu amigo secreto é: ${sorteado}`;
    resultado.appendChild(item);
}
