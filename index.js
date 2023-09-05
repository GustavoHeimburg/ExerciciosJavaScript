window.alert('Tudo certin?')

//1

var idadeAtual = prompt('Digite sua idade atual');
idadeAtual = parseInt(idadeAtual);
var idadeFutura = idadeAtual + 30;
alert('Sua idade atual é: ' + idadeAtual);
alert('Sua idade daqui a 30 anos será: ' + idadeFutura);



//3

var nome = prompt('Digite seu nome antes de entrar no site');
if (nome) {
    var idade = prompt('Digite sua idade para realizar a votação');
    if (idade && parseInt(idade) >= 18) {
        alert('Bem vindo, sua idade e legal ' + nome+ '!');
    } else {
        alert('Desculpe, você ainda nao pode votar.');
    }
}