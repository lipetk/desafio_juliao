//SECTION STORANGE - FRAVA OS DADOS NO NAVEGADOR, MAS SE FECHAR APAGA OS DADOS DA SEÇÃO 
document.querySelector('#logar').addEventListener('click', (evento) => {
    evento.preventDefault();
    let login = document.querySelector('#login');
    let senha = document.querySelector('#senha');
    entrar()
        // listarUsuarios(login, senha);
});

function entrar() {
    let usuario = document.querySelector('#login');
    let senha = document.querySelector('#senha');

    let listarUser = [];

    let usuarioValido = {
        login: '#login',
        senha: '#senha'
    }

    listarUser = JSON.parse(localStorage.getItem('usuarios'));

    listarUser.forEach(elemento => {
        if (usuario.value === elemento.login && senha.value === elemento.senha) {
            usuarioValido = {
                id: elemento.id,
                login: elemento.login,
                senha: elemento.senha
            }
        }
    });

    if (usuario.value === usuarioValido.login && senha.value === usuarioValido.senha) {
        alert('foi sal')
        saveSession(usuarioValido.id);
        window.location.href = 'recados.html'
    } else if (usuario.value !== usuarioValido.login && senha.value !== usuarioValido.senha) {
        alert('é cena')
    } else if (login === '' || senha === '') {
        alert('é cena')
    }

}

function saveSession(data) {
    if (saveSession) {
        localStorage.setItem("session", data);
    }
    sessionStorage.setItem("logado", JSON.stringify(data));
}
//localStorange só armazena dados do tipo string
//pegar todos do local storange
//foreach é uma função apenas para vetor...



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




























// function listarUsuarios(l, s) {

//   let db_usuarios = [];
//   let usuario = {
//     login: null,
//     senha: null
//   }

//   db_usuarios = JSON.parse(localStorage.getItem('dados'));

//   db_usuarios.forEach(elemento => {
//     if(l.value === elemento.login  && s.value === elemento.senha) {
//       usuario.login = l.value;
//       usuario.senha = s.value;
//     }
//     console.log(db_usuarios);
//   });

//   if(l.value === usuario.login  && s.value === usuario.senha) {
//    location.href = 'home.html';
//   } else {
//     alert('LOGIN OU SENHA INCORRETO');
//   }

// }

// console.log('oi')