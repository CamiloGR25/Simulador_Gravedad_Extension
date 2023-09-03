var contador=0;
var bandera=false;
var altura;
var gravedad;
var velocidad;
var tiempo;
var pixelMetros;
function simulador(){
    a=setInterval(function(){
        document.querySelector("#objeto").style.marginTop=contador+"px";
        contador+=velocidad;
        console.log(gravedad);
        if(contador>pixelMetros){
            clearInterval(a);
            document.querySelector(".modal-body").style.marginBottom="0px";
            bandera=true
           
        }
    },pixelMetros/(tiempo*1000))
}
function guardarAltura(){
    altura=$("#altura").val();
    document.getElementById("altura").value="";
}
function ajustarDatosMercurio(){
    gravedad=3.7;
    var planeta="mercurio";
    ajustarDatos(planeta);
    
}
function ajustarDatosVenus(){
    gravedad=8.87;
    var planeta="venus";
    ajustarDatos(planeta);
}
function ajustarDatosTierra(){
    gravedad=9.807;
    var planeta="tierra";
    ajustarDatos(planeta);
}
function ajustarDatosMarte(){
    gravedad=3.71;
    var planeta="marte";
    ajustarDatos(planeta);
}
function ajustarDatosJupiter(){
    gravedad=24.79;
    var planeta="jupiter";
    ajustarDatos(planeta);
}
function ajustarDatosSaturno(){
    gravedad=10.44;
    var planeta="saturno";
    ajustarDatos(planeta);
}
function ajustarDatosUrano(){
    gravedad=8.87;
    var planeta="urano";
    ajustarDatos(planeta);
}
function ajustarDatosNeptuno(){
    gravedad=11.15;
    var planeta="neptuno";
    ajustarDatos(planeta);
}
function ajustarDatosLuna(){
    gravedad=1.62;
    var planeta="luna";
    ajustarDatos(planeta);
}
function ajustarDatos(planeta){
   document.querySelector(".modal-body").style.marginBottom="500px";
   console.log(altura);
   pixelMetros=altura*100;
   tiempo=Math.sqrt((2*altura)/gravedad);
   velocidad=gravedad*tiempo;
   if(bandera){
    document.querySelector(".modal-body").style.marginBottom="0px";
   }   
   document.getElementById("titulo").innerText=" ";
   document.getElementById("titulo").innerText="Simulador de gravedad de "+planeta+":\nAltura:  "+altura+" m\nGravedad:  "+gravedad+" m/s²\nVelocidad:  "+velocidad+" m/s\nTiempo en caer:  "+tiempo+" s";
}

function reiniciar(){
    document.querySelector(".modal-body").style.marginBottom="500px";
    contador=0;
    document.querySelector("#objeto").style.marginTop=contador+"px";
    
}
