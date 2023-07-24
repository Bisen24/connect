const LoginDetail = {
    username: 'sandeep',
    password: 'bisen'
}

let username = document.getElementById("username");
let password = document.getElementById("password");
let LoginBtn = document.getElementById("LoginBtn");



LoginBtn.addEventListener('click', function (e) {
    e.preventDefault();

    if (username.value === LoginDetail.username && password.value === LoginDetail.password) {
        alert("Login Succesfully");
        location.href = "./orders1.html";
    }
    else {
        alert("Username & Password Both Are Incorrect!");
    }



})



