const go_button = document.querySelector(".go-up-button");
const get_bottom = document.querySelector(".top");
const star_1 = document.querySelector(".star1");
const star_1_text = document.querySelector(".star1_text")
const star_2 = document.querySelector(".star2");
const japan_pin = document.getElementById("pin-image");
const japan_map = document.getElementById("world-map-japan")
const original_map = document.getElementById("world-map-original")
const left_arrow = document.querySelector(".arrow-left");
const left_arrow_layer = document.querySelector(".arrow-left-2");
const right_arrow = document.querySelector(".arrow-right");
const right_arrow_layer = document.querySelector(".arrow-right-2");
const earth = document.querySelector(".earth");
let arrow_value = 'true';
const ecuador_des = document.querySelector(".ecuador_des");
const grenada_des = document.querySelector(".grenada_des");
const united_states_des=document.querySelector(".us_des");
const madagascar_des = document.querySelector(".madagascar_des");
const india_a_des = document.querySelector(".india_a_des");
const india_b_des = document.querySelector(".india_b_des");
const egypt_des = document.querySelector(".egypt_des");
const japan_des = document.querySelector(".japan_des");
const china_des = document.querySelector(".china_des");
const korea_des = document.querySelector(".korea_des");
const us_lm = document.querySelector('.us-lm');
const ecuador_lm = document.querySelector('.ecuador-lm');
const grenada_lm = document.querySelector('.grenada-lm');
const india_a_lm = document.querySelector('.india-a-lm');
const india_b_lm = document.querySelector('.india-b-lm');
const madagascar_lm = document.querySelector('.madagascar-lm');
const egypt_lm = document.querySelector('.egypt-lm');
const china_lm = document.querySelector('.china-lm');
const japan_lm = document.querySelector('.japan-lm');
const korea_lm = document.querySelector('.korea-lm');

/*
japan_map.style.display="none";

japan_pin.addEventListener('mouseover',function(){
    original_map.style.display ="none";
    japan_map.style.display="block"
})
japan_pin.addEventListener('mouseleave',function(){
    original_map.style.display ="block";
    japan_map.style.display="none";
})

go_button.addEventListener('click',function(){
    get_bottom.scrollIntoView('false');
})


star_1_text.style.display = "none";
star_1.addEventListener('click',function(){
    if (star_1_text.style.display == "none"){
        star_1_text.style.display ="block"
    }
    else{
        star_1_text.style.display ="none"
    }
})
*/

second_page_disappear();
third_page_disappear();
third_page_disable();

function first_page_appear(){
    united_states_des.classList.remove('out')
    grenada_des.classList.remove('out')
    ecuador_des.classList.remove('out')
    
   united_states_des.classList.add('in')
   grenada_des.classList.add('in')
   ecuador_des.classList.add('in')
    
}

function first_page_disappear(){

    united_states_des.classList.remove('in')
    grenada_des.classList.remove('in')
    ecuador_des.classList.remove('in')

    united_states_des.classList.add('out')
   grenada_des.classList.add('out')
   ecuador_des.classList.add('out')


}

function second_page_appear(){

    madagascar_des.classList.remove('out')
    india_a_des.classList.remove('out')
    india_b_des.classList.remove('out')
    egypt_des.classList.remove('out')
    

    madagascar_des.classList.add('in')
    india_a_des.classList.add('in')
    india_b_des.classList.add('in')
    egypt_des.classList.add('in')
    

}

function second_page_disappear(){
    madagascar_des.classList.remove('in')
    india_a_des.classList.remove('in')
    india_b_des.classList.remove('in')
    egypt_des.classList.remove('in')
    
    
    madagascar_des.classList.add('out')
    india_a_des.classList.add('out')
    india_b_des.classList.add('out')
    egypt_des.classList.add('out')

    
}


function third_page_appear(){
    japan_des.classList.remove('out')
    korea_des.classList.remove('out')
    china_des.classList.remove('out')
     
    japan_des.classList.add('in')
    korea_des.classList.add('in')
    china_des.classList.add('in')
    
}

function third_page_disappear(){
    japan_des.classList.remove('in')
    korea_des.classList.remove('in')
    china_des.classList.remove('in')
    
    japan_des.classList.add('out')
    korea_des.classList.add('out')
    china_des.classList.add('out')


}
function third_page_disable(){
    china_des.style.display = ('none');
    japan_des.style.display = ('none');
    korea_des.style.display = ('none');
}

function third_page_able(){
    china_des.style.display = ('block');
    japan_des.style.display = ('block');
    korea_des.style.display = ('block');
}

function first_page_disable(){
    united_states_des.style.display = ('block');
    ecuador_des.style.display = ('block');
    grenada_des.style.display = ('block');
}

function first_page_able(){
    united_states_des.style.display = ('block');
    grenada_des.style.display = ('block');
    ecuador_des.style.display = ('block');
}


right_arrow.addEventListener('click',function(){
    if (earth.style.backgroundPosition == "60% center"){
        earth.style.backgroundPosition= "100%";
        right_arrow.style.display = "none";
        right_arrow_layer.style.display = "block";
        second_page_disappear()
        third_page_appear()
        first_page_disable()
    }
    if (earth.style.backgroundPosition == "100% center"){
        earth.style.backgroundPosition= "100%";
    }
    else{ 
        earth.style.backgroundPosition= "60%";
        left_arrow_layer.style.display ="none";
        left_arrow.style.display = "block"
        first_page_disappear()
        second_page_appear()
        third_page_able()
    }
    

}
)
left_arrow.style.display ="none"
left_arrow_layer.style.display = "block";
right_arrow.style.display ="block"
right_arrow_layer.style.display = "none";


left_arrow.addEventListener('click',function(){
    if (earth.style.backgroundPosition == "60% center"){
        earth.style.backgroundPosition= "5%";
        left_arrow_layer.style.display = "block";
        left_arrow.style.display ="none";
        second_page_disappear();
        first_page_appear();
        third_page_disable();
    }
    if (earth.style.backgroundPosition == "100% center"){
        earth.style.backgroundPosition= "60%";
        right_arrow_layer.style.display = "none";
        right_arrow.style.display = "block";
        second_page_appear()
        third_page_disappear()
        first_page_able()

    }
    else{ 
        earth.style.backgroundPosition= "5%";
        first_page_appear()


    }

})

us_lm.addEventListener('mouseover',function(){
    united_states_des.classList.add('size_expand');
})

us_lm.addEventListener('mouseleave',function(){
    united_states_des.classList.remove('size_expand');
})

ecuador_lm.addEventListener('mouseover',function(){
    ecuador_des.classList.add('size_expand');
})

ecuador_lm.addEventListener('mouseleave',function(){
    ecuador_des.classList.remove('size_expand');
})

grenada_lm.addEventListener('mouseover',function(){
    grenada_des.classList.add('size_expand');
})
grenada_lm.addEventListener('mouseleave',function(){
    grenada_des.classList.remove('size_expand');
})

india_a_lm.addEventListener('mouseover',function(){
    india_a_des.classList.add('size_expand');
})

india_a_lm.addEventListener('mouseleave',function(){
    india_a_des.classList.remove('size_expand');
})
india_b_lm.addEventListener('mouseover',function(){
    india_b_des.classList.add('size_expand');
})

india_b_lm.addEventListener('mouseleave',function(){
    india_b_des.classList.remove('size_expand');
})
madagascar_lm.addEventListener('mouseover',function(){
    madagascar_des.classList.add('size_expand');
})

madagascar_lm.addEventListener('mouseleave',function(){
    madagascar_des.classList.remove('size_expand');
})
egypt_lm.addEventListener('mouseover',function(){
    egypt_des.classList.add('size_expand');
})

egypt_lm.addEventListener('mouseleave',function(){
    egypt_des.classList.remove('size_expand');
})

china_lm.addEventListener('mouseover',function(){
    china_des.classList.add('size_expand');
})

china_lm.addEventListener('mouseleave',function(){
    china_des.classList.remove('size_expand');
})
japan_lm.addEventListener('mouseover',function(){
    japan_des.classList.add('size_expand');
})

japan_lm.addEventListener('mouseleave',function(){
    japan_des.classList.remove('size_expand');
})

korea_lm.addEventListener('mouseover',function(){
    korea_des.classList.add('size_expand');
})

korea_lm.addEventListener('mouseleave',function(){
    korea_des.classList.remove('size_expand');
})



/*
notes:
original png file - world map with blank pins
unique png file with each blank pin being filled in with the countries also filled in
get cursor position to see whether cursor is on top of pin
if so, original.display = none, others.display = block
reverse function needed also (if cursor is not, display opposite)
learn more about the countries + learn about the committee
world map design will likely not work.. will have to think of alternative mobile compatible design
(the pop up while scrolling down is nice i guess)
*/



