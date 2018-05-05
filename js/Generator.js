var szerokosc,wysokosc,ratioX,ratioY,q_x,g_y,z_x,z_y,d_x,d_y,licznik; 
var CGenCanvas;
var maxX = 2;
var maxY = 2;
var minX = -2;
var minY = -2;
var a_xT=250;
var a_yT=0;
var b_xT=0;
var b_yT=500;
var c_xT=500;
var c_yT=500;
var n_xT=250;
var n_yT=250;




function inicjacjaJul(){
	
	k_rz = parseFloat(document.getElementById("Crze").value);
	k_ur = parseFloat(document.getElementById("Curo").value);
	
	licznikmax = parseFloat(document.getElementById("IteracjaJul").value);
	
	Kolorek = document.getElementById("kolor2").selectedIndex;
	
    
        GenCanvas = document.getElementById("canvasJulia");
        CGenCanvas = GenCanvas.getContext("2d");
        szerokosc = GenCanvas.width;
        wysokosc = GenCanvas.height;
	
    CGenCanvas.clearRect(0, 0, szerokosc, wysokosc);
	
    ratioX = (maxX - minX) / szerokosc;
    ratioY = (maxY - minY) / wysokosc;
    obraz = CGenCanvas.createImageData(szerokosc, wysokosc);  
    RysujJul2(k_rz,k_ur);
}


function RysujJul2(kg_rz,kg_ur) {
    for (var x = 0; x < szerokosc; x++) {
        d_x = x * ratioX + minX;
        for (var y = 0; y < wysokosc; y++) {
            d_y = y * ratioY + minY;                 
			poziom = (y * wysokosc + x) * 4;
			obraz.data[poziom + 3] = 255;
			licznik = 0;
            z_x = d_x;
			z_y = d_y;
            do {
				q_x = z_x * z_x - z_y * z_y + kg_rz;
				q_y = 2 * z_x * z_y + kg_ur;	
				z_x = q_x;
				z_y = q_y;				
				licznik++;
				} while ((z_x * z_x + z_y * z_y) <= 4 && licznik < licznikmax);
			Kolorowanie(licznik);
			obraz.data[poziom + 0] = C_wyj.r;
            obraz.data[poziom + 1] = C_wyj.g;
            obraz.data[poziom + 2] = C_wyj.b;		
        }
    }
  
    CGenCanvas.putImageData(obraz, 0, 0);
}

function inicjacjaMan(){
	

	
	licznikmax = parseFloat(document.getElementById("IteracjaMan").value);
	
	Kolorek = document.getElementById("kolor3").selectedIndex;
	
    
        GenCanvas = document.getElementById("canvasMan");
        CGenCanvas = GenCanvas.getContext("2d");
        szerokosc = GenCanvas.width;
        wysokosc = GenCanvas.height;
	
    CGenCanvas.clearRect(0, 0, szerokosc, wysokosc);
	
    ratioX = (maxX - minX) / szerokosc;
    ratioY = (maxY - minY) / wysokosc;
    obraz = CGenCanvas.createImageData(szerokosc, wysokosc);  
    RysujMan2();
}
function inicjacjaManToJul(k_rz,k_ur){
	
	licznikmax = parseFloat(document.getElementById("IteracjaMan").value);
	Kolorek = document.getElementById("kolor3").selectedIndex;
	
    
        GenCanvas = document.getElementById("MandelToJul");
        CGenCanvas = GenCanvas.getContext("2d");
        szerokosc = GenCanvas.width;
        wysokosc = GenCanvas.height;
	
    
	
    ratioX = (maxX - minX) / szerokosc;
    ratioY = (maxY - minY) / wysokosc;
    obraz = CGenCanvas.createImageData(szerokosc, wysokosc);  
    RysujJul2(k_rz,k_ur);
}


function RysujMan2() {
    for (var x = 0; x < szerokosc; x++) {
        k_rz = x * ratioX + minX;
        for (var y = 0; y < wysokosc; y++) {
            k_ur = y * ratioY + minY;           
            q_x = 0;
			q_y = 0;       
			poziom = (y * wysokosc + x) * 4;
			obraz.data[poziom + 3] = 255;
			licznik = 0;
            do {
				d_x = q_x;
				d_y = q_y;
				q_x = q_x * q_x - q_y * q_y + k_rz;
				q_y = 2 * d_x * d_y + k_ur;				
				licznik++;
				} while ((q_x * q_x + q_y * q_y) <= 4 && licznik < licznikmax);
			Kolorowanie(licznik);
			obraz.data[poziom + 0] = C_wyj.r;
            obraz.data[poziom + 1] = C_wyj.g;
            obraz.data[poziom + 2] = C_wyj.b;		
        }
    }
    CGenCanvas.putImageData(obraz, 0, 0);
}
$("#canvasMan").click(function(e) {
        var posX = $(this).offset().left, posY = $(this).offset().top;
        Xmouse = e.pageX - posX;
        Ymouse = e.pageY - posY;
	X_n = (Xmouse - (szerokosc))/(szerokosc)*2;
	Y_n = ((wysokosc) - Ymouse)/(wysokosc)*2;
	document.getElementById("OutX2").value = X_n;
	document.getElementById("OutY2").value = Y_n;        
	inicjacjaManToJul(X_n,Y_n);

        });
////////////////////////////////////////////////////////
////////////////////////sierp///////////////////////////
////////////////////////////////////////////////////////
function RysujCos(){
    gwccanvas = document.getElementById("grawchaos");
    gCGenCanvas = gwccanvas.getContext("2d");
    licznikmax = parseFloat(document.getElementById("IteracjaChaos").value);
    pixel = gCGenCanvas.createImageData(1, 1);
    ob = pixel.data;
    
    C_wyj = {
		r: 0,
		g: 0,
		b: 0
	};
    
	gCGenCanvas.clearRect(0,0,gwccanvas.width,gwccanvas.height);
	
	for(x = 0;x<=licznikmax;x++)
	{
	LL = Math.floor((Math.random() * 3) + 1);
	var Llicznik=0;
	switch(LL)
	{
		case 1:		
			n_xT=(n_xT+a_xT)/2;
			n_yT=(n_yT+a_yT)/2;
			wstawpiksel1(n_xT,n_yT);
			
		break;
		case 2:
			n_xT=(n_xT+b_xT)/2;
			n_yT=(n_yT+b_yT)/2;
			wstawpiksel1(n_xT,n_yT);
		break;
		case 3:
			n_xT=(n_xT+c_xT)/2;
			n_yT=(n_yT+c_yT)/2;
			wstawpiksel1(n_xT,n_yT);
		break;
	}
	}
}

	//KOLORY

function Kolorowanie(l) {	
	switch(Kolorek)
	{
		case 0:
		C_wyj = {
		r: l % 45 * 5,
		g: l % 37 * 6,
		b: l % 128 * 2
		};
		break;
		case 1:
		C_wyj = {
		r: l % 45 * 5,
		g: l % 128 * 2,
		b: l % 128 * 2
		};
		break;
		case 2:
		C_wyj = {
		r: l % 128 * 2,
		g: l % 128 * 1,
		b: l % 37 * 5
		};
		break;
		case 3:
		C_wyj = {
		r: l % 128 * 2,
		g: l % 37 * 5,
		b: l % 128 * 2
		};
		break;
	}	
}
function wstawpiksel1(x, y) {
    ob[0] = C_wyj.r;
    ob[1] = C_wyj.g;
    ob[2] = C_wyj.b;	
    ob[3] = 255;
    gCGenCanvas.putImageData(pixel, x, y);
}
