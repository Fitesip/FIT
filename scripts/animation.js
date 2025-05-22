let card_arr = document.querySelectorAll(".card")

let img_arr = document.querySelectorAll(".card-image")

for (let i = 0; i < card_arr.length; i++){
    card_arr[i].onmouseleave = function (){
        img_arr[i].style.marginTop = '-325' + 'px';
        card_arr[i].style.height = '148' + 'px';
    };
    card_arr[i].onmouseenter = function () {
        img_arr[i].style.marginTop = '0' + 'px';
        card_arr[i].style.height = '475' + 'px';
    }
}
