function jogar() {
  rodada = 1;
  while (rodada <= 3) {
    escolhaJogador = prompt(
      "Rodada " + rodada + ", escolha um vidro. (1 ao 3): "
    );
    pisoQuebrado = Math.floor(Math.random() * 3) + 1;

    if (escolhaJogador == pisoQuebrado) {
      alert("Perdeu! Você escolheu o piso quebrado e caiu!");
      rodada = 1000;
    } else if (escolhaJogador != pisoQuebrado) {
      alert(
        "Você passou para a próxima fase! O piso quebrado estava na posição " +
          pisoQuebrado
      );
    } 
    rodada = rodada + 1;
  }
  if (rodada == 4) {
    alert("Parabéns! Você chegou ao final!");
  }
}
