$(document).ready(function(){
    $('span:eq(0)').click(function(){
        $('div').hide('slow') //normal, fast, slow
    })
    $('span:eq(1)').click(function(){
        $('div').show('1000') //1000 milisegund
    })
    $('span:eq(2)').click(function(){
        $('div').toggle('5000')
    })
})