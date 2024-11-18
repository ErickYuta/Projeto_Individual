// sessão
function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var generoLivro = sessionStorage.GENERO_USUARIO;

    var b_usuario = document.getElementById("b_usuario");
    var b_genero = document.getElementById("b_genero")
    if (email != null && nome != null) {
        b_usuario.innerHTML = nome;

        if (b_genero && generoLivro != null) {
            b_genero.innerHTML = generoLivro;
        }
    } else {
        window.location = "../login.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../index.html";
}

