const form = document.querySelector("#formulario");

form.addEventListener("submit", (evento)=>{
    evento.preventDefault(); //previnindo o comportamento padrão desse elemento
    console.log("clicado");
    console.log(evento);

    const nomeDoFilme = evento.target.elements['nomeDoFilme'].value;
    const nomeGeneroDoFilme = evento.target.elements['generoDoFilme'].value;
    const nomePlataformaDoFilme = evento.target.elements['plataformaDoFilme'].value;


    console.log(nomeDoFilme);
    console.log(nomeGeneroDoFilme);
    console.log(nomePlataformaDoFilme);

//Limpar o campo
    // nomeDoFilme.value = "";
    // nomeGeneroDoFilme.value = "";
    // nomePlataformaDoFilme.value = "";

    criarElemento(nomeDoFilme, nomeGeneroDoFilme, nomePlataformaDoFilme);


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



