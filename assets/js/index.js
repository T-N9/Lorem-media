$(document).ready(function(){
    let screenHeight=$(window).height();
    console.log(screenHeight);

    $(window).scroll(function () {
        let currentPos=$(this).scrollTop();
        // console.log(currentPos);

        if(currentPos>=screenHeight-300){
            $('.site-nav').addClass('site-nav-scroll');
        }
        else{
            $('.site-nav').removeClass('site-nav-scroll');
            navActive('home');
            $("#up-link").removeClass('d-block');
            $("#up-link").addClass('d-none');
        }
    });

    $('.navbar-toggler').click(function () {
        let result=$('.navbar-collapse').hasClass('show');
        console.log(result);

        if(result){
            $('.menu-icon').removeClass('fas fa-times').addClass('fa fa-bars');
        }
        else{
            $('.menu-icon').removeClass('fa fa-bars').addClass('fas fa-times');
            
        }
    });
    
        var waypoint = new Waypoint({
        element: document.getElementById('introduce'),
        handler: function(direction) {
          $("#up-link").removeClass('d-none');
          $("#up-link").addClass('d-block');
        },
        offset: '0px'
        });
    function navActive(current){
        $(`.nav-link`).removeClass("nav-a");
        $(`.nav-link[href='#${current}']`).addClass("nav-a");
    }
    function navScroll(){
        let currentSec=$("section[id]");
        currentSec.waypoint(function(direction){
            if(direction=="down"){
                let currentId=$(this.element).attr('id');
                console.log(currentId);
                navActive(currentId);
            }
        },{offset:'0px'});
        currentSec.waypoint(function(direction){
            if(direction=="up"){
                let currentId=$(this.element).attr('id');
                console.log(currentId);
                navActive(currentId);
            }
        },{offset:'-10px'});
    }

    navScroll();

        new WOW().init();
        $(".price-slide").slick({
            // centerMode: true,
            // centerPadding: '60px',
            arrows:false,
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 3,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        $(window).on("load",function(){
            $(".loader-page").fadeOut(500,function(){
                this.remove();
            });
        });
    
});