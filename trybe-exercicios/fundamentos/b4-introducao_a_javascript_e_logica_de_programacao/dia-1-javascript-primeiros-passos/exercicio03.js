let numero1 = 1;
let numero2 = 2;
let numero3 = 3;

if ( numero1 > numero2 ) {
  if ( numero1 > numero3 ) {
    console.log('O maior número é ' + numero1 );
  }
  else {
    console.log('O maior número é ' + numero3 );
  }
}
else if ( numero2 > numero3 ) {
  console.log('O maior número é ' + numero2 );
}
else if ( numero3 > numero1) {
  console.log('O maior número é ' + numero3 );
}
else {
  console.log('Os números são iguais');
}