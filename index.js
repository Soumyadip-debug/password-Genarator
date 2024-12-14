const inputValue = document.querySelector('#inputvalue');
const creatbutton = document.querySelector('#Genarator');

const capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const small = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const specal = "!@#$%^&*()_+-={}[]|:;<>?/";

const all = capital + small + number;
let length = 8;

function creat() {
    let password = "";
    password += capital[Math.floor(Math.random() * capital.length)];
    password += small[Math.floor(Math.random() * small.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += specal[Math.floor(Math.random() * specal.length)];

 

    while (length >= password.length) {
        password += all[Math.floor(Math.random() * all.length)];
    }

    inputValue.value = password;
}

creatbutton.addEventListener('click', creat);


//this use to copy the password but I donot add this
// function copyPassword(){
//     inputValue.select();
//     document.execCommand("copy");
// }


