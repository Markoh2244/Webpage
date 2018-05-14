$(document).ready(function(){
    $(".sustenance").hover(function(){
     $(this).css("background-color", "yellow");
    }, function(){
    $(this).css("background-color", "white");
        });
});

$('audio').each(function(){
    if ($(this).is(":in-viewport")) {
        $(this)[0].play();
    } else {
        $(this)[0].pause();
    }
})
$(document).ready(function(){

 

    $(window).scroll(function () {  //Listen for the window's scroll event
        if (isScrolledAfterElement("#foods")) { //if it has scrolled beyond the #content elment
            $('.navbar').fadeOut();  //Show the navigation bar
        } else {
            $('.navbar').fadeIn(); //Else hide it
        }
    });

    //Function that returns true if the window has scrolled beyond the given element
    function isScrolledAfterElement(elem) {
        var $elem = $(elem);
        var $window = $(window);

        var docViewTop = $window.scrollTop();
        var docViewBottom = docViewTop + $window.height();

        var elemTop = $elem.offset().top;

        return elemTop <= docViewBottom;
    }
});