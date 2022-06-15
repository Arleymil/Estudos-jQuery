$(document).ready(function(){
    $('span').click(function(){

        $('h1').remove('#titulo')
        //$("h1").remove()
        
        //$("ul").empty('li')
    
        $('ul').unwrap() //tirou o elemento <p> (linha 17) que se mantinha dentro da ul
    })

    $('ul').append('<li>Dentro e na última posição</li>')  
    $('ul').prepend('<li>Dentro e na primeira posição</li>')  
    $('ul').before('<h1 id="titulo">Fora e Antes do Inicio</h1>')      
    $('ul').after('<h1>Fora e depois do elemento alvo</h1>')
    $('ul').append($('li').clone())  
    $('ul').wrap('<p>Dentro e na primeira posição</p>')  
    

})
