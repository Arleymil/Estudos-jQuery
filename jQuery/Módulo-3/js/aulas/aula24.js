$(document).ready(function() {
    $("#filmes tbody tr:odd").addClass("impar");
    $("#filmes thead tr th").each(function(i) {
        var n = i + 1;
        var nomeColuna = $(this).text();

        
    $('tr td:nth-child('+n+')').hover(function() {
        var nomeCelula = $ (this).text();
        $(this).addClass('destaque')
        .prepend('<div class="tooltip">Coluna: '+ nomeColuna +'</br>Celula: '+ nomeCelula+ '</div>');
    }, function() {
        $(this).removeClass('destaque')
        $('.tooltip').remove();
    })
    });
    })