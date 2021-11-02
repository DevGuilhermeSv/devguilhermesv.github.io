$('.container').mousemove(function(event){
    window.scrollTo(0,event.clientY*($(this).height()/ window.screen.height));
    
    console.log(event.clientY*($(this).height()/ window.screen.height));
    console.log('x: ',event.clientX, 'y: ', event.clientY)
})