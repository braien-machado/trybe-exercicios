let a = 10;
let b = 5;
let c = 12;

if ( a > b ) {
  if ( a > c ) {
    console.log('O maior número é ' + a );
  }
  else {
    console.log('O maior número é ' + c );
  }
}
else if ( b > c ) {
  console.log('O maior número é ' + b );
}
else if ( c > a) {
  console.log('O maior número é ' + c );
}
else {
  console.log('Os números são iguais. a = b = c = ' + a );
}