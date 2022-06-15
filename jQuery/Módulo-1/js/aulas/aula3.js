$(document).ready(function(){
    //Descendentes
    $('div span').css('background-color', 'yellow')
    
    //Filhos do elemento
    $('li > ul').css('color', 'red')

    //Irmãos
    $('#item_1 ~ li').css('color', 'blue')
})