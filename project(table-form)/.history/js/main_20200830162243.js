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
    let data = []
    let count = 0;
    function listStudents (list,item) {
        const name = document.querySelector('.form__input--name').value
        const email = document.querySelector('.form__input--email').value
        const phone = document.querySelector('.form__input--phone').value
        const address = document.querySelector('.form__input--address').value
        const date = document.querySelector('.form__input--date').value
        let gender = document.querySelector('input[name = gender]:checked')
                gender = gender ? gender.value : '';
        let student = {
            'name': name,
            'gender': gender,
            'email': email,
            'phone': phone,
            'address': address,
            'date': date,
        }
        // data.push(student)
        // console.log(data)

        // saveLocalStorage('students', student)
        if(!name) {
            document.querySelector('.error-name').innerHTML='<font color="red"> *Vui lòng điền: Họ và Tên</font>'
        } else {
            document.querySelector('.error-name').innerHTML=''
        }
        if(!email) {
            document.querySelector('.error-email').innerHTML='<font color="red"> *Vui lòng điền: Email</font>'
        } else {
            document.querySelector('.error-email').innerHTML=''
        }
        if(!phone) {
            document.querySelector('.error-phone').innerHTML='<font color="red"> *Vui lòng điền: Số điện thoại</font>'
            document.querySelector('.error-phone').style.display= block
        } else {
            document.querySelector('.error-phone').innerHTML=''
            // document.querySelector('.error-phone').style.display= none

        }
        if(!address) {
            document.querySelector('.error-address').innerHTML='<font color="red"> *Vui lòng điền: Address</font>'
        } else {
            document.querySelector('.error-address').innerHTML=''
        }
        if(!date) {
            document.querySelector('.error-date').innerHTML='<font color="red"> *Vui lòng chọn: Ngày/Tháng/Năm</font>'
        } else {
            document.querySelector('.error-date').innerHTML=''
        }
        if(!gender) {
            document.querySelector('.error-gender').innerHTML='<font color="red"> *Vui lòng chọn: Giới tính</font>'
        } else {
            document.querySelector('.error-gender').innerHTML=''
        }

        let listStudent = localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')) : []
        listStudent.push(student)
        localStorage.setItem('students',JSON.stringify(listStudent))
        render()
    }
    // const render = () => {
    //     event.preventDefault()
    //     html = ''
    //     const addTable = document.getElementById('list-student')
    //     data.forEach((i,index)=> {
    //         html += `
    //                 <tr>
    //                     <td>${index}</td>
    //                     <td>${i.name}</td>
    //                     <td>${i.gender}</td>
    //                     <td>${i.email}</td>
    //                     <td>${i.phone}</td>
    //                     <td>${i.address}</td>
    //                     <td>${i.date}</td>
    //                     <td>
    //                         <a href="">edit</a>/<a href="" onclick="deleteStudent('${i}')">delete</a>
    //                     </td>
    //                 </tr
    //             `
    //     })
    //     addTable.innerHTML = html
    // }
    // const deleteStudent = (index) => {
    //     data.splice(index,1)
    //     render()
    //     let json = JSON.stringify(data)
    //     localStorage.setItem('students',json)
    // }
    // function saveLocalStorage (list,item) {
    //     let templist
    //     if(localStorage.getItem(list) === null) {
    //         templist = []
    //     }else {
    //         templist = JSON.parse(localStorage.getItem(list))
    //     }
    //     templist.push(item)
    //     localStorage.setItem(list,JSON.stringify(templist))
    // }
    // function init() {
    //     let templist
    //     if(localStorage.getItem('students') === null) {
    //         templist = []
    //     }else {
    //         templist = JSON.parse(localStorage.getItem('students'))
    //     }
    //     templist.forEach( (index,item) => {
    //         listStudents(index)
    //     })
        // let json = localStorage.getItem('students')
        // data = JSON.parse(json)
        // render()
        // console.log(data)
    // }
    // console.log(data)
    // function errorForm () {
    //     // if(!gender) {
    //     //     document.getElementsByClassName('error-name').innerHTML='<font color="f00"> Vui lòng điền: Họ và Tên</font>'
    //     // } else {
    //     //     document.getElementsByClassName('error-name').innerHTML=''
    //     // }
    // }
    function render() {
        event.preventDefault()
        let listStudent = localStorage.getItem('students') ?JSON.parse(localStorage.getItem('students')):[]
        html = ''
        const addTable = document.getElementById('list-student')
        listStudent.forEach((i,index)=> {
            html += `
                    <tr>
                        <td>${index}</td>
                        <td>${i.name}</td>
                        <td>${i.gender}</td>
                        <td>${i.email}</td>
                        <td>${i.phone}</td>
                        <td>${i.address}</td>
                        <td>${i.date}</td>
                        <td>
                            <a href="">edit</a>/<a href="" onclick="deleteStudent('${i}')">delete</a>
                        </td>
                    </tr
                `
        })
        addTable.innerHTML = html
    }