var Jennie = document.getElementById('imagem_principal')
var Mini_Jennie = document.getElementsByClassName('tumb_image')


Mini_Jennie[0].onclick = function () {
    Jennie.src = Mini_Jennie[0].src;
}
Mini_Jennie[1].onclick = function () {
    Jennie.src = Mini_Jennie[1].src;
}
Mini_Jennie[2].onclick = function () {
    Jennie.src = Mini_Jennie[2].src;
}
Mini_Jennie[3].onclick = function () {
    Jennie.src = Mini_Jennie[3].src;
}
Mini_Jennie[4].onclick = function () {
    Jennie.src = Mini_Jennie[4].src;
}

function change_color() {
    if (imagem_principal.style.filter == "grayscale(1)") {
        imagem_principal.style.filter = ""
    } else {
        imagem_principal.style.filter = "grayscale(1)"
    }
}

function rain() {
    let amount = 30;
    let body = document.querySelector('body');
    let i = 0;
    while (i < amount) {
        let drop = document.createElement('i');
        let size = Math.random() * 5;
        let posX = Math.floor(Math.random() * window.innerWidth);
        let delay = Math.random() * -20
        drop.style.width = 0.2 + size + 'px';
        drop.style.left = posX + 'px';
        drop.style.animationDelay = delay + 's';
        body.appendChild(drop);
        i++
    }
}

rain()