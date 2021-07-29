let nota = 91;

if ( nota < 0 || nota > 100) {
  console.log('Erro: nota inválida')
}
else if ( nota < 50 ) {
  console.log('A nota é F');
}
else if ( nota < 60 ) {
  console.log('A nota é E');
}
else if ( nota < 70 ) {
  console.log('A nota é D');
}
else if ( nota < 80 ) {
  console.log('A nota é C');
}
else if ( nota < 90 ) {
  console.log('A nota é B');
}
else {
  console.log('A nota é A');
}