var det,deta,detb,detc,detd,dete,detf,a,a,b,c,d,e,f,x1,x2,x3,y1,y2,y3,v1,v2,v3,u1,u2,u3,los,setx,sety;
var kkkx; //klikniecie x
var kkky; //klikniecie y
var historia = [];
var GGlicznik=0;
var B_TM=0;
var p1=250;
var p2=250;
var outcancolor = 0;
var tab1x = [];
var tab1y = [];
var tab2x = [];
var tab2y = [];
var canvas;
var canvas2;

var a_x=[];
var a_y=[];
var b_x=[];
var b_y=[];
var c_x=[];
var c_y=[];

var licznik=0;
var licznikd=0;
var licznikw=0;
var licznikt=0;
var blokada=false;

var canvas1 = document.getElementById('canvasOUT');

var ctx1 = canvas1.getContext("2d");

var Oselect;

var trojkat = "../img/trojkat.png";
var drzewko = "../img/drzewko.png";
var paprotka = "../img/paprotka.png";
var GWW;


var display_ob = document.getElementById("canvasDIS");
var DisCanvas = document.getElementById('canvasDIS');
var OutCanvas = document.getElementById('canvasOUT');
var InCanvas = document.getElementById('canvasIN');
var CDisCanvas = DisCanvas.getContext("2d");
var COutCanvas = OutCanvas.getContext("2d");
var CInCanvas = InCanvas.getContext("2d");
var context = display_ob.getContext("2d");

canvas = InCanvas;
canvas2 = OutCanvas;
DisCanvas.setAttribute('width', '400');
DisCanvas.setAttribute('height', '400');

OutCanvas.setAttribute('width', '400');
OutCanvas.setAttribute('height', '400');

InCanvas.setAttribute('width', '400');
InCanvas.setAttribute('height', '400');



var padding = $(".Gen_div").css("margin-left");
padding = parseInt(padding);
var ctx = InCanvas.getContext("2d");

$("#canvasIN").click(function(e) {
        var posX = $(this).offset().left, posY = $(this).offset().top;
        
        kx = e.pageX - posX;
	ky = e.pageY - posY;
        wstawPiksel(kx,ky);
        });
function wstawPiksel(x,y)
{
	if(B_TM<=2)
	{
	ctx.fillStyle= "rgb(0,255,0)";
	ctx.fillRect(x,y,1,1);
	tab1x[B_TM] = kx;
	tab1y[B_TM] = ky;
	B_TM++;
		if(B_TM===3)
		{
		ctx.beginPath();
		ctx.moveTo(tab1x[0], tab1y[0]);
		ctx.lineTo(tab1x[1], tab1y[1]);		
		ctx.lineTo(tab1x[2], tab1y[2]);
		ctx.lineTo(tab1x[0], tab1y[0]);
		ctx.strokeStyle= "rgb(0,255,0)";	
		ctx.stroke();
		                                   
                    GGlicznik++;
                    historia[GGlicznik] = canvas.toDataURL();
                    
		
		}
	}
	else 
	{
	ctx.fillStyle= "rgb(0,0,0)";
	ctx.fillRect(x,y,1,1);	
	tab2x[licznik]= kx;
	tab2y[licznik]= ky;	
		licznik++;
		licznikd++;
		
		if(licznikd===3&&licznikw===0)
		{
		ctx.beginPath();
		ctx.moveTo(tab2x[licznik-3], tab2y[licznik-3]);
		ctx.lineTo(tab2x[licznik-2], tab2y[licznik-2]);
		ctx.lineTo(tab2x[licznik-1], tab2y[licznik-1]);
		ctx.lineTo(tab2x[licznik-3], tab2y[licznik-3]);
		ctx.strokeStyle= "rgb(0,0,0)"; 
		ctx.stroke();
		licznikt++;
		licznikd=0;
		

		a_x[0]=tab2x[0];
		a_y[0]=tab2y[0];
		b_x[0]=tab2x[1];
		b_y[0]=tab2y[1];
		c_x[0]=tab2x[2];
		c_y[0]=tab2y[2];
		

		licznikw++;
                GGlicznik++;
                    historia[GGlicznik] = canvas.toDataURL();
		}
		else if(licznikd===3&&licznikw===1)
		{
		ctx.beginPath();
		ctx.moveTo(tab2x[licznik-3], tab2y[licznik-3]);
		ctx.lineTo(tab2x[licznik-2], tab2y[licznik-2]);
		ctx.lineTo(tab2x[licznik-1], tab2y[licznik-1]);
		ctx.lineTo(tab2x[licznik-3], tab2y[licznik-3]);
		ctx.strokeStyle= "rgb(0,0,0)"; 
		ctx.stroke();
		
		
		
		a_x[licznikt]=tab2x[licznik-3];
		a_y[licznikt]=tab2y[licznik-3];
		b_x[licznikt]=tab2x[licznik-2];
		b_y[licznikt]=tab2y[licznik-2];
		c_x[licznikt]=tab2x[licznik-1];
		c_y[licznikt]=tab2y[licznik-1];
		licznikd=0;
		licznikt++;
                GGlicznik++;
                    historia[GGlicznik] = canvas.toDataURL();            
            }
	}
}
function cofnij()
{
    if(GGlicznik>=1)
    {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        GGlicznik--;
        var imag = new Image();
        imag.onload = function() {
          ctx.drawImage(this, 0, 0);
        };
        if(GGlicznik!=0){
        imag.src = historia[GGlicznik];
        }
        console.log(GGlicznik);
        if(GGlicznik === 0)
        {
            B_TM =0;
        }       
        if(GGlicznik === 1)
        {
            licznikd=0;
            licznikt--;
            licznik--;
            licznikw--;
        }       
        if(GGlicznik === 2)
        {
            licznikd=0;
            
            licznikt--;
        }
        if(GGlicznik > 2)
        {
            licznikd=0;
            licznikt--;            
        }
        if(licznikd != 0)
        {
            licznikd=0;
        }
        
    }   
}
function log()
{
    console.log(tab1x[0]);
    console.log(tab1y[0]);
    console.log(tab1x[1]);
    console.log(tab1y[1]);
    console.log(tab1x[2]);
    console.log(tab1y[2]);
    console.log("B_TM "+B_TM);
    console.log("licznikw "+licznikw);
    console.log("GGlicznik "+GGlicznik);
    console.log("licznikt "+licznikt);
    console.log("licznikd "+licznikd); 
}
function pobierz()
{
    
	document.getElementById("hist1").value = canvas2.toDataURL();
}
function wstaw()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
        var imag = new Image();
        imag.onload = function() {
          ctx.drawImage(this, 0, 0);
        };
        imag.src = document.getElementById("hist1").value;
        blokada=true;
}
function czyscL()
{
    licznikw=0;
    licznik=0;
    licznikd=0;
    licznikt=0; 
    B_TM =0;
    GGlicznik=0;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}


/*

klikając robimy trójkąt bazowy o współrzednych x1 x2 x3

potem robimy trojkaty ktore wyznaczaj podobienstwo beda one w tablic u i v

liczbe trojkatów podobnych losujemy jeden z nich 1 podstawiamy do przeksztalcenia 

otrzymany punkt wstawiamy w canvas

*/




function licz()
{
x1 = tab1x[0];
y1 = tab1y[0];
x2 = tab1x[1];
y2 = tab1y[1];
x3 = tab1x[2];
y3 = tab1y[2];



//console.log("licznikd: "+licznikd);
//console.log("licznikw: "+licznikw);
//console.log("licznik: "+licznik);
//console.log("licznike: "+licznike);
//console.log("licznikt: "+licznikt);
//console.log(u1);
//console.log(v1);
//console.log(u2);
//console.log(v2);
//console.log(u3);
//console.log(v3);
if(outcancolor===0)
{
    ctx1.fillStyle= "rgb(0,0,0)";
}else if(outcancolor===1)
{
    ctx1.fillStyle= "rgb(255,0,0)";
}else if(outcancolor===2)
{
    ctx1.fillStyle= "rgb(0,255,0)";
}else if(outcancolor===3)
{
    ctx1.fillStyle= "rgb(0,0,255)";
}else
{
    ctx1.fillStyle= "rgb(0,0,0)";
}
for(var i=0;i<=parseFloat(document.getElementById("ODMAX").value);i++)
{
los = Math.floor((Math.random() * licznikt));

u1 = a_x[los];
v1 = a_y[los];
u2 = b_x[los];
v2 = b_y[los];
u3 = c_x[los];
v3 = c_y[los];
if(u1 == undefined || u2 == undefined || u3 == undefined || v1 == undefined || v2 == undefined || v3 == undefined)
{
    console.log("Blad wspolrzednych");
    break;
}else if(licznikt ==0 || licznikt ==1)
{
    console.log("Zbyt mało danych");
    break;
}else{
towielkiecos();
}

setx=a*p1+b*p2+e;
sety=c*p1+d*p2+f;
p1=setx;
p2=sety;       


ctx1.fillRect(Math.floor(setx),Math.floor(sety),1,1);
}

}

function towielkiecos()/* To jest rozwiązywanie ukladu rownań */
{
a1=-y1*y1*x2*x2+2*x1*y2*y2*x3-y3*y3*x2*x2-y1*y1*x3*x3+2*x1*x1*y2*y3;
a2=-y2*y2*x3*x3+2*x1*y3*y3*x2-x1*x1*y2*y2-x1*x1*y3*y3-2*x1*y2*y3*x3;
a3=-2*y2*x2*y1*x3+2*x1*y2*x2*y1+2*y2*x2*y3*x3-2*x1*y2*x2*y3+2*y2*x3*x3*y1;
a4=-2*x1*y2*x3*y1-2*y1*x2*y3*x3-2*y1*x2*x1*y3+2*y1*x2*x2*y3+2*y1*y1*x2*x3;
a5=2*x1*y3*x3*y1;
det=a1+a2+a3+a4+a5;

b1=-x1*y2*y2*u1+x1*y1*u2*y2+2*x1*y2*u1*y3-x1*u2*y2*y3-x1*y1*u2*y3;
b2=x1*u2*y3*y3-x2*y1*y1*u2+x2*y1*y1*u3+x2*y1*y2*u1-x2*y2*u1*y3;
b3=2*x2*y1*u2*y3-x2*y1*y3*u1-x2*y1*u3*y2+x2*y3*y3*u1-x2*y1*y3*u3;
b4=x2*y3*y2*u3-x2*y3*y3*u2-x1*y3*y3*u1-x1*y1*u3*y2+x1*u3*y2*y2;
b5=x1*y1*u3*y3-x1*u3*y2*y3+x3*y1*y1*u2-x3*y1*y1*u3-x3*y1*y2*u1;
b6=-x3*y2*u1*y3-x3*y1*u2*y3+x3*y1*y3*u1+2*x3*y1*u3*y2-x3*y2*y2*u3;
b7=x3*y2*y2*u1-x3*y1*y2*u2+x3*y2*u2*y3;
deta=b1+b2+b3+b4+b5+b6+b7;

c1=2*u2*x1*y2*x3-u3*x1*x1*y3+u1*x2*x1*y2-u2*x1*y3*x3+u2*x1*x1*y3;
c2=-u2*x1*x1*y2-x1*x3*y2*u3-u1*x2*y3*x3-u1*x2*x1*y3+x1*x3*y1*u3;
c3=x3*x3*y1*u2+u1*x3*x1*y3-x1*x3*y1*u2-x3*y1*u3*x2-x3*x3*y1*u1;
c4=-x3*x3*y2*u2+x3*x3*y2*u1+x2*y3*u2*x3+2*x1*x2*y3*u3-x2*x2*y3*u3;
c5=-x1*x2*y1*u3-x2*x2*y1*u1-u1*x3*x1*y2+x2*x2*y3*u1+x2*x2*y1*u3;
c6=2*x2*y1*u1*x3+x1*x2*y1*u2+u3*x1*x1*y2-u3*x1*y2*x2-x1*x2*y3*u2;
c7=-x2*y1*u2*x3+x3*y2*x2*u3-u1*x2*y2*x3;
detb=c1+c2+c3+c4+c5+c6+c7;

d1=-y2*y2*x1*v1+y2*y2*x1*v3-x1*y3*y3*v1+x1*y3*y3*v2-y3*y3*v2*x2;
d2=x1*y3*v3*y1-y3*v3*y1*x2-x1*y3*v3*y2+y3*v3*y2*x2-y1*x3*v1*y2;
d3=y1*x3*v1*y3+y1*y1*x3*v2-y1*x3*v2*y3-y1*y1*x3*v3+y2*y2*v1*x3;
d4=2*y2*x1*v1*y3+y2*x1*v2*y1-y2*x1*v2*y3-y2*v1*y3*x3+y2*v2*y3*x3;
d5=-y2*x1*v3*y1+2*y2*v3*y1*x3-y2*y2*v3*x3+2*y1*x2*v2*y3+y1*y1*x2*v3;
d6=-y1*x2*v3*y2-y3*v1*y2*x2+y3*y3*v1*x2-x1*y3*v2*y1-y2*v2*y1*x3;
d7=y1*x2*v1*y2-y1*x2*v1*y3-y1*y1*x2*v2;
detc=d1+d2+d3+d4+d5+d6+d7;

e1=-y2*x1*x1*v2+y2*x1*x1*v3+x1*x1*y3*v2-x1*x1*y3*v3-x1*y3*x2*v1;
e2=y3*x2*x2*v1-y3*x2*x2*v3+x1*y3*x3*v1-y3*x2*x3*v1-x1*y3*v2*x3;
e3=y2*x2*v3*x3+y3*x3*v2*x2-y2*x1*x2*v3-y1*x3*x1*v2+y1*x3*x1*v3;
e4=-y1*x3*x3*v1+y1*x3*x3*v2-y2*x1*x3*v1+y2*x3*x3*v1-y2*x3*x3*v2;
e5=y1*x2*x1*v2-y1*x2*v2*x3-y1*x2*x1*v3-y1*x2*v3*x3-y1*x2*x2*v1;
e6=y1*x2*x2*v3+2*y1*x2*x3*v1-x1*y3*v2*x2+2*y2*x1*v2*x3-y2*x1*v3*x3;
e7=y2*x1*x2*v1-y2*x2*x3*v1+2*x1*y3*x2*v3;

detd=e1+e2+e3+e4+e5+e6+e7;

f1=-x1*x1*y3*y3*u2-y2*y2*x1*x1*u3+x1*y3*y3*u1*x2-x1*y3*x2*y1*u2;
f2=y3*x2*x2*y1*u1+x1*y3*y3*x2*u2-y3*y3*x2*x2*u1+2*x1*y3*x3*y1*u2;
f3=-x1*y3*x3*y2*u2-y1*x3*x1*y2*u2+y1*y1*x3*x2*u2-y1*x3*x2*y3*u2;
f4=-y1*y1*x3*x3*u2+y1*x3*x3*y2*u2-y1*x2*x1*y3*u3-y1*x2*y3*u1*x3;
f5=-y1*y1*x2*x2*u3+y1*x2*x2*y3*u3+y1*y1*x2*x3*u3-y1*x2*x3*y2*u3;
f6=x1*x1*y3*y2*u2-x1*y3*y2*u1*x2+y2*y2*x1*u1*x3+y2*x1*x1*y3*u3;
f7=-y2*x1*y3*u1*x3+2*y2*x1*x2*y1*u3-y2*x2*y1*u1*x3-y2*x1*x2*y3*u3;
f8=2*y2*x2*y3*u1*x3-y2*x1*x3*y1*u3+y2*x3*x3*y1*u1+y2*y2*x1*x3*u3-y2*y2*x3*x3*u1;

dete=f1+f2+f3+f4+f5+f6+f7+f8;

g1=-y2*y2*x1*x1*v3-y2*y2*x3*x3*v1-y1*x2*x1*y3*v2-y1*x2*y3*v2*x3;
g2=-y1*y1*x2*x2*v3+y1*x2*x2*y3*v1+y1*y1*x2*x3*v2-y1*x2*x3*y2*v1;
g3=y2*y2*x1*v3*x3+y2*x1*x1*y3*v2-y2*x1*y3*v2*x3+x1*x1*y3*y2*v3;
g4=x1*y3*y3*v2*x2-x1*y3*y2*v3*x2-x1*y3*x2*y1*v3+y3*x2*x2*y1*v3;
g5=x1*y3*y3*x2*v1-y3*y3*x2*x2*v1+2*x1*y3*x3*y1*v2-x1*y3*x3*y2*v1;
g6=-y1*x3*x1*y2*v3+y1*y1*x3*x2*v3-y1*x3*x2*y3*v1-y1*y1*x3*x3*v2;
g7=y1*x3*x3*y2*v1+2*y2*x1*x2*y1*v3-y2*x2*y1*v3*x3-y2*x1*x2*y3*v1;
g8=2*y2*x2*y3*v1*x3-y2*x1*x3*y1*v2+y2*y2*x1*x3*v1-x1*x1*y3*y3*v2+y2*x3*x3*y1*v2;

detf=g1+g2+g3+g4+g5+g6+g7+g8;

a= deta/det;
b= detb/det;
c= detc/det;
d= detd/det;
e= dete/det;
f= detf/det;

/*
console.log(det);
console.log(deta);
console.log(detb);
console.log(detc);
console.log(detd);
console.log(dete);
console.log(detf);





console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
*/
}
function czyscP()
{
    ctx1.clearRect(0, 0, canvas.width, canvas.height);
}
function Czmien()
{
    
    Cselect = document.getElementById("Czmien").selectedIndex;
    if(Cselect==0)
    {
        outcancolor=0;
    }else if(Cselect==1)
    {
        outcancolor=1;
    }else if(Cselect==2)
    {
        outcancolor=2;
    }else if(Cselect==3)
    {
        outcancolor=3;
    }else
    {
        outcancolor=0;
    }
}
function wstaw_obrazek()
{
    context.clearRect(0, 0, canvas.width, canvas.height);
    var imag = new Image();
    imag.onload = function() {
    context.drawImage(imag, 0, 0);
    };

        imag.src = GWW;
  }