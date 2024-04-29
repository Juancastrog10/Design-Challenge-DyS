// Función para calcular el puntaje total
function calcularPuntaje() {
    var checkboxes = document.getElementsByClassName("item");
    var puntajeTotal = 0;

    // Iterar sobre los checkboxes y sumar puntos si están seleccionados
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            puntajeTotal += parseInt(checkboxes[i].value);
        }
    }

    // Mostrar el puntaje total
    document.getElementById("puntajeTotal").innerHTML = "Puntaje total: " + puntajeTotal;
}
function scrollToElement(elementId) {
    var element = document.getElementById(elementId);
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
function scrollToElement(elementId) {
    var element = document.getElementById(elementId);
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
// Función para hacer scroll hasta la tabla de puntajes al presionar la opción en la barra de navegación
function scrollToTablaPuntajes() {
    scrollToElement('tablaPuntaje');
}
