// alert('hello');
$(document).ready(function() {
    $( '.dropdown' ).hover(
        function(){
            $(this).children('.submenu').slideDown();
        },
        function(){
            $(this).children('.submenu').slideUp();
        }
    );
});
