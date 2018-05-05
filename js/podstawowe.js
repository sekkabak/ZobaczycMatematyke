var kochlicznikbak;
var kochlicznik =5;
var sierptrjlicznikbak;
var sierptrjlicznik =5;
var cantorlicznikbak;
var cantorlicznik =5;
$( document ).ready(function() {
kochcanvas = document.getElementById('canvaskoch');
ckochcanvas = kochcanvas.getContext("2d");  
Csierptrjcanvas = document.getElementById('canvassierptrj');
sierptrjcanvas = Csierptrjcanvas.getContext("2d");

});
function kochbugi(licznik){
rysujkoch(licznik,20,280,280,280);
rysujkoch(licznik,280,280,150,20);
rysujkoch(licznik,150,20,20,280);
}
function sierptrjbugi(licznik){
rysujsierptrj(licznik,150,0,0,300,300,300);
}
function rysujsierptrj(licz,oax,oay,obx,oby,ocx,ocy)
{
    var md1x,md2x,md3x,md1y,md2y,md3y;
    if(licz == 0)
    {
    sierptrjcanvas.beginPath();
    sierptrjcanvas.moveTo(oax,oay);
    
    sierptrjcanvas.lineTo(obx,oby);
    sierptrjcanvas.lineTo(ocx,ocy);
    sierptrjcanvas.fillStyle= "rgb(0,0,0)";	
    sierptrjcanvas.fill();
    }
    else
    {
        md1x = (oax + obx) / 2;
        md2x = (obx + ocx) / 2;
        md3x = (ocx + oax) / 2;
        md1y = (oay + oby) / 2;
        md2y = (oby + ocy) / 2;
        md3y = (ocy + oay) / 2;        
        

        rysujsierptrj(licz-1,md1x,md1y,md2x,md2y,obx,oby);
        rysujsierptrj(licz-1,md2x,md2y,md3x,md3y,ocx,ocy);
        rysujsierptrj(licz-1,md3x,md3y,md1x,md1y,oax,oay);
        
    }
}
function rysujkoch(licz,x1,y1,x5,y5)
{
    var x2,x3,x4,y2,y3,y4,gx,gy;
    if(licz == 0)
    {
        ckochcanvas.moveTo(x1, y1);
        ckochcanvas.lineTo(x5, y5);
        ckochcanvas.strokeStyle= "rgb(0,0,0)";	
        ckochcanvas.stroke();
    }
    else{
    gx = x5-x1;
    gy = y5-y1;
    
    x2 = x1 + gx / 3;
    y2 = y1 + gy / 3;
    
    x3 = (0.5 * (x1+x5) + Math.sqrt(3)*(y1-y5)/6);
    y3 = (0.5 * (y1+y5) + Math.sqrt(3)*(x5-x1)/6);
    
    x4 = x1 + 2 * gx /3;
    y4 = y1 + 2 * gy /3;
    
    rysujkoch(licz-1,x1,y1,x2,y2);
    rysujkoch(licz-1,x2,y2,x3,y3);
    rysujkoch(licz-1,x3,y3,x4,y4);
    rysujkoch(licz-1,x4,y4,x5,y5);
    }  

}
function sierptrjloop()
{
   setTimeout(function () { 
            if(sierptrjlicznik<=6)
            {
            sierptrjcanvas.beginPath();
            sierptrjcanvas.clearRect(0, 0, 800, 800);
            sierptrjbugi(sierptrjlicznik);
            }          
            
            sierptrjlicznik++;
            if(sierptrjlicznik==6)
            {
                sierptrjlicznik=0;
            }
            if(sierptrjlicznik<6)
            {
                sierptrjloop();
            }
            else if(sierptrjlicznik>=6)
            {
              
            }           
   }, 2000) 
}



function kochloop()
{
   setTimeout(function () { 
            if(kochlicznik<=5)
            {
            ckochcanvas.beginPath();
            ckochcanvas.clearRect(0, 0, 800, 800);
            kochbugi(kochlicznik);
            }          
            
            kochlicznik++;
            if(kochlicznik==5)
            {
                kochlicznik=0;
            }
            if(kochlicznik<5)
            {
                kochloop();
            }
            else if(kochlicznik>=5)
            {
              
            }           
   }, 2000) 
}
function kochstop()
{
    kochlicznikbak = kochlicznik;
    kochlicznik=6;
}
function kochdalej()
{
    if(kochlicznikbak != undefined || kochlicznikbak != null)
    {
    kochlicznik = kochlicznikbak;
    kochloop();
    }
}
function kochstart()
{
    kochlicznik =0;
    kochloop();
}
function sierptrjstop()
{
    sierptrjlicznikbak = sierptrjlicznik;
    sierptrjlicznik=6;
}
function sierptrjdalej()
{
    if(sierptrjlicznikbak != undefined || sierptrjlicznikbak != null)
    {
    sierptrjlicznik = sierptrjlicznikbak;
    sierptrjloop();
    }
}
function sierptrjstart()
{
    sierptrjlicznik =0;
    sierptrjloop();
}
