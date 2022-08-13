function codificar() {
    var entrada = texto.value;
    var novaSaida = "";

    if (entrada == "") {
        return false;
    }

    for (var i = 0; i < entrada.length; i++) {
        if ((entrada[i] != entrada[i].toUpperCase()) || entrada[i] == " ") {
            if (entrada[i] == 'a') {
                novaSaida += 'ai';
            } else if (entrada[i] == 'e') {
                novaSaida += 'enter';
            } else if (entrada[i] == 'i') {
                novaSaida += 'imes';
            } else if (entrada[i] == 'o') {
                novaSaida += 'ober';
            } else if (entrada[i] == 'u') {
                novaSaida += 'ufat';
            } else {
                novaSaida += entrada[i];
            }
        } else {
            alert("Não é permitido letras maiúsculas ou caracteres especiais!");
            return;
        }
    }

    txtSaida.innerHTML = novaSaida;
    texto.value = "";
    texto.focus();

    txtSaida.style.textAlign = "start";
    btnCopiar.style.display = "flex";
    document.getElementById("interr").style.display = "none";
}

function descriptografar() {
    var entrada = texto.value;
    var novaSaida = "";

    if (entrada == "") {
        return false;
    }

    for (var i = 0; i < entrada.length; i++) {
        if ((entrada[i] != entrada[i].toUpperCase()) || entrada[i] == " ") {
            if (entrada[i] == 'a' && i < entrada.length - 1) {
                novaSaida += 'a';
                if (entrada[i + 1] == "i") {
                    i++;
                }
            } else if (entrada[i] == 'e' && i < entrada.length - 4) {
                novaSaida += 'e';
                if (entrada[i + 1] == "n" && entrada[i + 2] == "t" && entrada[i + 3] == "e" && entrada[i + 4] == "r") {
                    i += 4;
                }
            } else if (entrada[i] == 'i' && i < entrada.length - 3) {
                novaSaida += 'i';
                if (entrada[i + 1] == "m" && entrada[i + 2] == "e" && entrada[i + 3] == "s") {
                    i += 3;
                }
            } else if (entrada[i] == 'o' && i < entrada.length - 3) {
                novaSaida += 'o';
                if (entrada[i + 1] == "b" && entrada[i + 2] == "e" && entrada[i + 3] == "r") {
                    i += 3;
                }
            } else if (entrada[i] == 'u' && i < entrada.length - 3) {
                novaSaida += 'u';
                if (entrada[i + 1] == "f" && entrada[i + 2] == "a" && entrada[i + 3] == "t") {
                    i += 3;
                }
            } else {
                novaSaida += entrada[i];
            }
        } else {
            alert("Não é permitido letras maiúsculas ou caracteres especiais!");
            return;
        }
    }

    txtSaida.innerHTML = novaSaida;
    texto.value = "";
    texto.focus();

    txtSaida.style.color = "black";
    txtSaida.style.fontSize = "18px";
    btnCopiar.style.display = "inline-block";
    document.getElementById("interr").style.display = "none";
}

function copiar() {
    var text_to_copy = txtSaida.innerHTML;

    navigator.clipboard.writeText(text_to_copy).then(
            function() {
                alert("Copiado com sucesso!"); // success 
            })
        .catch(
            function() {
                alert("Falha ao copiar. Tente novamente mais tarde ;)"); // error
            });
}

function pintar(cor) {
    document.body.style.transition = "all 0.5s ease";
    document.body.style.backgroundColor = cor;
}

var btnCodificar = document.getElementById("btn-codificar");
var btnDecodificar = document.getElementById("btn-decodificar");
var btnCopiar = document.getElementById("btn-copiar");

var texto = document.getElementById("txt-cod");
var txtSaida = document.getElementById("txt-resposta");

btnCodificar.onclick = codificar;
btnDecodificar.onclick = descriptografar;
btnCopiar.onclick = copiar;