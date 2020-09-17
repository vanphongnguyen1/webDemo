"use strict";

//  <div class="box__list">
//     <li class="box__list--text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque temporibus earum numquam quibusdam laborum! Architecto, nam, labore nisi illo mollitia rem asperiores deserunt sint, accusantium et impedit quos reiciendis dolores?</li>
//     <button class="btn btn--check" type="submit"><i class="fal fa-calendar-check "></i></button>
//     <button class=" btn btn--delete" type="submit"><i class="fal fa-calendar-times"></i></button>
// </div>
var aplay = document.querySelector('.aplay-todo__item-input');
var btnPlus = document.querySelector('.btn--plus');
var todolist = document.querySelector('.box__item ul');
var donelist = document.querySelector('.done-box__item ul');
var clear = document.querySelector('.btn--clear-todo');

function createItem(list, item) {
  // console.log('aa')
  //tạo nội dung với 1 thẻ li và 2 nút button
  var todoItemLi = document.createElement('li');
  var todoItemCheck = document.createElement('button');
  var todoItemDelete = document.createElement('button'); //add content cho li

  todoItemLi.classList.add('box__list--text');
  todoItemLi.innerText = item; //add class cho button

  todoItemCheck.classList.add('btn--check');
  todoItemCheck.classList.add('btn');
  todoItemCheck.innerHTML = '<i class="fal fa-calendar-check "></i>';
  todoItemDelete.classList.add('btn--delete');
  todoItemDelete.classList.add('btn');
  todoItemDelete.innerHTML = '<i class="fal fa-calendar-times"></i>'; //

  var todoBoxList = document.createElement('div');
  todoBoxList.classList.add('box__list'); ///

  if (list == 'donelist') {
    donelist.appendChild(todoBoxList);
    todoBoxList.classList.add('done');
  } else {
    todolist.appendChild(todoBoxList);
  } // thêm li và button vào div


  todoBoxList.appendChild(todoItemLi);
  todoBoxList.appendChild(todoItemCheck);
  todoBoxList.appendChild(todoItemDelete);
} // event sự kiện


btnPlus.addEventListener('click', addWord);
clear.addEventListener('click', function () {
  localStorage.clear();
  location.reload();
});
todolist.addEventListener('click', action);
donelist.addEventListener('click', action);
document.addEventListener('DOMContentLoaded', loadtodolist); //

function addWord() {
  // console.lozg('ss')
  event.preventDefault(); // thêm vào để nhận được việc đó trang k reset  lại

  if (aplay.value == '') return;
  createItem('todolist', aplay.value);
  save('todolist', aplay.value);
  aplay.value = ''; // xóa các text in input khi đã add
} // xong add thì mk cần lưu n lại


function save(list, item) {
  var templist;

  if (localStorage.getItem(list) === null) {
    templist = [];
  } else {
    templist = JSON.parse(localStorage.getItem(list));
  }

  templist.push(item);
  localStorage.setItem(list, JSON.stringify(templist));
}

function del(list, item) {
  var templist;

  if (localStorage.getItem(list) === null) {
    templist = [];
  } else {
    templist = JSON.parse(localStorage.getItem(list));
  }

  var index = templist.indexOf(item);

  if (index > -1) {
    templist.splice(index, 1);
  }

  localStorage.setItem(list, JSON.stringify(templist));
} // tiếp theo mình làm bắt phím tích và dele


function action(e) {
  //cả hai list đều xài chung 1 function
  var item = e.target.parentElement;
  var value = item.querySelector('li');
  console.log(e.target.classList[0]); // ở đây mk bắt xem n click vào nút
  // consolo.log(e.target.classList[0])

  if (e.target.classList[0] === 'btn--check') {
    // khi đã check thì thêm class done để n thành item bên done list
    item.classList.add('done');
    del('todolist', value.innerText);
    save('donelist', value.innerText); // xóa bên todo và n chuyển sang done-list

    item.style.opacity = '0';
    item.style.transform = 'translateX(100%)';
    item.addEventListener('transitionend', function () {
      donelist.appendChild(item); // sau khi hết hiệu ứng mk add item qua bên done-list

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
    } // vì sao n lại vậy ? vì ,mình có 2 list phân biệt với nhau bằng class done
    // done list thì sẽ có thêm class done nhé
    // thì mình sẽ dùng hàn del và xóa nó đúng với cái list của nó


    item.addEventListener('transitionend', function () {
      item.remove();
    }); // sau khi đợi hết hiệu ứng mk mới  remove 
  }
}

function loadtodolist() {
  var loadtodo;

  if (localStorage.getItem('todolist') === null) {
    loadtodo = [];
  } else {
    loadtodo = JSON.parse(localStorage.getItem('todolist'));
  }

  loadtodo.forEach(function (item) {
    createItem('todolist', item);
  }); // mk chỉ việc lấy storage ra như save và del nhưng với mỗi ptu trong array mk tao n thành 1 cái todo-item

  var loadDoneList;

  if (localStorage.getItem('donelist') === null) {
    loadDoneList = [];
  } else {
    loadDoneList = JSON.parse(localStorage.getItem('donelist'));
  }

  loadDoneList.forEach(function (item) {
    createItem('donelist', item);
  });
}