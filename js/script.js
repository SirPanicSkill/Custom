
  // niceScroll
  $("html").niceScroll();
    
    
  




  // Menu Scroll to content and Active menu
  var lastId,
    topMenu = $("#menu"),
    topMenuHeight = topMenu.outerHeight()+145,
    menuItems = topMenu.find("a"),
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

   $('a[href*=#]').bind('click', function(e) {
	e.preventDefault();
       
	var target = $(this).attr("href");
			

	$('html, body').stop().animate({ scrollTop: $(target).offset().top-140 }, 1000, function() {

	});
			
	return false;
   });

  $(window).scroll(function(){
   var fromTop = $(this).scrollTop()+topMenuHeight;
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });

   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       menuItems
         .parent().removeClass("active")
         .end().filter("[href=#"+id+"]").parent().addClass("active");
   }                   
  });  
  

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    
    $(".footer").css( "position", "relative" );
    $(".contact").css( "marginBottom", "0" );

}
else 
{

  // FadeTo elements
  if ( $(window).width() > 1023) {  

    tiles = $("h2, h3, .column-one, .column-two, .column-three, .grid li, .contact .content .form, .contact .content .contact-text ").fadeTo(0, 0);

    $(window).scroll(function(d,h) {
      tiles.each(function(i) {
          a = $(this).offset().top + $(this).height();
          b = $(window).scrollTop() + $(window).height();
          if (a < b) $(this).fadeTo(1000,1);
      });
    });

  }

}



  //Menu mobile click
  $( ".icon" ).click(function() {
    $( " ul.menu-click" ).slideToggle( "slow", function() {
    // Animation complete.
    });
  });


$(window).load(function(){

$(".preloader").delay(1000).fadeOut("slow");

//carusel
$('.ofapp_carusel').slick({
  adaptiveHeight: true,
  arrows: false,
  autoplay: true,
  respondTo: 'slider'
});

  // Parallax
  if ($('.parallax-background').length) {
    $(".parallax-background").parallax();
  }
  
  // Parallax
  if ($('.parallax-background-partners').length) {
    $(".parallax-background-partners").parallax();
  }  

  // Move imgs patches2
    //red
    $('.upper_red_pic, .u_red_button').click(function(){
      $('.bottom_red').fadeIn(1600);
      $('.upper_red').animate({left: "-1100px"}, 1200);
    });
    $('.bottom_red_pic, .b_red_button').click(function(){
      $('.bottom_red').fadeOut(1600);
      $('.upper_red.desktop').animate({left: "194px"}, 1200);
      $('.upper_red.mobile').animate({left: "0"}, 1200);
    });
    //blue
    $('.upper_blue_pic, .u_blue_button').click(function(){
      $('.bottom_blue').fadeIn(1600).css("display","inline-block");
      $('.upper_blue').animate({left: "-1100px"}, 1200);
    });
    $('.bottom_blue_pic, .b_blue_button').click(function(){
      $('.bottom_blue').fadeOut(1600);
      $('.upper_blue.desktop').animate({left: "158px"}, 1200);
      $('.upper_blue.mobile').animate({left: "0"}, 1200);
    });
    //yellow
    $('.upper_yellow_pic, .u_yellow_button').click(function(){
      $('.bottom_yellow').fadeIn(1600);
      $('.upper_yellow.desktop').animate({right: "-1100px"}, 1200);
      $('.upper_yellow.mobile').animate({left: "-1100px"}, 1200);
    });
    $('.bottom_yellow_pic, .b_yellow_button').click(function(){
      $('.bottom_yellow').fadeOut(1600);
      $('.upper_yellow.desktop').animate({right: "230px"}, 1200);
      $('.upper_yellow.mobile').animate({left: "0"}, 1200);
    });
    //black
    $('.upper_black_pic, .u_black_button').click(function(){
      $('.bottom_black').fadeIn(1600).css("display","inline-block");
      $('.upper_black.desktop').animate({right: "-1100px"}, 1200);
      $('.upper_black.mobile').animate({left: "-1100px"}, 1200);
    });
    $('.bottom_black_pic, .b_black_button').click(function(){
      $('.bottom_black').fadeOut(1600);
      $('.upper_black.desktop').animate({right: "223px"}, 1200);
      $('.upper_black.mobile').animate({left: "0"}, 1200);
    });
});

$(function() {
  if($(window).width() <= 767) {
    $("#ofapppic").each(function() {
      $(this).attr("src", $(this).attr("src").replace("img/skin.png", "img/offapp.png"));
    });
  }
});

$(function() {
  if($(window).width() > 768) {
    $("#ofapppic").each(function() {
      $(this).attr("src", $(this).attr("src").replace("img/offapp.png", "img/skin.png"));
    });
  }
});

$(function() {
  if($(window).width() <= 767) {
    $("#jarmain").attr("src", "img/jar_mobi.gif");
    //carusel
    $('.ofapp2_carusel').slick({
      adaptiveHeight: true,
      arrows: false,
      autoplay: true,
      respondTo: 'slider'
    });
  }
});

$(function() {
  if($(window).width() > 768) {
    // Stick menu
    $(".menu").sticky({topSpacing:0});
    $('.ofapp2_carusel').removeClass('ofapp2_carusel');
    $("#jarmain").attr("src", "img/jar.gif")
  }
});