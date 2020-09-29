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
    function listStudents () {
        event.preventDefault()
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
        data.push(student)
        console.log(data)
        render()
        saveLocalStorage('students', student)
    }
    const render = () => {
        const addTable = document.getElementById('list-student')
        for( let i in data) {
            if(data.hasOwnProperty(i)) {
                addTable.innerHTML += `
                    <tr>
                        <td>${count ++}</td>
                        <td>${student.name}</td>
                        <td>${student.gender}</td>
                        <td>${student.email}</td>
                        <td>${student.phone}</td>
                        <td>${student.address}</td>
                        <td>${student.date}</td>
                        <td>
                            <a href="">edit</a>/<a href="">delete</a>
                        </td>
                    </tr
                `
            }
        }
    }
    function saveLocalStorage (list,item) {
        let templist
        if(localStorage.getItem(list) === null) {
            templist = []
        }else {
            templist = JSON.parse(localStorage.getItem(list))
        }
        templist.push(item)
        localStorage.setItem(list,JSON.stringify(templist))
    }