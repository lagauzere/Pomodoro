let play= document.getElementById("play");
let reset=document.getElementById("reset");
let timer=document.getElementById("timer");

reset.style.display='none';

let travail=0.2;
let pause= 0.1;

// timer.textContent=travail+":"+sec;

let boolean=false;

function passerTemps(x,){

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
}


reset.addEventListener("click",()=>{
    location.reload();
});

play.addEventListener("click",()=>{
    play.style.display='none';
    reset.style.display='block';
    

    if (boolean==false){
        passerTemps(travail);
        boolean = true;
    }
    else if(boolean==true){
        passerTemps(pause);
    
}
    
});