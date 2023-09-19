
//declaration des variables d'aplications
let play= document.getElementById("play");
let reset=document.getElementById("reset");
let timer=document.getElementById("timer");
let travailH=document.getElementById("travail");
let pauseH=document.getElementById("pause");
let travailR=document.getElementById("travailRange");
let pauseR=document.getElementById("pauseRange");
let options=document.getElementById("options");
let displayPause=document.getElementById("vpause");
let travail=25;
let pause= 5;
let bbreak=false;


reset.style.display='none';//le bouton reset est caché jusqu'à ce que l'utilisateur lance le chrono


//affichage du temps de la pause en minute:seconde
let Vdpause=60*pause;
let minutesp = parseInt(Vdpause / 60, 10);
let secondesp = parseInt(Vdpause % 60, 10);
if (minutesp<10){
    minutesp="0"+minutesp;
}
if(secondesp<10){
    secondesp="0"+secondesp;
}
displayPause.textContent = `${minutesp}:${secondesp}`;

//recuperation des variables locales du temps de travail et du temps de pause
if(localStorage.getItem("pause")!==null){
    pause=localStorage.getItem("pause");
    pauseR.value=localStorage.getItem("pause");
    Vdpause=60*pause;
    minutesp = parseInt(Vdpause / 60, 10);
    secondesp = parseInt(Vdpause % 60, 10);
    if (minutesp<10){
        minutesp="0"+minutesp;
    }
    if(secondesp<10){
        secondesp="0"+secondesp;
    }
    displayPause.textContent = `${minutesp}:${secondesp}`;


}

if(localStorage.getItem("travail")!==null){
    travail=localStorage.getItem("travail");
    travailR.value=localStorage.getItem("travail");
}

let  temps=travail*60;//declaration de la variable temps 


    let minutes = parseInt(temps / 60, 10)
    let secondes = parseInt(temps % 60, 10)
    if (minutes<10){
        minutes="0"+minutes;
    }
    if(secondes<10){
        secondes="0"+secondes;
    }
    timer.textContent = `${minutes}:${secondes}`;
    //affichage du temps dans le timer centrale




    //récupération des valeurs des ranges  (de base ces valeurs sont 25 pour le travail et 5 pour la pause sauf si il y a des variables locales)
travailR.addEventListener("input",()=>{
    localStorage.setItem("travail",travailR.value);
    travail=travailR.value
    temps=travail*60;
    minutes = parseInt(temps / 60, 10)
    secondes = parseInt(temps % 60, 10)
    if (minutes<10){
        minutes="0"+minutes;
    }
    if(secondes<10){
        secondes="0"+secondes;
    }
    timer.textContent = `${minutes}:${secondes}`;


});

pauseR.addEventListener("input",()=>{
    localStorage.setItem("pause",pauseR.value);
    
    pause=pauseR.value
   
    Vdpause=60*pause;
    minutesp = parseInt(Vdpause / 60, 10);
    secondesp = parseInt(Vdpause % 60, 10);
    if (minutesp<10){
        minutesp="0"+minutesp;
    }
    if(secondesp<10){
        secondesp="0"+secondesp;
    }
    displayPause.textContent = `${minutesp}:${secondesp}`;
});



//cette fonction fait defiler le temps du timer 
function passerTemps(){

   
travailH.style.color='#a9ff8a';
  let timerid =  setInterval(() => {
        let minutes = parseInt(temps / 60, 10)
        let secondes = parseInt(temps % 60, 10)
        
       
        if (minutes<10){
            minutes="0"+minutes;
        }
        
        if(secondes<10){
            secondes="0"+secondes;
        }
        
        timer.textContent = `${minutes}:${secondes}`;
        temps = temps-1;
        console.log(temps);
        if(temps==-1){
            bbreak=!bbreak;
            if (bbreak==true){
                temps=pause*60;
                travailH.style.color='white';
                pauseH.style.color='#a9ff8a';
            }
            if(bbreak==false){
                temps=travail*60;
                travailH.style.color='#a9ff8a';
                pauseH.style.color='white';
            }
        }

      }, 1000)
}

//quand le bouton reload est clické, la page est rechargé 
reset.addEventListener("click",()=>{
    location.reload();
});


//quand le bouton play est cliqué, il est remplacé par le bouton reset et le compteur est lancé.
play.addEventListener("click",()=>{
    options.style.display='none';
    play.style.display='none';
    reset.style.display='block';
   
          passerTemps();
});