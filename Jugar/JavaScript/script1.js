document.getElementById('player').addEventListener("mouseover",sumarPuntos);

puntos = 0;
tiempo = 30;
necesarios = 20;
function sumarPuntos(){
   puntos++;
   document.getElementById("puntos").innerHTML = "Puntos: <b>" + puntos + "/" + necesarios + "  </b>";
   randNum =  Math.round(Math.random()*400);
   randNum2 =  Math.round(Math.random()*400);
   document.getElementById("player").style.marginTop =randNum + "px";
   document.getElementById("player").style.marginLeft =randNum2 + "px";
   if (puntos == 20) {
      alert("GANASTE EL NIVEL 1"+"\n"+"AHORA PASAS AL NIVEL 2");
       window.location="nivel2.html";
   }
}


function restarTiempo() {
   tiempo--;
   document.getElementById("tiempo").innerHTML = "&nbsp;&nbsp;&nbsp;Tiempo: "+tiempo; 
   if (tiempo == 0) {
      alert("PERDISTE EL NIVEL 1"+"\n"+"AHORA JUEGAS OTRA VEZ EN NIVEL 1");
      window.location="nivel1.html";
      tiempo = 0;
      puntos = 0;
   }

}

setInterval(restarTiempo,1000);