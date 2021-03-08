$(function(){
  
       var time = 12000;
        $('.anime').each(function(){
            
            setTimeout(()=>{
                $(this).addClass('anime-start');
            },time)
            time+=1500
            
            
        }) 
        /* configurações para efeito de digitação------------ */
        var textoInicial = $("#textoIncial").children();
        var filhos = BuscaFilho(textoInicial);
        for (let index = 0; index < filhos.length; index++) {
            const element = filhos[index];

            typeWrite(element);
            
        }
        $('.add-fade').attr('class','anime');
       
       
        
        

});
 /* Retorna um array com os elementos filhos de um elemento Pai */
 function BuscaFilho(textoInicial) {
    var filhos =[];
    for (let index = 0; index < textoInicial.length; index++) {
        const element = textoInicial[index];
        filhos.push(element); 
       
        
    }
    return filhos;
      
}
/* Adiciona o efeito de digitação no texto do elemento */
 function typeWrite(elemento){

    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    
    
    for (let index = 0; index < textoArray.length; index++) {
        const letra = textoArray[index];
        
            setTimeout(function(){
                elemento.innerHTML += letra;
                if(index == 0){
                    $(elemento).attr('class','titulo-principal');
                }
               if(index+1 == textoArray.length){
                $(elemento).removeAttr('class','titulo-principal');
               }
                 
            }, 150 * indexador)
        indexador++;
        
    }
   
    
}
/* Importante para contagem correta do TimeOut */
var indexador=0;