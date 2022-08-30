function Enviar() {
    var name = window.document.getElementById("Nome")
    var Nome = String(name.value)
    var email = window.document.getElementById("Email")
    var Email = String(email.value)
    var message = window.document.getElementById("Mensagem")
    var Mensagem = String(message.value)


    if (Nome == "") {
        alert("Insira o seu nome!")
    } else if (Email == "") {
        alert("Insira o email!")
    } else if (Mensagem == "") {
        alert("Insira sua mensagem!")
    } else {
        alert("Sua mensagem foi enviada. Logo entrarei em contato.")
        window.location.replace("index.html")
    }
}