let pecaXadrez = 'Rei';

switch ( pecaXadrez.toLowerCase() ) {
  case 'rei':
    console.log('Rei -> Se movimenta para qualquer lado ou direção, todavia somente de casa em casa.');
    break;
  case 'rainha':
    console.log('Rainha -> Pode se movimentar para qualquer lado e direção.');
    break;
  case 'torre':
    console.log('Torre -> Se movimentam em linha reta ou para os lados, por todas as casas.');
    break;
  case 'bispo':
    console.log('Bispo -> Se movimenta somente na diagonal por todo o tabuleiro.');
    break;
  case 'cavalo':
    console.log('Cavalo -> Se movimenta em L.');
    break;
  case 'peão':
    console.log('Peão -> Só podem se mover uma casa ou duas casas para frente (durante a primeira jogada), e também podem matar na diagonal peças do time adversário.');
    break;
  default:
    console.log('Nome inválido')
}