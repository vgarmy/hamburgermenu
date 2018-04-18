/*** Vid musklick på Bars aktiveras classen showing ***/

$(document).ready(function(){
    $(".menu-bars").on("click", function(){
        $("nav ul").toggleClass("showing");   
    });  
    
 /*** Vid musklick på länk e mneyn så plockas classen showing bort***/
        $("nav ul li").on("click", function(){
        $("nav ul").removeClass("showing");   
        });
});


$(document).scroll(function() {
   if ($(this).scrollTop() > 10){
      $('nav ul').removeClass("showing");
   } 
});