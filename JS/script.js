$(document).ready(function() {
    var $input = $('.form-input');

    $input.focusout(function() {
        if($(this).val().length > 0) {
            $(this).addClass('input-focus');
            $(this).next('.form-label').addClass('input-focus-label');
        }
        else {
        $(this).removeClass('input-focus');
            $(this).next('.form-label').removeClass('input-focus-label');
            
        }
    });
});