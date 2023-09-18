let play= document.getElementById("play");
let reset=document.getElementById("reset");
let timer=document.getElementById("timer");
let travailH=document.getElementById("travail");
let pauseH=document.getElementById("pause");
timer.textContent= "";

reset.style.display='none';

let travail=0.2;
let pause= 0.1;

// timer.textContent=travail+":"+sec;

let bbreak=false;
let temps=0;

function passerTemps(){
    timer.textContent= "";
     temps=travail*60;
    
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
                travailH.style.color='black';
                pauseH.style.color='green';
            }
            if(bbreak==false){
                temps=travail*60;
                travailH.style.color='green';
                pauseH.style.color='black';
            }
        }

      }, 1000)
}


reset.addEventListener("click",()=>{
    location.reload();
});

play.addEventListener("click",()=>{
    play.style.display='none';
   reset.style.display='block';
          passerTemps();
});