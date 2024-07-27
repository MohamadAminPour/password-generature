let counterUpNumber = document.querySelectorAll('.counterUp-number')
let generateBtn = document.querySelector('.generateBtn');
let Password_box__input = document.querySelector('.Password-box__input');
let Password_box__icon = document.querySelector('.Password-box__icon');
let Password_level = document.querySelector('.Password-level');
let Password_length = document.querySelector('.Password-length');
let copied = document.querySelector('.copied')


let lengthInput = 12

let UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lowerCase = "abcdefghijklmnopqrstuvwxyz"
let num = "0123456789"
let symbol = "()[]{}<>/&^|@#$%"


generateBtn.addEventListener('click', () => {
    if (Password_length.value === 'Length') {
        lengthInput = 0
        Password_box__input.value = '';
        Password_length.classList.add('active');

        setTimeout(() => {
            Password_length.classList.remove('active');
        }, 800);
    }
    else if (Password_length.value === '8') {
        lengthInput = 8
        CreatePassword()
    }
    else if (Password_length.value === '12') {
        lengthInput = 12
        CreatePassword()
    }
    else if (Password_length.value === '16') {
        lengthInput = 16
        CreatePassword()
    }

    function CreatePassword() {
        let allChars = UpperCase + lowerCase + num + symbol;
        let password = '';

        password += UpperCase[Math.floor(Math.random() * UpperCase.length)];
        password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
        password += num[Math.floor(Math.random() * num.length)];
        password += symbol[Math.floor(Math.random() * symbol.length)];

        while (password.length < lengthInput) {
            password += allChars[Math.floor(Math.random() * allChars.length)];
        }

        Password_box__input.value = password;
    }
})


generateBtn.addEventListener('click', () => {
    if (Password_level.value === 'Level') {
        allChars = ''
        Password_box__input.value = '';
        Password_level.classList.add('active');

        setTimeout(() => {
            Password_level.classList.remove('active');
        }, 800);
    }
    else if (Password_level.value === 'Easy') {
        Easy();
    }
    else if (Password_level.value === 'Medium') {
        Medium();
    }
    else if (Password_level.value === 'Hard') {
        Hard();
    }
    else if (Password_level.value === 'Difficult') {
        Difficult();
    }
})

function Easy() {
    let allChars = UpperCase;
    let password = '';

    password += UpperCase[Math.floor(Math.random() * UpperCase.length)];

    while (password.length < lengthInput) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    Password_box__input.value = password;
}


function Medium() {
    let allChars = UpperCase + lowerCase;
    let password = '';

    password += UpperCase[Math.floor(Math.random() * UpperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];

    while (password.length < lengthInput) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    Password_box__input.value = password;
}


function Hard() {
    let allChars = UpperCase + lowerCase + num;
    let password = '';

    password += UpperCase[Math.floor(Math.random() * UpperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += num[Math.floor(Math.random() * num.length)];

    while (password.length < lengthInput) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    Password_box__input.value = password;
}

function Difficult() {
    let allChars = UpperCase + lowerCase + num + symbol;
    let password = '';

    password += UpperCase[Math.floor(Math.random() * UpperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += num[Math.floor(Math.random() * num.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while (password.length < lengthInput) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    Password_box__input.value = password;
}


Password_box__icon.addEventListener('click', () => {
    Password_box__input.select();
    document.execCommand("copy")

    copied.style.display = 'block'

    setTimeout(() => {
        copied.style.display = 'none'
    }, 1000);
})

