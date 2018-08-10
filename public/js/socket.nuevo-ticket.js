// Comando para establecer la conexion

var socket = io();
var label = $('#lblNuevoTicket');

socket.on('connect', () => {
    console.log('Usuario conectado');
});


socket.on('disconnect', () => {
    console.log('Usuario desconectado');
});


$('button').on('click', function() {
    socket.emit('siguienteTicket', null, function(siguienteTicket) {
        label.text(siguienteTicket);
    });
})