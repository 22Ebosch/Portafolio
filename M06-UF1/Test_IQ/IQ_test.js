
function noNone(id) {
    // Obtén todos los divs con la clase 'Preg'
    var divs = document.getElementsByClassName('Preg');

    // Recorre todos los divs
    for (var i = 0; i < divs.length; i++) {
        // Si el div es el que seleccionaste, quita la clase 'none'
        if (divs[i].id == id) {
            divs[i].classList.remove('none');
        }
        // Si no, añade la clase 'none'
        else {
            divs[i].classList.add('none');
        }
    }
}

function compruebaValor(num, bool) {
    if (bool === true) {
        //console.log('<p> La resposta de la pregunta ' + num + ' es correcta</p>');
        resposta = 'La resposta de la pregunta ' + num + ' es correcta';
    }
    else {
        //console.log('<p> La resposta de la pregunta ' + num + ' es incorrecta</p>');
        resposta = 'La resposta de la pregunta ' + num + ' es incorrecta';
    }
    document.getElementById('res_' + num).innerHTML = resposta
}




