const form = document.querySelector('#infos-prod');
const divErro = document.querySelector('#msg-erro');
const tabela = document.querySelector('#tbody');
let idx = form.idx.value;

//captura a session
let usuarioId = Number(sessionStorage.getItem('logado'))

//localStorage
const session = localStorage.getItem("session");

logadoOuNao();

function logadoOuNao() {
    //se tiver dado dentro do localStorange session
    if (session) {
        //uma sessao com o log que recebe o valor da localStorange
        sessionStorage.setItem("log", session);
        usuarioId = session;
    }
    if (!usuarioId) {
        window.location.href = "index.html"
        return;
    }
}
console.log(usuarioId)

//salva no localStorange
const atualizarLocalStorage = (produtos) => { localStorage.setItem('produtos', JSON.stringify(produtos)) };
const recuperarLocalStorage = () => {
    const produtos = JSON.parse(localStorage.getItem('produtos') || '[]');
    return produtos
}

const salvarProduto = (e) => {
    e.preventDefault()
    console.log("passou pelo evento")
    divErro.innerHTML = "";
    const nome = form.nome.value;
    const preco = Number(form.preco.value);
    const prime = form.prime.checked;
    const erros = [];

    if (!nome || nome.length < 2) {
        erros.push("<p>Nome inválido</p>");
    }
    if (!preco || preco.length < 0) {
        erros.push("<p>Nome inválido</p>");
    }
    if (erros.length > 0) {
        divErro.innerHTML = erros.join(" ");
        return
    }

    if (idx == 'novo') {
        const produtos = recuperarLocalStorage()
        let i = 1;
        let idt = 0;
        for (const pro of produtos) {
            if (pro.usuarioId === usuarioId)

                idt = Number(pro.id);
        }


        //console.log({ id: produtos.length + 1, nome, preco, prime })
        produtos.push({ id: idt += 1, nome, preco, prime, usuarioId });
        atualizarLocalStorage(produtos);
        preencherTabela();
        form.reset();
    } else {
        let produto = { id: idx, nome, preco, prime, usuarioId }
        atualizarProduto(idx, produto);
        preencherTabela();
        form.reset();
        idx = 'novo';
        console.log('atualizarProduto', idx)
    }

}
const preencherTabela = () => {
    const produtos = recuperarLocalStorage();
    tabela.innerHTML = '';
    for (const produto of produtos) {
        tabela.innerHTML += `
        <tr>
          <th scope="row">${produto.id}</th>
          <td>${produto.nome}</td>
          <td>${produto.preco},00</td>
          <td>${produto.prime ? "sim" : "não"}</td>
        
        <td>
        <i class="fa-solid fa-trash-can" type="button" onclick="removerProduto(${produto.id})"></i>   
        <i class="fa-solid fa-pen-ruler" type="button" onclick="editarProduto(${produto.id})"></i>
        </td> 

        </tr>
        `;

    }
}

const removerProduto = (id) => {
    const produtos = recuperarLocalStorage();
    const indexProduto = produtos.findIndex((produto) => produto.id === id)
    if (indexProduto < 0) return;
    produtos.splice(indexProduto, 1);
    atualizarLocalStorage(produtos);
    alert('Produto removido')
    preencherTabela();
}
const editarProduto = (id) => {
    const produtos = recuperarLocalStorage();
    const indexProduto = produtos.findIndex((produto) => produto.id === id)
    form.nome.value = produtos[indexProduto].nome;
    form.preco.value = produtos[indexProduto].preco;
    form.prime.checked = produtos[indexProduto].prime;
    idx = id;
}

const atualizarProduto = (id, produto) => {
    const produtos = recuperarLocalStorage();
    const indexProduto = produtos.findIndex((produto) => produto.id === id);
    produtos[indexProduto] = produto;
    atualizarLocalStorage(produtos);
}

form === null || form === void 0 ? void 0 : form.addEventListener('submit', salvarProduto);
document.addEventListener('DOMContentLoaded', preencherTabela);


//funcao de sair
document.querySelector('#sair').addEventListener('click', function() {
    saindo()
})

function saindo() {
    sessionStorage.removeItem("logado");
    localStorage.removeItem("session")

    window.location.href = "index.html"
}

if (login === '' || senha === '') {
    alert("Por favor preencha os dados");
} else {


    let usuario = {
        id: db.length + 1,
        login,
        senha
    }

    db.push(usuario);
    localStorage.setItem('dados', JSON.stringify(db))


}




//animation
const ulSquares = document.querySelector("ul.squares");

for (let i = 0; i < 11; i++) {
    const li = document.createElement("li");

    const random = (min, max) => Math.random() * (max - min)

    const size = Math.floor(random(10, 120));
    const position = random(1, 99)
    const delay = random(5, 0.1)
    const duration = random(24, 12)

    li.style.width = `${size}px`;
    li.style.height = `${size}px`;
    li.style.bottom = `-${size}px`;

    li.style.left = `${position}%`;

    li.style.animationDelay = `${delay}s`;
    li.style.animationDuration = `${duration}s`;

    ulSquares.appendChild(li);

}