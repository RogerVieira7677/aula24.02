$(document).ready(function(){

$('form').on('submit', function(e){
    e.preventDefaut();

    IncluirTarefa();
})
})
function IncluirTarefa(){
    const listaTarefa=$('#lista_tarefas').val();
    const novoItem=$('<li></li>');
    $(`<li>"${listaTarefa}"<\li>`).appendTo(novoItem);
}
