
  // niceScroll
  $("html").niceScroll();
    
    
  // Stick menu
  $(".menu").sticky({topSpacing:0});




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

$(".preloader").delay(1000).fadeOut("slow")

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
    $('.upper_red_pic').click(function(){
      $('.bottom_red').fadeIn(1600);
      $('.upper_red').animate({left: "-1100px"}, 1200);
    });
    $('.bottom_red_pic').click(function(){
      $('.bottom_red').fadeOut(1600);
      $('.upper_red').animate({left: "194px"}, 1200);
    });
    //blue
    $('.upper_blue_pic').click(function(){
      $('.bottom_blue').fadeIn(1600).css("display","inline-block");
      $('.upper_blue').animate({left: "-1100px"}, 1200);
    });
    $('.bottom_blue_pic').click(function(){
      $('.bottom_blue').fadeOut(1600);
      $('.upper_blue').animate({left: "158px"}, 1200);
    });
    //yellow
    $('.upper_yellow_pic').click(function(){
      $('.bottom_yellow').fadeIn(1600);
      $('.upper_yellow').animate({right: "-1100px"}, 1200);
    });
    $('.bottom_yellow_pic').click(function(){
      $('.bottom_yellow').fadeOut(1600);
      $('.upper_yellow').animate({right: "259px"}, 1200);
    });
    //black
    $('.upper_black_pic').click(function(){
      $('.bottom_black').fadeIn(1600).css("display","inline-block");
      $('.upper_black').animate({right: "-1100px"}, 1200);
    });
    $('.bottom_black_pic').click(function(){
      $('.bottom_black').fadeOut(1600);
      $('.upper_black').animate({right: "241px"}, 1200);
    });    

});
