$("#menu > div.menu-sobre").on('click',()=>{
    $.get('/sobre.html',(res)=>{
        $(".default").html(res);
    })
})
$("#menu > div.menu-projetos").on('click',()=>{
    $.get('/projetos.html',(res)=>{
        $(".default").html(res);
    })
})

$("#menu > div.menu-experiencias").on('click',()=>{
    $.get('/experiencias.html',(res)=>{
        $(".default").html(res);
    })
})
