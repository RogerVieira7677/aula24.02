$(document).ready(function(){
$('form').on('submit', function(e){
    e.preventDefault();

    IncluirTarefa();
    marcarTarefa();
})
})

function IncluirTarefa(){
    const itemTafera = $('#lista_tarefas').val();
    const novaTarefa = $('<li></li>');
    $(`<li>${itemTafera} </li>`).appendTo(novaTarefa);
    $(novaTarefa).appendTo('ul');
    $('#lista_tarefas').val('');
}

function marcarTarefa(){
const lista = document.getElementById('lista');
    
    $('lista').click(function(){
        lista.classList('feito');
    })    
}

