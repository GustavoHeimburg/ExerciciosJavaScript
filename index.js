window.alert('Tudo certin?')

//1
var nome = prompt('Digite seu nome antes de entrar no site');
var idadeAtual = prompt('Digite sua idade atual');

idadeAtual = parseInt(idadeAtual);
alert(nome+', Sua idade atual é: ' + idadeAtual);
alert(nome+', Daqui a 30 anos você terá: ' + (idadeAtual + 30 * 365) + " dias de vida");


    if (parseInt(idadeAtual) >= 16) {
        alert('Na sua idade atual, você está apto a votar ' + nome+ '!');
    } else {
        alert('Desculpe' +nome+', na sua idade atual, você ainda não está apto para votar.');
    }

idadeAtual = idadeAtual * 3;

    if(idadeAtual >= 18){
        alert(nome+", Daqui a 40 meses, você será maior de idade, com: " + idadeAtual +" anos.");
    }else{
        alert(nome+", Daqui a 40 meses, você não será maior de idade, e terá: " + idadeAtual +" anos");
    }
