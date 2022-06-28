const form = document.querySelector("#formulario");
const dados = JSON.parse(localStorage.getItem("dadosProduto")) || [];

form.addEventListener("submit", (evento)=>{
    evento.preventDefault(); //previnindo o comportamento padrão desse elemento
    console.log("clicado");
    console.log(evento);

    const nomeDoFilme = evento.target.elements['nomeDoFilme'];
    const nomeGeneroDoFilme = evento.target.elements['generoDoFilme'];
    const nomePlataformaDoFilme = evento.target.elements['plataformaDoFilme'];

    const registroDosFilmes = {
        nomeDoFilme: nomeDoFilme.value,
        generoDoFilme: nomeGeneroDoFilme.value,
        plataformaDoFilme: nomePlataformaDoFilme.value
    }

    dados.push(registroDosFilmes);

    localStorage.setItem("dadosProduto", JSON.stringify(dados));

    criarElemento(nomeDoFilme.value, nomeGeneroDoFilme.value, nomePlataformaDoFilme.value);

    //Limpar o campo
    nomeDoFilme.value = "";
    nomeGeneroDoFilme.value = "";
    nomePlataformaDoFilme.value = "";


});


function criarElemento(nomeDoFilme, nomeGeneroDoFilme, nomePlataformaDoFilme){
    console.log(nomeDoFilme);

    const createLi = document.createElement('li');
    createLi.classList.add('item'); //adicionar a classe item no createLi

    const capturandoUl = document.querySelector("#listaDeFilmes");
    capturandoUl.appendChild(createLi); //li foi para dentro da ul
    console.log(capturandoUl);

    createLi.innerHTML = nomeDoFilme + " " + nomeGeneroDoFilme + " " + nomePlataformaDoFilme;


}



// localStorage
// A estrutura de storage de dados é bem simples, composta pelo par chave e valor. Um exemplo:
// {
//     chave: valor;
// }
// os dados que serão gravados ali precisam ser convertidos para strings antes de serem gravados. Para fazer isso, basta usar o método JSON.stringify() antes de passar o valor para o setItem().

// localStorage.setItem() para criar um novo par de chave: valor;
// localStorage.getItem() para recuperar o valor do par chave: valor;
// localStorage.removeItem() para remover um par específico;
// localStorage.clear() apaga TODOS os pares gravados pro aquele domínio;