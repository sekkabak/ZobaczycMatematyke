//fade
$(document).ready(function(){
$("#overlay-odw").fadeOut("slow").hide();
});
//ustawienia mathjaxa
MathJax.Hub.Config({
    "HTML-CSS": { linebreaks: { automatic: true, width: "75% container" } }, 
    "SVG": { linebreaks: { automatic: true, width: "75% container" } } ,
    messageStyle: "none",
    showMathMenu: false, 
    displayAlign: "left",
    "HTML-CSS": {linebreaks: { automatic: false } }, });
//konfiguracja fullpaga
$(document).ready(function () {
            $(".mainWindow").fullpage({
                anchors: ["1strona", "2strona", "3strona", "4strona", "5strona", "6strona", "7strona", "8strona","9strona"],
                menu: "#spis"               
            });
        });
// ladowanie strony i bugfix
MathJax.Hub.Register.StartupHook("End",function () {
                    $("#loader").delay(1200).fadeOut("slow");
                    laststand = window.location.hash;
                    if(laststand==null|laststand==undefined|laststand==""|laststand==" ")
                    {
                    
                    }else{
                    window.location.href='index.html#1strona';
                    window.location.href=laststand;
                    }    
                    inicjacjaJul();
					inicjacjaMan();
					inicjacjaManToJul(-0.77,0.14);
					RysujCos();
					kochstart();
					sierptrjstart();
					czyscL();
                });
function toggleFullScreen() {
  if ((document.fullScreenElement && document.fullScreenElement !== null) ||    
   (!document.mozFullScreen && !document.webkitIsFullScreen)) {
    if (document.documentElement.requestFullScreen) {  
      document.documentElement.requestFullScreen();  
    } else if (document.documentElement.mozRequestFullScreen) {  
      document.documentElement.mozRequestFullScreen();  
    } else if (document.documentElement.webkitRequestFullScreen) {  
      document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);  
    }  
  } else {  
    if (document.cancelFullScreen) {  
      document.cancelFullScreen();  
    } else if (document.mozCancelFullScreen) {  
      document.mozCancelFullScreen();  
    } else if (document.webkitCancelFullScreen) {  
      document.webkitCancelFullScreen();  
    }  
  }  
}