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



let bbreak=false;


if(localStorage.getItem("travail")!==null){
    pause=localStorage.getItem("pause");
    travailR.value=localStorage.getItem("travail");
}
if(localStorage.getItem("pause")!==null){
    travail=localStorage.getItem("travail");
    pauseR.value=localStorage.getItem("pause");
   
}

let  temps=travail*60;

console.log(localStorage.getItem("pause"));
console.log(localStorage.getItem("travail"));

    let minutes = parseInt(temps / 60, 10)
    let secondes = parseInt(temps % 60, 10)
    if (minutes<10){
        minutes="0"+minutes;
    }
    if(secondes<10){
        secondes="0"+secondes;
    }
    timer.textContent = `${minutes}:${secondes}`;

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






reset.style.display='none';


// timer.textContent=travail+":"+sec;



function passerTemps(){

   
    travailH.style.color='#a9ff8a';
  let timerid =  setInterval(() => {
        let minutes = parseInt(temps / 60, 10)
        let secondes = parseInt(temps % 60, 10)
        
        // minutes = minutes < 10 ? "0" + minutes : minutes
        if (minutes<10){
            minutes="0"+minutes;
        }
        // secondes = secondes < 10 ? "0" + secondes : secondes
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


reset.addEventListener("click",()=>{
    location.reload();
});

play.addEventListener("click",()=>{
    options.style.display='none';
    play.style.display='none';
    reset.style.display='block';
   
          passerTemps();
});