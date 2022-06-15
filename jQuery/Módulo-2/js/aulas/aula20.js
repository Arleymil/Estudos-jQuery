$(document).ready(function(){
    $('span:eq(0)').click(function(){
      //  $('div').fadeOut(1000)
      //  $('div').fadeIn(1000)
      // $('div').fadeTo(1000, 0.3)
       $('div').fadeToggle(1000)
    })
    $('span:eq(1)').click(function(){
      //  $('div').slideUp(1000)
     //   $('div').slideDown(1000)
        $('div').slideToggle(1000)
    })
})