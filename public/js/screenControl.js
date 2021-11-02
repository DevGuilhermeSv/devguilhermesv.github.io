/**CONTROLE DE MOVIMENTAÇÃO DE TELA */
$('.container').mousemove(function(event){
    window.scrollTo(0,event.clientY*($(this).height()/ window.screen.height));
    
    console.log(event.clientY*($(this).height()/ window.screen.height));
    console.log('x: ',event.clientX, 'y: ', event.clientY)
});

(async function(){
    
    var heigth = $(document).height();
    var width = $(document).width();
    $('#eyes').show();
    while(true){
        await eyesAnimation(heigth,width);
        console.log('teste');
    }
})();

function eyesAnimation (heigth, width){
return new Promise((resolve)=>{
    setTimeout(()=>{
        
        heigth = getRandomInt(0, heigth);
        width = getRandomInt(0,width);
        var img = `<img class="notBgd" src="public/img/tenor.gif" alt="">`;
        $('#eyes').css('top',heigth);
        $('#eyes').css('left',width);
        return resolve();
    },3000)
    
})
    
    
}
/** Retorna um numero aleatorio enter o min e o max */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }