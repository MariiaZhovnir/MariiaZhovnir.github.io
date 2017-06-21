$(document).ready(function(){
    $('.tool-item').mousemove(function(event) {
        var hint = $(this).attr('tooltip');
        $('#hint').css({'left': event.clientX + 10, 'top': event.clientY + 10});
        // $("#hint").position(top:0, left:100);
        $('#hint').show().text(hint);
    }) .mouseout(function() {
        $('#hint').hide();
    });

});
