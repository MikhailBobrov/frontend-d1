/**
 *
 * @type {NodeListOf<Element>}
 * переключение между табами
 */



window.onload = function () {
    document.querySelector('.content').addEventListener('click', fTabs);
    function fTabs(event) {
        console.log(event)
        if (event.target.className === 'content__con') {
            //dataTab - номер вкладки которую нужно отобразить
            let dataTab = event.target.getAttribute('data-tab');

            //отключаю класс content__active у всех табов
            let tabH = document.querySelectorAll('.content__con');
            for (let i = 0; i < tabH.length; i++) {
                 tabH[i].classList.remove('content__active')
            }

            event.target.classList.add('content__active')
            //console.log(typeof dataTab)

            //все вкладки с содержимым
            let tabBody = document.querySelectorAll('.tabs__item');

            for (let i = 0; i< tabBody.length; i++) {
                if (dataTab == i) {
                    tabBody[i].style.display = 'block';
                }
                else {
                    tabBody[i].style.display = 'none';
                }
            }
        }

    }
    updateData();
}

// buttons.forEach(elem => {
//     elem.addEventListener('click', function () {
//         let currentBtn = elem;
//         let tabId = elem.getAttribute('data-tab');
//         console.log(tabId);
//
//         let currentTab = document.querySelector(tabId);
//         console.log(currentTab);
//
//         if (!currentBtn.classList.contains('active')) {
//             buttons.forEach(elem=> {
//                 elem.classList.remove('active');
//                 elem.classList.remove('content__active');
//             })
//
//             tabItems.forEach(elem=> {
//                 elem.classList.remove('active')
//             })
//
//             currentTab.classList.add('active');
//             currentBtn.classList.add('active');
//             currentBtn.classList.add('content__active');
//         }
//     })
//
// })
// //подумать с этой точкой
// document.querySelector('.content__con:nth-child(2)').click();

/**
 *
 * modal
 */

const popup = document.querySelector('.modal-login');//вся секция попап
const close = document.querySelector(".popup-close");//кнопка закрытия
const form = popup.querySelector("form"); //вся форма
const login = popup.querySelector("[name=login]");
const password = popup.querySelector("[name=password]");
const modalButton = document.querySelector('.modal-button');
const navButton = document.querySelector('.main-nav__button');

let isStorageSupport = true;
let storage = "";

try {
    storage = localStorage.getItem("login");
} catch (err) {
    isStorageSupport = false;
}

//кликаю по кнопке в навигации - открывается модальное окно
navButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");

    if (storage) {
        login.value = storage;
        password.focus ();
    } else {
        login.focus();
    }
});

//кнопка закрытия модального окна
close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
});

//клик по кнопке модального окна - Войти
modalButton.addEventListener('click', function (evt) {
    if (login.value === '' || login.value == null || password.value.length <= 6) {
        alert('Введите свой login');
        console.log('Введите свой login');
        alert('Пароль должен быть больше 6 символов');
        console.log('Пароль должен быть больше 6 символов');
    } else {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");

        if (!login.value || !password.value){
            evt.preventDefault();
            popup.classList.remove("modal-error");
            //popup.offsetWidth = popup.offsetWidth;
            popup.classList.add("modal-error");
        } else {
            if (isStorageSupport) {
                localStorage.setItem("login", login.value)
            }
        }
    }


})

// form.addEventListener("submit", function (evt) {
//
// });

//закрытие по esc
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (popup.classList.contains("modal-show")) {
            evt.preventDefault();
            popup.classList.remove ("modal-show");
            popup.classList.remove("modal-error");
        }
    }
});


const loginView = document.querySelector('.main-nav__authorized');//див над инпутом
const loginInput = document.querySelector('.main-nav__authorized-out'); //инпут

function output() {
    let loginData = login.value;
    localStorage.setItem('login', loginData);
    let inf = localStorage.getItem('login');
    loginView.innerHTML = inf;
}

//идет запись в storage
modalButton.onclick = output;

loginView.addEventListener('click', function () {
    loginInput.classList.add('main-nav__authorized-outoblock');
    loginInput.value = loginView.innerHTML;
    this.classList.add('main-nav__authorized-out');
});

loginInput.addEventListener('change', function () {
    let loginData = loginInput.value;
    localStorage.setItem('login', loginData);
    updateData();
    loginInput.classList.remove('main-nav__authorized-outoblock');
    loginView.classList.remove('main-nav__authorized-out');
});
//const navButton = document.querySelector('.main-nav__button');
const btnOut = document.querySelector('.main-nav__button-out');
function updateData () {
    let info = localStorage.getItem('login');
    loginView.innerHTML = info;
    loginInput.value = info;

    if (loginInput.value === '' ||  loginView === '') {
        //navButton.innerHTML = 'Войти'
        console.log('НУжнно ввести логин и пароль');
    } else if (document.querySelector('.main-nav__authorized').textContent !== '') {
        navButton.classList.remove('button__enter');
        navButton.classList.add('button__enter-out');
        btnOut.classList.remove('main-nav__button-out');
        btnOut.classList.add('button__out');
    }
}

btnOut.addEventListener('click', function () {
    btnOut.classList.remove('button__out');
    btnOut.classList.add('main-nav__button-out');
    navButton.classList.remove('button__enter-out');
    navButton.classList.add('button__enter');
    localStorage.clear();
    // loginInput.value = '';
    loginInput.classList.remove('main-nav__authorized-outoblock');
    loginView.classList.remove('main-nav__authorized-out');
    document.querySelector('.main-nav__authorized').textContent = ''
})

// window.onload = function() {
//
// };


