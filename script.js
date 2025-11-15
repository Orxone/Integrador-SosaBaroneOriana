$(document).ready(function() {
    
    $('#oscuro-btn').on('click', function() {
        $('body').addClass('modo-oscuro');
    });
    
    $('#claro-btn').on('click', function() {
        $('body').removeClass('modo-oscuro');
    });
});