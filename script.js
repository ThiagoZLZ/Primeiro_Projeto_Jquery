$(document).ready(function(){


    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function(){ 
        $('form').slideUp();
    })

    $('form').on('submit', function(evento){
        evento.preventDefault();
        const enderecoImagemNova = $('#endereço-imagem-nova').val(); // val() -- Função, Equivalente a value em javaScript 
        const novoItem = $('<li style="display:none" ></li>');
        $(`<img src="${enderecoImagemNova}"/>`).appendTo(novoItem); // appendTo - coloca o IMG dentro da variável novoItem //
        $(`<div class="overlay-imagem-link">
            <a href="${enderecoImagemNova}" title="Ver imagem em tamanho real" target="_blank">Ver imagem em tamanho real</a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul')
        $(novoItem).fadeIn(1000); // fadeIn() -- Função para surgir um elemento que está com o display none, e o tempo de surgimento no caso 1 segundo //
        $('#endereço-imagem-nova').val('')
    })

})

