const form = document.querySelector("#formulario");
const dados = JSON.parse(localStorage.getItem("dadosProduto")) || [];

dados.forEach((elemento)=>{
    criarElemento(elemento);
})

form.addEventListener("submit", (evento)=>{
    evento.preventDefault(); //previnindo o comportamento padrão desse elemento

    const nomeDoFilme = evento.target.elements['nomeDoFilme'];
    const nomeGeneroDoFilme = evento.target.elements['generoDoFilme'];
    const nomePlataformaDoFilme = evento.target.elements['plataformaDoFilme'];

    //O código abaixo verifica se existe algum elemento com o mesmo nome. Caso exista, ele guarda o objeto na const existe, ou undefined caso não exista.
    const existe = dados.find(elemento => elemento.nomeDoFilme === nomeDoFilme.value);

    const registroDosFilmes = {
        "nomeDoFilme": nomeDoFilme.value,
        "generoDoFilme": nomeGeneroDoFilme.value,
        "plataformaDoFilme": nomePlataformaDoFilme.value
    }

    if(existe){
        registroDosFilmes.id = existe.id;
        dados[dados.findIndex(elemento => elemento.id === existe.id)] = registroDosFilmes

    } else {
        registroDosFilmes.id = dados[dados.length -1] ? (dados[dados.length-1]).id + 1 : 0;

        criarElemento(registroDosFilmes);

        dados.push(registroDosFilmes);
    }

    localStorage.setItem("dadosProduto", JSON.stringify(dados));  //localStorage só guarda string, por isso usamos JSON.stringify

    //Limpar o campo
    nomeDoFilme.value = "";
    nomeGeneroDoFilme.value = "";
    nomePlataformaDoFilme.value = "";

});


function criarElemento(item){

    const createLi = document.createElement('li');
    createLi.classList.add('item'); //adicionar a classe item no createLi

    const varNomeDoFilme = item.nomeDoFilme;
    createLi.dataset.id = item.id;

    const createStrongNome = document.createElement('strong');
    createStrongNome.classList.add('strong');
    createStrongNome.setAttribute('id', 'strongNome');
    createStrongNome.innerHTML += varNomeDoFilme;
    createLi.appendChild(createStrongNome);

    // createLi.innerHTML += varNomeDoFilme;

    const createStrongGenero = document.createElement('strong');
    createStrongGenero.classList.add('strong');
    createStrongGenero.setAttribute('id','strongGenero');
    createStrongGenero.innerHTML = item.generoDoFilme;
    createLi.appendChild(createStrongGenero);

    const createStrongPlataforma = document.createElement('strong');
    createStrongPlataforma.classList.add('strong');
    createStrongPlataforma.setAttribute('id', 'strongPlataforma');
    createStrongPlataforma.innerHTML = item.plataformaDoFilme;
    createLi.appendChild(createStrongPlataforma);

    // createLi.innerHTML += varPlataformaDoFilme;

    const capturandoUl = document.querySelector("#listaDeFilmes");
    createLi.appendChild(botaoDeleta(item.id));  //botão deleta foi para dentro do li
    capturandoUl.appendChild(createLi); //li foi para dentro da ul
}

function botaoDeleta(id){
    const elementoBotao = document.createElement("button");
    elementoBotao.classList.add("fa-solid", "fa-trash-can");

    elementoBotao.addEventListener("click", function(){
        deletaElemento(this.parentNode, id);
    })

    return elementoBotao;
}

function deletaElemento(tag, id){
    tag.remove();

    dados.splice(dados.findIndex(elemento => elemento.id === id), 1);

    localStorage.setItem("dadosProduto", JSON.stringify(dados));

}

