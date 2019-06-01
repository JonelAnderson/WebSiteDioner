document.getElementById('player').addEventListener("mouseover",sumarPuntos);

puntos = 0;
tiempo = 40;
necesarios = 70;
function sumarPuntos(){
   puntos++;
   document.getElementById("puntos").innerHTML = "Puntos: <b>" + puntos + "/" + necesarios + "  </b>";
   randNum =  Math.round(Math.random()*400);
   randNum2 =  Math.round(Math.random()*400);
   document.getElementById("player").style.marginTop =randNum + "px";
   document.getElementById("player").style.marginLeft =randNum2 + "px";
   if (puntos == 70) {
      alert("        FELICITACIONES"+"\n"+"PASASTES LOS 5 NIVELES");
       window.location="Dioner_Plantilla.html";
   }
}


function restarTiempo() {
   tiempo--;
   document.getElementById("tiempo").innerHTML = "&nbsp;&nbsp;&nbsp;Tiempo: "+tiempo; 
   if (tiempo == 0) {
      alert("PERDISTE EL NIVEL 5"+"\n"+"VUELVES A JUGAR EL NIVEL 5");
      window.location="nivel5.html";
      tiempo = 0;
      puntos = 0;
   }
}

setInterval(restarTiempo,1000);