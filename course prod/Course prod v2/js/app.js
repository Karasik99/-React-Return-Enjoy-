const BURGER = document.querySelector('.header__burger')
const MENU = document.querySelector('.header__menu')
const ITEMS = document.querySelectorAll('.header__menu-item')
const ASIDE = document.querySelector('.header__aside')
const BODY = document.querySelector('body')
const NAVIGATOR = document.querySelector('.navigator')
const FLOWERSBUTTON = document.querySelector('.flowers__card-btns')
const FLOWERLINE = document.querySelector('.flowers__slider-line')
const FLOWERSCARD = document.querySelectorAll('.flowers__card')
const CARDWIDTH = 380
const BLUR = document.querySelector('.blur')
const BLURBTN = document.querySelector('.blur__btn')
const CONTENT = document.querySelector('.content')
const CONTENTWRAP = document.querySelector('.content-wrapper')

let OFFSET = 0
let INTERVAL = (FLOWERSCARD.length*CARDWIDTH)-CARDWIDTH*3
let CursorCoordX;
let CursorCoordY;
let Interval = setInterval(NextBlur,3000)


BODY.addEventListener('contextmenu',ShowNavigator)
BODY.addEventListener('submit',Submit)
BODY.addEventListener('mousemove',GetCursorCoordinates)
BURGER.addEventListener('click',Burger)
FLOWERSBUTTON.addEventListener('click',Sliders)
NAVIGATOR.addEventListener('click',Navigation)
BLURBTN.addEventListener('click',BlurDown)


function Burger(event){
    if(event.target.closest('.header__burger') || event.target.closest('.header__burger-span')){
        event.target.classList.toggle('active')
        MENU.classList.toggle('active')
        ITEMS.forEach(element => {
            element.classList.toggle('active')
        });
        CONTENTWRAP.classList.toggle('active')            
    }
}

function Sliders(event){
    if(event.target.closest('.arrow-right')){
        OFFSET+=CARDWIDTH
        if(OFFSET>INTERVAL){
            OFFSET = 0
        }
        FLOWERLINE.style.transform = `translateX(${-OFFSET}px)`
    }
    if(event.target.closest('.arrow-left')){
        OFFSET-=CARDWIDTH
        if(OFFSET<0){
            OFFSET = INTERVAL
        }
        FLOWERLINE.style.transform = `translateX(${-OFFSET}px)`
    }
}

function GetCursorCoordinates(event){
    CursorCoordX = event.pageX
    CursorCoordY = event.pageY
}

function ShowNavigator(event){
    event.preventDefault()
    NAVIGATOR.classList.toggle('navigator__active')
    NAVIGATOR.style.position = 'absolute'
    NAVIGATOR.style.top = CursorCoordY-150+'px'
    NAVIGATOR.style.left = CursorCoordX-150+'px'
    NAVIGATOR.style.zIndex = 1000
    BODY.addEventListener('mousemove',NavigatorOut)

}

function NavigatorOut(event){
    if(!event.target.closest('.navigator')){
        NAVIGATOR.classList.remove('navigator__active')
    }
}

function Navigation(event){
    event.preventDefault()
    const smoothLinks = document.querySelectorAll('a[href^="#"]');
    for (let smoothLink of smoothLinks) {
        smoothLink.addEventListener('click', function (e) {
            e.preventDefault();
            const id = smoothLink.getAttribute('href');
            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start'});
            });
        };  
    NAVIGATOR.classList.remove('navigator__active')
}

function NextBlur(){
    let min = 1
    let max = 4
    let Random = Math.floor(Math.random() * (max - min) + min);
    BLUR.style.backgroundImage = `url('/img/img/main-blur-${Random}.jpg')`
}

function BlurDown(){
    window.scrollTo({
        top: BLUR.clientHeight,
        behavior: "smooth"
    });
}

function Submit(event){
    event.preventDefault()
}