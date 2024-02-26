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
// JS--------------------------------------------
// function IncluirTarefa(){
//     let text = document.getElementById('lista_tarefas').value;
//     let list = document.getElementById('lista').innerHTML;

//     list += '<li>' +text+ "</li>";

//     document.getElementById('lista').innerHTML = list;
//     document.getElementById('lista_tarefas').value = null;
// }

function marcarTarefa(){
    const lista = document.querySelector('ul');
    $("#lista").on("click", "li", function (e) {
        $(e.target).addClass("feito");
    });
}



