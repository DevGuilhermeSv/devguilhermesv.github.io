$(function(){
  
       var time = 5;
        $('.anime').each(function(){
            
            setTimeout(()=>{
                $(this).addClass('anime-start');
            },time)
            time+=1500
            
            
        }) 
        console.log('ok');

});