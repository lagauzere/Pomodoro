let play= document.getElementById("play");
let reset=document.getElementById("reset");
let timer=document.getElementById("timer");

reset.style.display='none';

let travail=25;
let pause= 5;

// timer.textContent=travail+":"+sec;

let bolean=0;

function passerTemps(x,y){
    let temps=x*60;
    
  let timerid=  setInterval(() => {
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
      
        timer.textContent = `${minutes}:${secondes}`
        temps = temps <= 0 ? 0 : temps - 1
      }, 1000)
      play.style.display='none';
      reset.style.display='block';
}


reset.addEventListener("click",()=>{
    location.reload();
});

play.addEventListener("click",()=>{
    passerTemps(travail);
});