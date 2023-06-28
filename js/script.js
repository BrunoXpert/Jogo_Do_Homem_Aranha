const corre = document.querySelector('.corre');
const pipe = document.querySelector('.pipe');
var cronoMetroId = null;
var recorde = $("#recorde").text();
var tempoInicial = $("#pontuacao").text();

cronoMetroId = setInterval(function(){
    $("#pontuacao").text(tempoInicial);
    tempoInicial++;
}, 100)

const jump = ()=> {
    corre.classList.add('jump');
    setTimeout(() =>{
        corre.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {
    console.log('loop');
    
    const pipePosition = pipe.offsetLeft;
    const correPositon = +window.getComputedStyle(corre).bottom.replace('px', '');
    console.log(pipePosition);  

if (pipePosition <= 100 && pipePosition > 0 && correPositon < 78){

    pipe.style.animation = 'none';
    pipe.style.left='${pipePosition}px';

    corre.style.animation = 'none';
    corre.style.bottom='${correPositon}px';

    corre.src = './img/dançandoo.gif';
    corre.style.marginLeft = "450px";

    if (recorde == 0) {
        var pontuacaoMorte = $("#pontuacao").text();
        $("#recorde").text(pontuacaoMorte);
      }

    $(".retry").attr("disabled", false);
    clearInterval(cronoMetroId)
    clearInterval(loop);
  
}
},10);



document.addEventListener('keydown', jump);