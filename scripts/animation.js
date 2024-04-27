let card_arr = [
    card1 = document.getElementById("card1"),
    card2 = document.getElementById("card2"),
    card3 = document.getElementById("card3"),
    card4 = document.getElementById("card4"),
    card5 = document.getElementById("card5"),
    card6 = document.getElementById("card6"),
    card7 = document.getElementById("card7"),
];

let img_arr = [
    img1 = document.getElementById("1"),
    img2 = document.getElementById("2"),
    img3 = document.getElementById("3"),
    img4 = document.getElementById("4"),
    img5 = document.getElementById("5"),
    img6 = document.getElementById("6"),
    img7 = document.getElementById("7"),
];

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
