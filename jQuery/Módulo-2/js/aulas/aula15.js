$(document).ready(function(){
    $('span').click(function(){

        $($('img').removeClass('imagem'))
        $($('img').addClass('destaque'))
        
        /* Largura e Altura
        alert($('img').width())
        alert($('img').innerWidth()) //soma a largura da imagem + o padding
        alert($('img').outerWidth(true)) //soma a largura da imagem + as bordas + o padding
        */
        
        //Posição
        alert($('img').position().top)
        alert($('img').position().left)
        alert($('img').offset().top)
        alert($('img').offset().left)

        /* Alterar propriedades da imagem
        $('img').css({
            width:'300px',
            background:'#00FF00',
            border:'30px solid #B22222' 
        }) 
        */
        
        //alert($('img').css('width'))
        //alert($('img').css('height'))
    })
})