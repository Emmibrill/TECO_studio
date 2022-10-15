const primaryNavigator = document.querySelector('.primary__navigator')
const cover = document.querySelector('.cover')
const mainNav = document.querySelector('.mainNav')
const navList = document.querySelector('.nav__List')
const openButton = document.querySelector('.open')
const closeButton = document.querySelector('.close')


/*var imageSlider = document.querySelector('#imageSlider')
var images = new Array(
    "IMG-20221006-WA0019.jpg",
    "IMG-20221006-WA0016.jpg");
var len = images.length;
var i = 0;
console.log(length)
function slider(){
    if(i > len-1){
        i = 0
    }
    imageSlider.src = images[i]
    i++
    setTimeout('slider()', 5000)
}*/

openButton.addEventListener('click', () => {
    navList.classList.add('showPrimaryNav')
    openButton.style.display = 'none'
    closeButton.style.display = 'flex'
})
closeButton.addEventListener('click', () => {
    navList.classList.remove('showPrimaryNav')
    openButton.style.display = 'flex'
    closeButton.style.display = 'none'
})