function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
function createDays(){
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9,   10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const fridays = [4, 11, 18, 25];
  const holidays = [24, 25, 31];
  let days = document.querySelector('#days');

  for (let i = 0; i < dezDaysList.length; i += 1) {
    let day = document.createElement('li');
    day.innerHTML = dezDaysList[i];
    day.classList.add('day');
    
    for (let number of fridays) {
      if (dezDaysList[i] === number){
        day.classList.add('friday');
      }
    }
    for (let number of holidays) {
      if (dezDaysList[i] === number){
        day.classList.add('holiday');
      }
    }
    days.appendChild(day);
  }
}

createDays();

function createHolidaysButton(string) {
  let holidayButton = document.createElement('button');
  holidayButton.id = 'btn-holiday';
  holidayButton.innerHTML = string;
  document.querySelector('div.buttons-container').appendChild(holidayButton);
}

createHolidaysButton('Feriados');

function changeBGColorHolidays() {
  let holidays = document.getElementsByClassName('holiday');
  for (let i = 0; i < holidays.length; i += 1) {
    let day = holidays[i];
    if (day.style.backgroundColor === '') {
    day.style.backgroundColor = 'orange';
    } else {
      day.style.backgroundColor = '';
    }

  }
}

document.getElementById('btn-holiday').addEventListener('click', changeBGColorHolidays);

function createFridayButton(string) {
  let fridayButton = document.createElement('button');
  fridayButton.id = 'btn-friday';
  fridayButton.innerHTML = string;
  document.querySelector('div.buttons-container').appendChild(fridayButton);
}

createFridayButton('Sexta-feira');

document.getElementById('btn-friday').addEventListener('click', changeTextFridays);

function changeTextFridays() {
  let fridays = document.getElementsByClassName('friday');
  let daysFridays = [4, 11, 18, 25];
  for (let i = 0; i < fridays.length; i += 1) {
    let fridayDay = fridays[i];
    if (fridayDay.innerHTML !== 'Sexta-feira') {
      fridayDay.innerHTML = 'Sexta-feira'
    } else {
      fridayDay.innerHTML = daysFridays[i];
    }
  }
}

let daysArray = document.getElementById('days').children
const daysFontSize = daysArray[0].style.fontSize;

function zoomInDay(event) {
  event.target.style.fontSize = '2.5em';
}

function zoomOutDay(event) {
  event.target.style.fontSize = daysFontSize;
}

for (let i = 0; i < daysArray.length; i += 1) {
  daysArray[i].addEventListener('mouseover', zoomInDay);
  daysArray[i].addEventListener('mouseleave', zoomOutDay);
}

function createTask(string) {
  let task = document.createElement('span');
  task.innerHTML = string;
  document.querySelector('div.my-tasks').appendChild(task);
}

createTask('Cozinhar');

function createColorCaption(colorName) {
  let colorCaption = document.createElement('div');
  colorCaption.className = 'task';
  colorCaption.style.backgroundColor = colorName;
  document.querySelector('div.my-tasks').appendChild(colorCaption);
}

createColorCaption('orange');

function taskSelect(event) {
  if (event.target.className === 'task') {
    event.target.classList.add('selected');
  } else {
    event.target.className = 'task';
  }
}

let tasks = document.querySelectorAll('.task');
for (let i = 0; i < tasks.length; i += 1) {
  tasks[i].addEventListener('click', taskSelect);
}

// function changeColorToSelected(event) {
//   let change = event.target.style.color
//   let color = document.querySelector('.selected').style.backgroundColor;
//   if (change === '') {
//     change = color;
//   } else {
//     change = '';
//   }
// }

// for (let i = 0; i < daysArray.length; i += 1) { 
//   daysArray[i].addEventListener('click', changeColorToSelected);
// }