/*Adicionando um atributo

$(document).ready(function(){
    $('span').click(function(){
        $('img')
        .attr('title', 'escreva menos faça mais')
        
        //alert($('img').attr('src'))
    })
}) 
*/
//Removendo um atributo
/*
$(document).ready(function(){
    $('span').click(function(){
    $('img').removeAttr('src') 
    })
})
*/

//Adicionando classe
$(document).ready(function(){
  /*  $('span').click(function(){
        $('img')
        .addClass('destaque')
        alert($('img').hasClass('destaque'))
    })
})
*/
//Alternando class
    $('span').click(function(){
        $('img').toggleClass('destaque')})})