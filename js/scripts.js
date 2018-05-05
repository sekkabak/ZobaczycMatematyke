//podstawowe skrypty strony
var anim01=0;
var anim02;

/*$(window).resize(function() 
{
location.reload();														
});
*/

function zamknijOdw(){
    $("#overlay-odw").fadeOut(400);
    fullPageAllowScroll();
}
function otwOdw(){
      $("#overlay-odw").fadeIn("slow").show().css("display", "block");
    fullPageBlockScroll();
    }

function fullPageBlockScroll(){
    $.fn.fullpage.setKeyboardScrolling(false);
    $.fn.fullpage.setAllowScrolling(false);
}
function fullPageAllowScroll(){
    $.fn.fullpage.setKeyboardScrolling(true);
    $.fn.fullpage.setAllowScrolling(true);
}
$("#bwodw").click(function()
{
$("#overlay-odw").fadeIn("slow").show();
$("#M_ustawienia").fadeIn("slow").show();
});




$(document).ready(function(){

$(".iconust").click(function()
    {
      $("#overlay-ust").fadeIn("slow").show();
      $("#M_ustawienia").fadeIn("slow").show();
    });
    

$("#ifsKoch").click(function()
{
window.location.href='index.html#5strona/1';
});
$("#ifsCantor").click(function()
{
window.location.href='index.html#5strona/2';
});
$("#ifsSierp").click(function()
{
window.location.href='index.html#5strona/3';
});


});


