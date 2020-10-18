/**
 *
 * @type {NodeListOf<Element>}
 * переключение между табами
 */
const buttons = document.querySelectorAll('.content__con');
const tabItems = document.querySelectorAll('.tabs__item');

buttons.forEach(elem => {
    elem.addEventListener('click', function () {
        let currentBtn = elem;
        let tabId = elem.getAttribute('data-tab');
        console.log(tabId);

        let currentTab = document.querySelector(tabId);
        console.log(currentTab);

        if (!currentBtn.classList.contains('active')) {
            buttons.forEach(elem=> {
                elem.classList.remove('active');
                elem.classList.remove('content__active');
            })

            tabItems.forEach(elem=> {
                elem.classList.remove('active')
            })

            currentTab.classList.add('active');
            currentBtn.classList.add('active');
            currentBtn.classList.add('content__active');
        }
    })

})

document.querySelector('.content__con:nth-child(2)').click();

/**
 *
 * modal
 */

const link = document.querySelector(".main-nav__button");//кнопка по которой щелкаем чтобы войти
const popup = document.querySelector('.modal-login');//вся секция попап
const close = document.querySelector(".popup-close");//кнопка закрытия
const form = popup.querySelector("form"); //вся форма
const login = popup.querySelector("[name=login]");
const password = popup.querySelector("[name=password]");

let isStorageSupport = true;
let storage = "";

try {
    storage = localStorage.getItem("login");
} catch (err) {
    isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");

    if (storage) {
        login.value = storage;
        password.focus ();
    } else {
        login.focus();
    }
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
    if (!login.value || !password.value){
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("login", login.value)
        }
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (popup.classList.contains("modal-show")) {
            evt.preventDefault();
            popup.classList.remove ("modal-show");
            popup.classList.remove("modal-error");
        }
    }
});

/**
 * 1. скачать урок основы ввода данных 2.0
 * 2. скачать урок работам с формами 2.0
 * 3. localStorage урок 2.0
 */

console.log(login);
console.log(password);
const authorizedName = document.querySelector('#authorized');//поле куда выводится Логин


function output() {
    let loginData = login.value;
    let passwordData = password.value;
    login.value = '';
    // authorizedName.textContent = loginData;
    localStorage.setItem('login', loginData);


    let inf = localStorage.getItem('login');

    let out = document.querySelector('.main-nav__authorized-out');
    out.append(inf);
    out.value = ' ';
}

function updateData () {

}
document.querySelector(".modal-button").onclick = output;
window.onload = function() {
    updateData();
};

