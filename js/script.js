// tab
const tab1Btn = document.getElementById('tab1Btn');
const tab2Btn = document.getElementById('tab2Btn');
const tab1 = document.getElementById('tab1');
const tab2 = document.getElementById('tab2');

tab1Btn.addEventListener('click', function (e) {
    e.preventDefault();
    tab2.style.display = 'none';
    tab1.style.display = 'block';
    tab1Btn.classList.add('active');
    tab2Btn.classList.remove('active');
});

tab2Btn.addEventListener('click', function (e) {
    e.preventDefault();
    tab1.style.display = 'none';
    tab2.style.display = 'block';
    tab2Btn.classList.add('active');
    tab1Btn.classList.remove('active');
});

// slider
let num = 0;
const slides = document.querySelectorAll('.slide');

document.addEventListener('DOMContentLoaded', function () {
    setInterval(function () {
        num++;
        if (num >= slides.length) { num = 0 }
        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove('on');
        }
        slides[num].classList.add('on');
    }, 2800)
})

// mobile menu
const menuBtn = document.getElementById('menu-btn');
const gnb = document.getElementById('gnb');

menuBtn.addEventListener('click', function(e){
    e.preventDefault();
    menuBtn.classList.toggle('on');
    if(menuBtn.classList.contains('on')){
        gnb.style.display = 'block';
    } else {
        gnb.style.display = 'none';
    }
})


