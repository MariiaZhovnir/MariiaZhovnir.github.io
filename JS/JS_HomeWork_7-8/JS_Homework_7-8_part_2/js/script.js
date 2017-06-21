$( document ).ready(function() {
    $('.tooltip-block').css({'left': 300, 'top': 0});

    $('.tool-item').mousemove(function( event ) {

        var hint = $(this).attr('tooltip');
        $('.tooltip-block').show().text(hint);
    }) .mouseout(function() {
        $('.tooltip-block').hide();
    });

    $( '#help-button' ).click(function( event ) {
        $('.item').each(function(){
            $('.tooltip-block').show().text($('.tool-item').attr('tooltip'));

        });
    });
});
