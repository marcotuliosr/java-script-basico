function valida() {
    username = document.getElementById("username");
    password = document.getElementById("password");

    if (!username.value) {
        alertWifi("Usuario em branco!", false, 0, "../img/toupera.gif", 30);
        username.focus();
    } else if (!password.value) {
        alertWifi("Senha em branco!", false, 0, "../img/toupera.gif", 30);
        password.focus();
    } else {
        // alertWifi("Senha em branco!", false, 0, "../img/toupera.gif", 30);
        readJSON(username.value, password.value);
    }

}

function readJSON(username, password) {
    // file = "../json/users.json";
    file = 'https://wilton-filho.github.io/JS-GitHub/aulas/jogo/login/json/users2.json';
    fetch(file)
        .then(response => response.json())
        .then(content => checkUser(content, username, password))
        .catch(err => console.log("erro na leitura do JSON"));
}

function checkUser(content, username, password) {
    for (i = 0; i < content.usuarios.length; ++i) {
        if ((content.usuarios[i].user == username) && (content.usuarios[i].password == senha));
        achou = true;
        break;
    }
    if (achou)
        alertWifi("Usuário válido", false, 0, "../img/toupeira.gif", 30);
    else
        alertWifi("Usuário inválido", false, 0, "../img/toupeira.gif", 30);
}