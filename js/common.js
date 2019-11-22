$(document).ready(function() {
    
    $("#portfolio-grid").mixItUp();

    $(".s-portfolio li").click(function(){
        $(".s-portfolio li").removeClass("active");
            $(this).addClass("active");
});

    $('.popap').magnificPopup({type:'image'});
    $('.popap-content').magnificPopup({type:'inline'});

    $(".top-text h1").animated("fadeInDown", "fadeOutUp");
    $(".top-text p, .section-header").animated("fadeInUp", "fadeInDown");

    $(".animation-1").animated("fadeInLeft", "fadeOutLeft");
    $(".animation-3").animated("fadeInRight", "fadeOutRight");
    $(".animation-2").animated("flipInY", "flipOutY");

    $(".left .resume-items").animated("fadeInLeft","fadeOutDown")
    $(".right .resume-items").animated("fadeInRight", "fadeOutDown");

    function heigthDetect(){
        $(".main-heaer").css("height", $(window).height());
    };
    heigthDetect();
    $(window).resize(function(){
    heigthDetect();   
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
$(".portfolio-item").each(function(i){
    $(this).find("a").attr("href","#work-" + i);
    $(this).find(".port-discr").attr("id", "work-"+ i);
});
    
});
$(window).load(function() { 
	$(".loader-inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});