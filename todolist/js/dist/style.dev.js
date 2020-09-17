"use strict";

// <!-- <div class="box__list">
// <p class="box__list--text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque temporibus earum numquam quibusdam laborum! Architecto, nam, labore nisi illo mollitia rem asperiores deserunt sint, accusantium et impedit quos reiciendis dolores?</p>
// <button class="btn btn--check"><i class="fal fa-calendar-check "></i></button>
// <button class=" btn btn--delete"><i class="fal fa-calendar-times"></i></button>
// </div> -->
var pushInput = document.querySelector('.aplay-todo__item-input');
var btnPlus = document.querySelector('.btn--plus');
var todolist = document.querySelector('.box__item ul');
var donelist = document.querySelector('.done-box__item ul');
var clear = document.querySelector('.btn--clear-todo');

function createInput(list, item) {
  var todoli = document.createElement('p');
  var btnCheck = document.createElement('button');
  var btnDelete = document.createElement('button'); /// thêm class vào các thẻ

  todoli.classList.add('box__list--text');
  todoli.innerText = item;
  btnCheck.classList.add('btn--check');
  btnCheck.classList.add('btn');
  btnCheck.innerHTML = '<i class="fal fa-calendar-check "></i>';
  btnDelete.classList.add('btn--delete');
  btnDelete.classList.add('btn');
  btnDelete.innerHTML = '<i class="fal fa-calendar-times"></i>'; /// tạo thẻ bao bên ngoài

  var todoBoxList = document.createElement('div');
  todoBoxList.classList.add('box__list'); ///

  if (list == 'donelist') {
    donelist.appendChild(todoBoxList);
    todoBoxList.classList.add('done');
  } else {
    todolist.appendChild(todoBoxList);
  } // thêm li và button vào div


  todoBoxList.appendChild(todoli);
  todoBoxList.appendChild(btnCheck);
  todoBoxList.appendChild(btnDelete);
} // createInput('donelist','bbbb')
// createInput('todolist','aa')
// tạo sự kiện


btnPlus.addEventListener('click', addword);
clear.addEventListener('click', function () {
  localStorage.clear();
  location.reload();
});
todolist.addEventListener('click', action);
donelist.addEventListener('click', action);
document.addEventListener('DOMContentLoaded', loadtodolist); // thêm công việc bằng input

function addword() {
  event.preventDefault(); // reset text input

  if (pushInput.value == '') return;
  createInput('todolist', pushInput.value);
  save('todolist', pushInput.value);
  pushInput.value = ''; // xóa text input khi đã push
} // lưu data vào localStorage


function save(list, item) {
  var tempList;

  if (localStorage.getItem(list) === null) {
    tempList = [];
  } else {
    tempList = JSON.parse(localStorage.getItem(list));
  }

  tempList.push(item);
  localStorage.setItem(list, JSON.stringify(tempList));
}

function del(list, item) {
  var tempList;

  if (localStorage.getItem(list) === null) {
    tempList = [];
  } else {
    tempList = JSON.parse(localStorage.getItem(list));
  }

  var index = tempList.indexOf(item);

  if (index > -1) {
    tempList.splice(index, 1);
  }

  localStorage.setItem(list, JSON.stringify(tempList));
} // tiếp làm bắt sự kiện nút check và delete


function action(e) {
  var item = e.target.parentNode;
  var value = item.querySelector('p');
  console.log(e.target.classList[0]);

  if (e.target.classList[0] === 'btn--check') {
    // khi click check thì được thêm class done
    item.classList.add('done');
    del('todolist', value.innerText);
    save('donelist', value.innerText);
    item.style.opacity = '0';
    item.style.transform = 'translateX(100%)';
    item.addEventListener('transitionend', function () {
      donelist.appendChild(item);
      item.style.opacity = '1';
      item.style.transform = 'translateX(0)';
    });
  } else if (e.target.classList[0] === 'btn--delete') {
    item.style.opacity = '0';
    item.style.transform = 'scale(0.5)';

    if (item.classList.contains('done')) {
      del('donelist', value.innerText);
    } else {
      del('todolist', value.innerText);
    }

    item.addEventListener('transitionend', function () {
      item.remove();
    });
  }
}

function loadtodolist() {
  var loadTodo;

  if (localStorage.getItem('todolist') === null) {
    loadTodo = [];
  } else {
    loadTodo = JSON.parse(localStorage.getItem('todolist'));
  }

  loadTodo.forEach(function (item) {
    createInput('todolist', item);
  });
  var loadDone;

  if (localStorage.getItem('donelist') === null) {
    loadDone = [];
  } else {
    loadDone = JSON.parse(localStorage.getItem('donelist'));
  }

  loadDone.forEach(function (item) {
    createInput('donelist', item);
  });
}