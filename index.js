document.getElementById("calc").onclick = function() {
    window.alert('Tudo certin?')

//1
    var nome = prompt('Digite seu nome antes de entrar no site');
    var idadeAtual = prompt('Digite sua idade atual em anos');
    var meses = prompt("Digite em qual mes você faz aniversario");

    idadeAtual = parseInt(idadeAtual);
    alert(nome + ', Sua idade atual é: ' + idadeAtual);
    alert(nome + ', Daqui a 30 anos você terá: ' + (idadeAtual + 30 * 365) + " dias de vida");


    if (parseInt(idadeAtual) >= 16) {
        alert('Na sua idade atual, você está apto a votar ' + nome + '!');
    } else {
        alert('Desculpe' + nome + ', na sua idade atual, você ainda não está apto para votar.');
    }
    if (meses >= 8) {
        idadeAtual = idadeAtual + 4;
    } else {
        idadeAtual = idadeAtual + 3;
    }

    if (idadeAtual >= 18) {
        alert(nome + ", Daqui a 40 meses, você será maior de idade, com: " + idadeAtual + " anos.");
    } else {
        alert(nome + ", Daqui a 40 meses, você não será maior de idade, e terá: " + idadeAtual + " anos");
    }
}
document.getElementById("boot").onclick = function() {
    var nome = prompt('Digite seu nome antes de entrar no site');
    alert(`Obrigado por entrar ${nome}`)
    var peso = prompt('Digite seu peso')
    var altura = prompt('Digite sua altura')
    const imc = peso / (altura * altura)
if (imc >=30){
    alert(`Seu IMC esta alterado, tome cuidado: ${nome} seu imc é ${imc}`);
    }else {
    alert(`Seu IMC esta favoravel com suas caracteristicas corporais, ` + nome + " seu imc é:"+ imc )
    }
}

document.getElementById("aposent").onclick = function() {
function aposentadoria(){}
var nome = prompt('Digite seu nome e veja sua aposentadoria')
    alert(`${nome} Continue para ver mais sobre sua aposentadoria...`)
var sexo = prompt('Digite seu sexo: (M) (F)')
    prompt('Voce é do sexo, ' + sexo)
var idade = prompt('Digite a sua idade')
    prompt('Sua idade é: ' + idade)
var anoscontr = prompt('Quantos anos voce cotribui, ')

    if (anoscontr >= 35 ){
        prompt('Sua idade e legal para receber a aposentadoria')
    }else{
        prompt('Sua idade nao coresponde aos anos minimos de trabalho')
    }







}




