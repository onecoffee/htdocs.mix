$(".navclass a").click(function(){
  $(".dropdown-container").slideToggle();
});

(function($){
  $(window).load(function(){
    $("#dropdown-menu").mCustomScrollbar({
      axis:"x",
      scrollInertia:950,
      contentTouchScroll:25,
      theme:"light",        
      advanced:{
          autoExpandHorizontalScroll:true,
          autoScrollOnFocus:"input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
          updateOnContentResize:true,
          updateOnSelectorLength:true
        }
    });
  });
})(jQuery);
