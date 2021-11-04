$(function(){
  
       var time = 9000;
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
       
       
        generateTableOfCurse();
        

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
                 
            }, 100 * indexador)
        indexador++;
        
    }
   
    
}
/**Preenche a tabela de Cursos */
function generateTableOfCurse(){
    var cursosAcademicos = `INTRODUÇÃO À CIÊNCIA DA COMPUTAÇÃO,
                            FUNDAMENTOS DE PROGRAMAÇÃO,
                            ARQUITETURA DE COMPUTADORES,
                            MATEMÁTICA BÁSICA,
                            PRÉ-CÁLCULO,
                            PROGRAMAÇÃO ORIENTADA A OBJETOS,
                            SISTEMAS OPERACIONAIS,
                            ESTRUTURA DE DADOS,
                            MATEMÁTICA DISCRETA,
                            PROGRAMAÇÃO FUNCIONAL,
                            LINGUAGENS FORMAIS E AUTÔMATOS,
                            LÓGICA PARA COMPUTAÇÃO,
                            FUNDAMENTOS DE BANCO DE DADOS,
                            LINGUAGENS DE PROGRAMAÇÃO,
                            REDES DE COMPUTADORES,
                            ENGENHARIA DE SOFTWARE,
                            INTERAÇÃO HUMANO-COMPUTADOR,
                            SISTEMAS DISTRIBUÍDOS,
                            ESTÁGIO SUPERVISIONADO I`;
    var cursosAlternaticos =[ {disciplina: 'DOCKER',
                                status: 'Concluido'},
                                {disciplina: 'Dotnet Core Basico',
                                status: 'Concluido'},
                                {disciplina: 'PRINCIPIOS BASICOS DE PENTEST',
                                status: 'Concluido'},
                                {disciplina: 'DEVOPS NINJA',
                                status: 'Pentente'}]
    
    
    var cursosArray = cursosAcademicos.split(',');
    cursosArray.forEach(element => {
        var htmlSyntax = `<tr>
                            <th scope="row">Academica</th>
                            <td>${element}</td>
                            <td> <div class="d-inline-flex ">
                            <div class="fa fa-check-circle align-self-center ml-2" style="font-size:12px;color:green"> </div>
                        </div></td>
                            
                        </tr>`
        $('#table-course-body').append(htmlSyntax)
    });
    cursosAlternaticos.forEach(element => {
        var htmlSyntax = `<tr>
                            <th scope="row">Externa</th>
                            <td>${element.disciplina}</td>
                            <td> <div class="d-inline-flex ">
                            <div class="fa fa-check-circle align-self-center ml-2" style="font-size:12px;color:${element.status =="Concluido"?"green":"yellow"}"> </div>
                        </div></td>
                            
                        </tr>`
        $('#table-course-body').append(htmlSyntax)
    });
    
}
/* Importante para contagem correta do TimeOut */
var indexador=0;