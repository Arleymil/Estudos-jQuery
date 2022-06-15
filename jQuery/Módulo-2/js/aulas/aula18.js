$(document).ready(function(){
    function msg(e){
        $('#msg').text(($(this).val()))
    }
    //$(':text').keyup(msg).focus(msg).blur(msg)
    $(':text').bind('keyup focus blur', msg)
    $('fieldset').delegate(':text', 'keyup', msg)

    $(':button').bind('click', function(e, src, width){
      // $('fieldset').prepend('Outro: <input type="text" name="outro"/>')
      $('#msg').append($('<img/>').attr('src', src).css('width', width))
      $(':button').trigger('click', ['img/person-2.jpg', '90px', true])
        
        //$(':text').unbind('keyup', msg)
    
       // $(':text').val('texto incluido via jQuery')
       //$(':text').trigger('focus')
    })
})