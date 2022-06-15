$(document).ready(function(){
    $('span').click(function(){

    $('ul').append('<li>Dentro e na última posição</li>')  
    $('ul').prepend('<li>Dentro e na primeira posição</li>')  
    $('ul').before('<h1>Fora e Antes do Inicio</h1>')      
    $('ul').after('<h1>Fora e depois do elemento alvo</h1>')
    $('ul').append($('li').clone())  
    $('ul').wrap('<p>Dentro e na primeira posição</p>')  
    

})
})