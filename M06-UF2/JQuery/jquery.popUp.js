// Definir la función para crear el pop-up

var popupHtml;
jQuery.fn.createPopup = function (x,y) {
    popupHtml =`
    <div class="fondo">
    <div class="popUp" style="width:`+ x + `px; height: `+ y +`px;">
        <form>
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre"><br>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email"><br>
            <button id="enviarBtn" type="submit">Cancelar</button>
        </form>
    </div>
    </div>
    `;
    return this;
};
jQuery.fn.mostrarPopup = function () {
    $("body").prepend(popupHtml);
    $(document).on('scroll', function () {
        // Prevenir el comportamiento por defecto del evento scroll
        $(document).scrollTop(0);
    });   
}

jQuery.fn.quitarPopup = function () {
    // Eliminar el contenido del pop-up del DOM
    $(".fondo").remove();
};

$(document).on('click', '#enviarBtn', function () {
    $(this).closest('.fondo').remove(); // Eliminar el pop-up
    $(document).off('scroll');
});


