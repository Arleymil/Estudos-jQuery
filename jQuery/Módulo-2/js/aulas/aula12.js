$(document).ready(function(){
    $('span').click(function(){
    
    var img = 
    $('<img/>', 
        {src: 'img/person-2.jpg',
        title: 'Mulher',
        click:function(){alert('trabalhadora')}
    
    })

    var ul = $ ('<ul/>').append($('<li/>').append('Programador de interface WEB'))
        
    $('body').append(ul).append(img)

})
})