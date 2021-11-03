/**CONTROLE DE MOVIMENTAÇÃO DE TELA */
//$('.container').mousemove(function(event){
    //window.scrollTo(0,event.clientY*($(this).height()/ window.screen.height));
    
//});


$('.eyes').on('click',function(){
    debugger
    var copy = $(this).clone();
    $('#eyes-container').append(copy);
});
(async function(){
    
    var heigth = $(document).height();
    var width = $(document).width();
    var elementLength =$('.eyes').length; 
    
    $('.eyes').show();
    while(true){
        let element = $('.eyes')[0];
        await eyesAnimation(heigth,width,element);
    }
})();
/** Animação dos olhos*/
function eyesAnimation (heigth, width, element){
return new Promise((resolve)=>{
    setTimeout(()=>{
        
        heigth = getRandomInt(0, heigth);
        width = getRandomInt(0,width);
        $(element).css('top',heigth);
        $(element).css('left',width);
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
