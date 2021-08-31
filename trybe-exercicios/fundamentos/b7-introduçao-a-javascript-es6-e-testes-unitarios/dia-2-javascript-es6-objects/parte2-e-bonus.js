const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1. Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

function newKey(object, key, value) {
  object[key] = value;
}

newKey(lesson2, 'turno', 'manhã');
console.log(lesson2);

// 2. Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

function keysList(object) {
  const list = Object.keys(object);
  console.log(list);
}

keysList(lesson3);

// 3. Crie uma função para mostrar o tamanho de um objeto.

const objectLength = (object) => Object.keys(object).length;
console.log(objectLength(lesson1));

// 4. Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const valuesList = (obj) => Object.values(obj);
console.log(valuesList(lesson2));

// 5. Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:
/**
console.log(allLessons);
{
  lesson1:
   { materia: 'Matemática',
     numeroEstudantes: 20,
     professor: 'Maria Clara',
     turno: 'manhã' },
  lesson2:
   { materia: 'História',
     numeroEstudantes: 20,
     professor: 'Carlos',
     turno: 'noite' },
  lesson3:
   { materia: 'Matemática',
     numeroEstudantes: 10,
     professor: 'Maria Clara',
     turno: 'noite' }
};
*/

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);

// 6. Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

const studentsNumber = () => {
  let number = 0;
  const keys = Object.keys(allLessons);
  for (let i = 0; i < keys.length; i += 1) {
    number += allLessons[keys[i]].numeroEstudantes; 
  }
  return number;
}
console.log(studentsNumber());

// 7. Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:
// console.log(getValueByNumber(lesson1, 0));
// Output: 'Matématica'

function getValueByNumber(obj, keyIndex) {
  const keyList = Object.keys(obj);
  const value = obj[keyList[keyIndex]];
  return value;
}

console.log(getValueByNumber(lesson2, 2));

// 8. Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:
/**
console.log(verifyPair(lesson3, 'turno', 'noite'));
Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
Output: false
*/

function verifyPair(obj, key, value) {
  for (const i in obj) {
    if (i === key && obj[i] === value) {
      return true;
    }
  }
  return false;
}

console.log(verifyPair(lesson3, 'numeroEstudantes', 10));

// Bônus
// 1. Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.

function subjectStudents(subject) {
  let numberStudents = 0;
  for (const i in allLessons) {
    const lessonObj = allLessons[i];
    if (verifyPair(lessonObj, 'materia', subject)) {
      numberStudents += lessonObj.numeroEstudantes;
    }
  }
  return numberStudents;
}

console.log(subjectStudents('Matemática'));

// 2. Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:
/*
  console.log(createReport(allLessons, 'Maria Clara'))
  {
  professor: 'Maria Clara',
  aulas: [ 'Matemática', 'Matemática' ],
  estudantes: 30
  }
*/