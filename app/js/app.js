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