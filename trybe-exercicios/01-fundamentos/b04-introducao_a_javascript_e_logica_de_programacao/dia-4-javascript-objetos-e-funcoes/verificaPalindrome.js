function verificaPalindrome(word) {
  let arrayReverse = word.split('').reverse().join('');

  if (arrayReverse === word) {
    return true;
  } else {
    return false;
  }
}

console.log(verificaPalindrome('desenvolvimento'));