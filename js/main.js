$(function(){


    $('#openMenu').click(function(){
        $('header nav.mobile-menu').css('right', '0')
    });

    $('#closeMenu').click(function(){
        $('header nav.mobile-menu').css('right', '-280px')
    });


})