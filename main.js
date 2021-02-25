
/*
var lampada = document.getElementById("img").src;
var ligado = "ligado.png"
var desligado = "desligado.png"

function toogle() {
    if(lampada = desligado) {
        document.getElementById("img").src = ligado;

    } else (lampada= ligado){
            document.getElementById("img").src = desligado;
        }
        
    
}*/

function toogle(){
    lampada = document.getElementById("img").scroll;
    if (lampada.indexOf('desligado.png')!=-1) {
        document.getElementById("img").src = "ligado.png"
    } else {
        document.getElementById("img").src = "desligado.png"
    }
}