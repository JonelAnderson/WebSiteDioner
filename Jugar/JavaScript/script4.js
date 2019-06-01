document.getElementById('player').addEventListener("mouseover",sumarPuntos);

puntos = 0;
tiempo = 30;
necesarios = 55;
function sumarPuntos(){
   puntos++;
   document.getElementById("puntos").innerHTML = "Puntos: <b>" + puntos + "/" + necesarios + "  </b>";
   randNum =  Math.round(Math.random()*400);
   randNum2 =  Math.round(Math.random()*400);
   document.getElementById("player").style.marginTop =randNum + "px";
   document.getElementById("player").style.marginLeft =randNum2 + "px";
   if (puntos == 55) {
      alert("GANASTE EL NIVEL 4"+"\n"+"AHORA PASAS AL NIVEL 5");
       window.location="nivel5.html";
   }
}


function restarTiempo() {
   tiempo--;
   document.getElementById("tiempo").innerHTML = "&nbsp;&nbsp;&nbsp;Tiempo: "+tiempo; 
   if (tiempo == 0) {
      alert("PERDISTE EL NIVEL 4"+"\n"+"VUELVES A JUGAR EL NIVEL 4");
      window.location="nivel4.html";
      tiempo = 0;
      puntos = 0;
   }
}

setInterval(restarTiempo,1000);