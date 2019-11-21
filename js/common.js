$(document).ready(function() {

    $('.popap').magnificPopup({type:'image'});

    $(".top-text h1").animated("fadeInDown", "fadeOutUp");
    $(".top-text p, .section-header").animated("fadeInUp", "fadeInDown");

    $(".animation-1").animated("fadeInLeft", "fadeOutLeft");
    $(".animation-3").animated("fadeInRight", "fadeOutRight");
    $(".animation-2").animated("flipInY", "flipOutY");

    function heigthDetect(){
        $(".main-heaer").css("height", $(window).height());
    };
    heigthDetect();
    $(window).resize(function(){
    heigthDetect();   
    });

    function heigthDetectTwo(){
        $("#about").css("height", $(window).height());
    };
    heigthDetectTwo();
    $(window).resize(function(){
    heigthDetectTwo();   
    });

$(".toggle-menu").click(function(){
    if($(".top-menu").is(":visible")){
        $(".top-text").removeClass("h-opacity");
        $(".top-menu").fadeOut("600");
        $(".top-menu li a").removeClass("fadeInUp animated");
    } else (
        $(".top-text").addClass("h-opacity"),
        $(".top-menu").fadeIn("600"),
        $(".top-menu li a").addClass("fadeInUp animated")
    );
    });	
});
$(window).load(function() { 
	$(".loader-inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});