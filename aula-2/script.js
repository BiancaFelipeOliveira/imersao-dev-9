function verificacaoIdade() {
  const idade = parseInt(document.getElementById("valorInput").value);

  if (idade < 18) {
    document.getElementById("resultado").innerHTML =
      "Você não tem idade suficiente para jogar. <br>Idade mínima 18 anos";
  } else if (idade >= 18) {
    escolhaJogador = prompt("Digite 1-Pedra, 2-Papel ou 3-Tesoura");
    escolhaComputador = Math.floor(Math.random() * 3) + 1;

    if (escolhaJogador == escolhaComputador) {
      document.getElementById("ganhador").innerHTML = "Empatou!";
    }

    if (escolhaJogador == 1) {
      if (escolhaComputador == 2) {
        document.getElementById("ganhador").innerHTML =
          "Você perdeu! A escolha do computador foi Papel.";
      } else if (escolhaComputador == 3) {
        document.getElementById("ganhador").innerHTML =
          "Você ganhou! A escolha do computador foi Tesoura.";
      } else {
        document.getElementById("ganhador").innerHTML = "Erro";
      }
    } else if (escolhaJogador == 2) {
      if (escolhaComputador == 1) {
        document.getElementById("ganhador").innerHTML =
          "Você ganhou! A escolha do computador foi Pedra.";
      } else if (escolhaComputador == 3) {
        document.getElementById("ganhador").innerHTML =
          "Você perdeu! A escolha do computador foi Tesoura.";
      } else {
        document.getElementById("ganhador").innerHTML = "Erro";
      }
    } else if (escolhaJogador == 3) {
      if (escolhaComputador == 1) {
        document.getElementById("ganhador").innerHTML =
          "Você perdeu! A escolha do computador foi Pedra.";
      } else if (escolhaComputador == 2) {
        document.getElementById("ganhador").innerHTML =
          "Você ganhou! A escolha do computador foi Papel.";
      } else {
        document.getElementById("ganhador").innerHTML = "Erro";
      }
    } else {
      document.getElementById("ganhador").innerHTML =
        "Valor digitado é inválido!";
    }
  } else {
    document.getElementById("resultado").innerHTML =
      "O valor digitado é inválido. Tente Novamente";
  }
}

/*

    Jogador Tesoura, Computador Papel -> Jogador vence!
    Jogador Tesoura, Computador Pedra -> Computador vence!

*/
