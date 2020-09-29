"use strict";

// <!-- <tr>
//     <td>1</td>
//     <td>phong</td>
//     <td>male</td>
//     <td>maoa@gmai.com</td>
//     <td>154653132</td>
//     <td>asdasasdad</td>
//     <td>2020-08-21</td>
//     <td><a href="">edit</a>/<a href="">delete</a></td>
// </tr>
function listStudents() {
  var name = document.querySelector('.form__input--name').value;
  var email = document.querySelector('.form__input--email').value;
  var phone = document.querySelector('.form__input--phone').value;
  var address = document.querySelector('.form__input--address').value;
  var date = document.querySelector('.form__input--date').value;
  var gender = document.querySelector('input[name = gender]:checked');
  gender = gender ? gender.value : ''; //lơi lưu thông tin của sinh viên

  var student = {
    'name': name,
    'gender': gender,
    'email': email,
    'phone': phone,
    'address': address,
    'date': date
  }; // điều kiện k được để trắng thông in các ô,phải điền đầy đủ

  if (!name) {
    document.querySelector('.error-name').innerHTML = '<font color="red"> *Vui lòng điền: Họ và Tên</font>';
    document.querySelector('.error-name').style.display = 'block';
  } else {
    document.querySelector('.error-name').innerHTML = '';
  }

  if (!email) {
    document.querySelector('.error-email').innerHTML = '<font color="red"> *Vui lòng điền: Email</font>';
    document.querySelector('.error-email').style.display = 'block';
  } else {
    document.querySelector('.error-email').innerHTML = '';
  }

  if (!phone) {
    document.querySelector('.error-phone').innerHTML = '<font color="red"> *Vui lòng điền: Số điện thoại</font>';
    document.querySelector('.error-phone').style.display = 'block';
  } else {
    document.querySelector('.error-phone').innerHTML = '';
  }

  if (!address) {
    document.querySelector('.error-address').innerHTML = '<font color="red"> *Vui lòng điền: Address</font>';
    document.querySelector('.error-address').style.display = 'block';
  } else {
    document.querySelector('.error-address').innerHTML = '';
  }

  if (!date) {
    document.querySelector('.error-date').innerHTML = '<font color="red"> *Vui lòng chọn: Ngày/Tháng/Năm</font>';
    document.querySelector('.error-date').style.display = 'block';
  } else {
    document.querySelector('.error-date').innerHTML = '';
  }

  if (!gender) {
    document.querySelector('.error-gender').innerHTML = '<font color="red"> *Vui lòng chọn: Giới tính</font>';
    document.querySelector('.error-gender').style.display = 'block';
  } else {
    document.querySelector('.error-gender').innerHTML = '';
  } // lưu thông tin sinh viên vào localStorage


  if (name && email && phone && address && date && gender) {
    var listStudent = localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')) : [];
    listStudent.push(student);
    localStorage.setItem('students', JSON.stringify(listStudent));
  }

  resetForm();
  render();
}

function resetForm() {
  if (document.querySelector('.male').checked) {
    document.querySelector('.male').checked = false;
  }

  if (document.querySelector('.female').checked) {
    document.querySelector('.female').checked = false;
  }

  document.querySelector('.form__input--name').value = '';
  document.querySelector('.form__input--email').value = '';
  document.querySelector('.form__input--phone').value = '';
  document.querySelector('.form__input--address').value = '';
  document.querySelector('.form__input--date').value = '';
}

function render() {
  // hàm in sinh viên vào table
  // event.preventDefault()
  var listStudent = localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')) : [];
  html = '';
  var addTable = document.getElementById('list-student');
  listStudent.forEach(function (i, index) {
    html += "\n                    <tr>\n                        <td>".concat(index, "</td>\n                        <td>").concat(i.name, "</td>\n                        <td>").concat(i.gender, "</td>\n                        <td>").concat(i.email, "</td>\n                        <td>").concat(i.phone, "</td>\n                        <td>").concat(i.address, "</td>\n                        <td>").concat(i.date, "</td>\n                        <td>\n                            <a href=\"#\" onclick=\"editStudent('").concat(index, "')\">edit</a>/<a href=\"\" onclick=\"deleteStudent('").concat(index, "')\">delete</a>\n                        </td>\n                    </tr\n                ");
  });
  addTable.innerHTML = html;
} // hàm xóa sinh viên


function deleteStudent(index) {
  var listStudent = localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')) : [];

  if (confirm('Bạn có muốn xóa student')) {
    listStudent.splice(index, 1);
  }

  localStorage.setItem('students', JSON.stringify(listStudent));
  render();
}

function editStudent(index) {
  var listStudent = localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')) : [];
  document.querySelector('.form__input--name').value = listStudent[index].name;
  document.querySelector('.form__input--email').value = listStudent[index].email;
  document.querySelector('.form__input--phone').value = listStudent[index].phone;
  document.querySelector('.form__input--address').value = listStudent[index].address;
  document.querySelector('.form__input--date').value = listStudent[index].date;
  document.querySelector('.index').value = index; //lấy ra stt
  // let gender = document.querySelector('input[name = gender]:checked')
  //         gender = gender ? gender.value : '';
  /// chuyển thông tin về form
  // render()

  if (document.querySelector('.male').value === listStudent[index].gender) {
    document.querySelector('.male').checked = true;
  }

  if (document.querySelector('.female').value === listStudent[index].gender) {
    document.querySelector('.female').checked = true;
  }

  document.querySelector('.update').style.display = 'block';
  document.querySelector('.save').style.display = 'none';
}

function updataStudent() {
  // event.preventDefault()
  // gọi dât trong localStorage
  var listStudent = localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')) : [];
  key = document.querySelector('.index').value; // lấy được stt từ đó lưu lại nội dung của stt đó
  // lưu thông tin thay đổi

  listStudent[key] = {
    name: document.querySelector('.form__input--name').value,
    email: document.querySelector('.form__input--email').value,
    phone: document.querySelector('.form__input--phone').value,
    address: document.querySelector('.form__input--address').value,
    date: document.querySelector('.form__input--date').value,
    gender: document.querySelector('input[name = gender]:checked').value
  };
  localStorage.setItem('students', JSON.stringify(listStudent)); // lưu data vào trong localStorage

  document.querySelector('.update').style.display = 'none';
  document.querySelector('.save').style.display = 'block';
  resetForm();
  render();
}