$(document).ready(function() {
    $('tbody tr:not(.sub)').hide()
    $('.sub th').prepend('<input type="checkbox" />')
    $('input').click(function(){
        $(this).attr('checked') ? $('tbody tr:not(.sub)').show() : $('tbody tr:not(.sub)').hide()
    })
})