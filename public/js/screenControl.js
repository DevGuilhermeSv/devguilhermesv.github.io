var axY =  $('.eyes').css('top');
var axX = $('.eyes').css('left');
async function backgroundAnimations(){
    
    var heigth = $(document).height();
    var width = $(document).width();
    var element = $('.eyes')[0];
    var snake = $('.snake')[0];
    debugger
    $(snake).css('top',axY);
    $(snake).css('left',axX);
    while(true){
       await eyesAnimation(heigth,width,element);
       $(snake).css('top',axY);
       $(snake).css('left',axX);

   }
};
/** Animação dos olhos*/
function eyesAnimation (heigth, width, element){
return new Promise((resolve)=>{
    setTimeout(()=>{
        
        axY = getRandomInt(0, heigth);
        axX = getRandomInt(0,width);
        $(element).css('top',axY);
        $(element).css('left',axX);
        return resolve();
    },4000)
    
})    
}

/** Retorna um numero aleatorio enter o min e o max */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
