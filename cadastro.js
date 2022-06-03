//let db = [];

document.querySelector('#cadastro').addEventListener("click", (event) => {
    event.preventDefault();
    let login = document.querySelector('#login').value;
    let senha = document.querySelector('#senha').value;

    if (login === '' || senha === '') {
        alert("preencha os campos")
    } else if (login != '' || senha != '') {
        location.href = 'index.html';
        salvar(login, senha)
    }

});

function salvar(e, s) {
    let db = JSON.parse(localStorage.getItem('usuarios') || '[]')
    let usuarios = {
        id: db.length + 1,
        login: e,
        senha: s
    }
    db.push(usuarios);

    localStorage.setItem('usuarios', JSON.stringify(db));

    if (login === '' || senha === '') {
        alert("preencha os campos")
    } else if (login != '' || senha != '') {
        location.href = 'index.html';
    }
}

// if (login === '' || senha === '') {
//     alert("Por favor preencha os dados");
// } else {


//     let usuario = {
//         id: db.length + 1,
//         login,
//         senha
//     }

//     db.push(usuario);
//     localStorage.setItem('dados', JSON.stringify(db))


// }


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