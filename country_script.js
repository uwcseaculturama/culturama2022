const selector_1 = document.querySelector('.choice-1')
const selector_2 = document.querySelector('.choice-2')
const selector_3 = document.querySelector('.choice-3')
const selector_4 = document.querySelector('.choice-4')

const correct_icon =document.querySelector('.correct')
const correct_text =document.querySelector('.correct-text')

const wrong_icon =document.querySelector('.wrong')
const wrong_text =document.querySelector('.wrong-text')

const back_button = document.querySelector('.back-button');

correct_icon.style.display='none'
correct_text.style.display='none'

wrong_icon.style.display='none'
wrong_text.style.display='none'

back_button.addEventListener('click',function(){
    window.open("index.html", "_self");
})

selector_1.addEventListener('click',function(){
    correct_display()
})
selector_2.addEventListener('click',function(){
    wrong_display()
})
selector_3.addEventListener('click',function(){
    wrong_display()
})
selector_4.addEventListener('click',function(){
    wrong_display()
})

function correct_display(){
    selector_1.style.display = 'none';
    selector_2.style.display = 'none';
    selector_3.style.display = 'none';
    selector_4.style.display = 'none';

    correct_icon.style.display='block';
    correct_text.style.display='block';
}
function wrong_display(){
    selector_1.style.display = 'none';
    selector_2.style.display = 'none';
    selector_3.style.display = 'none';
    selector_4.style.display = 'none';

    wrong_icon.style.display='block';
    wrong_text.style.display='block';
}