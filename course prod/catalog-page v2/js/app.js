
const BURGER = document.querySelector('.header__burger')
const MENU = document.querySelector('.header__menu')
const ASIDE = document.querySelector('.header__aside')
const CATALOG = document.querySelector('.products__cards')
const CHECKBOXS = document.querySelectorAll('.products__name')
const BUTTONS = document.querySelector('.header__inner-selectors')
const BUTTONUP = document.querySelector('.aside-btn')
const HEADER = document.querySelector('.header')
BURGER.addEventListener('click',Burger)

BUTTONS.addEventListener('click',FilterButtons)
let flowers2 = ['роза', 'тюльпан', 'лилия', 'хризантема', 'гладиолус', 'нарцисс', 'ирис', 'фиалка', 'пион', 'гербера', 'мак', 'одуванчик', 'ромашка', 'календула', 'ландыш', 'аконит', 'бархатцы', 'вербена', 'георгина', 'дельфиниум', 'жасмин', 'зверобой', 'камелия', 'левкой', 'мальва', 'незабудка', 'орхидея', 'подсолнух', 'рута', 'сирень'];
let dataLight = ['bright','gentle']
let dataColor = ['white', 'yellow', 'green','red','orange','pink','blue']
let dataFormat = ['bouquet','vase','envelope','basket','box','case']
let dataCategory = ['gypsophiles','daisies','chrysanthemums','indoor','monobucket','combined','holiday','composition',
'envelope','dried','popular','roses','funeral']
let flowers = [];
let choose = 0



function Burger(event){
    if(event.target.closest('.header__burger') || event.target.closest('.header__burger-span')){
        event.target.classList.toggle('active')
        MENU.classList.toggle('active')           
    }
}

function AddFlowers(){

    flowers.forEach(element => {

        let FLOWER = document.createElement('div')
        let IMAGE = document.createElement('img')
        let NAME = document.createElement('p')
        let PRICE = document.createElement('p')
        let BUTTON = document.createElement('button')

        FLOWER.classList.add('products__card')
        IMAGE.classList.add('products__card-img')
        NAME.classList.add('products__card-title')
        PRICE.classList.add('products__card-price')
        BUTTON.classList.add('products__card-btn')

        IMAGE.src = element.image
        FLOWER.appendChild(IMAGE)

        NAME.innerText = element.name
        FLOWER.appendChild(NAME)

        PRICE.innerText = element.price+'.00' +' '+ element.currency
        FLOWER.appendChild(PRICE)

        BUTTON.innerText = 'В корзину'
        FLOWER.appendChild(BUTTON)

        
        FLOWER.setAttribute('data-light',element.dataLight)
        FLOWER.setAttribute('data-color',element.dataColor)
        FLOWER.setAttribute('data-format',element.dataFormat)
        FLOWER.setAttribute('data-category',element.dataCategory)              
        
        CATALOG.appendChild(FLOWER)
    });
}

function Filter(){
    CHECKBOXS.forEach(element => {
        element.addEventListener('click',function(event){
            const FLOWERS = document.querySelectorAll('.products__card')
                if(event.target.checked == true){
                    let FILTERLIGHT = element.getAttribute('data-light')
                    let FILTERCOLOR = element.getAttribute('data-color')
                    let FILTERFORMAT = element.getAttribute('data-format')
                    FLOWERS.forEach(elem => {
                        let FLOWERattrLIGHT = elem.getAttribute('data-light')
                        let FLOWERattrCOLOR = elem.getAttribute('data-color')
                        let FLOWERattrFORMAT = elem.getAttribute('data-format')
                        if(FILTERCOLOR == FLOWERattrCOLOR){
                            elem.style.animation = `visib ${2}s ease forwards`
                        }
                        else if(FILTERLIGHT == FLOWERattrLIGHT){
                            elem.style.animation = `visib ${2}s ease forwards`
                        }
                        else if(FILTERFORMAT == FLOWERattrFORMAT){
                            elem.style.animation = `visib ${2}s ease forwards`
                        }
                        else{
                            elem.style.animation = `unvisib ${2}s ease forwards`
                        }
                    });
                }
                else{
                    FLOWERS.forEach(elem => {
                        elem.style.animation = `visib ${2}s ease forwards`
                    });
            }
        })
    });
}


function FilterButtons(event){
    let FILTER = event.target.getAttribute('data-Category')
    const FLOWERS = document.querySelectorAll('.products__card')

    if(event.target.closest('.header__inner-selectors-btn')){
        event.target.classList.toggle('active')
    }

    if(event.target.closest('.active')){
        FLOWERS.forEach(elem => {
            let FLOWERattrCategory = elem.getAttribute('data-category')
            if(FILTER == FLOWERattrCategory){
                elem.style.animation = `visib ${2}s ease forwards`
            }
            else{
                elem.style.animation = `unvisib ${2}s ease forwards`
            }
        });
    }
    else{
        FLOWERS.forEach(elem => {
            elem.style.animation = `visib ${2}s ease forwards`
    });
    }
}


function randomChoice(array) {
    let index = Math.floor(Math.random() * array.length);
    return array[index];
}

function generateObject() {
    let min = 30
    let max = 150
    let price = Math.floor(Math.random() * (max - min + 1)) + min;
    let name = randomChoice(flowers2);
    let light = randomChoice(dataLight);
    let color = randomChoice(dataColor);
    let format = randomChoice(dataFormat);
    let category = randomChoice(dataCategory);
    let image = randomChoice(FLOWERS_DB);
    let flower = {name: name, image: image , currency:'BYN', price: price, dataLight: light, dataColor : color, dataFormat : format, dataCategory : category};
    return flower
}

function flowerGenerator(){
    for (let i = 0; i < 99; i++) {
            let object = generateObject();
            flowers.push(object);
            }
}

function Adddataattr(){
    let btns = document.querySelectorAll('.header__inner-selectors-btn')
    btns.forEach(element => {
        element.setAttribute('data-Category',dataCategory[choose])
        choose++
    });
}

window.addEventListener('scroll',Checkwindowposition)


function Checkwindowposition(){
    let scroll = window.scrollY
    if(scroll>2000){
    BUTTONUP.style.animation = `appearancebtn ${4}s forwards linear`
    
    }
    else{
        BUTTONUP.style.animation = `unappearancebtn ${1}s ease forwards`
    }
}


BUTTONUP.addEventListener('click',function(event){
    if(event.target.closest('.aside-btn')){
        window.scrollTo({
            top: HEADER.clientHeight,
            behavior: "smooth"
        });
    }
})

Adddataattr()
flowerGenerator()
AddFlowers(flowers)
Filter(CHECKBOXS)
