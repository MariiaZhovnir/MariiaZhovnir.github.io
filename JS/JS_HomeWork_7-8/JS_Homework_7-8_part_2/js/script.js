$( document ).ready(function() {
    $('.tooltip-block').css({'left': 300, 'top': 0});

    $('.tool-item').mousemove(function( event ) {
        var hint = $(this).attr('tooltip');
        $(this).next().show().text(hint);
    }) .mouseout(function() {
        $(this).next().hide();
    });

    $( 'form' ).submit(function( event ) {
        $('.item').each(function () {
            $('.tooltip-block').show();
            event.preventDefault();
        });
    });
});
