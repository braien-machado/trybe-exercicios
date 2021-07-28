let peca = 'Pawns';

switch ( peca.toLowerCase() ) {
  case 'king':
    console.log('Moves one square in any direction, so long as that square is not attacked by an enemy piece. Additionally, kings are able to make a special move, known as castling.');
    break;
  case 'queen':
    console.log('Moves diagonally, horizontally, or vertically any number of squares. They are unable to jump over pieces.');
    break;
  case 'rook':
    console.log('Moves horizontally or vertically any number of squares. They are unable to jump over pieces.');
    break;
  case 'bishop':
    console.log('Moves diagonally any number of squares. They are unable to jump over pieces.');
    break;
  case 'knight':
    console.log('Moves in an ‘L’ shape’: two squares in a horizontal or vertical direction, then move one square horizontally or vertically. They are the only piece able to jump over other pieces.');
    break;
  case 'pawn':
    console.log('Moves vertically forward one square, with the option to move two squares if they have not yet moved.');
    break;
  default:
    console.log('Nome inválido')
}