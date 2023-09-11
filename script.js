let button= document.getElementById("play");
let timer=document.getElementById("timer");


let travail=25;
let pause= 5;

// timer.textContent=travail+":"+sec;




button.addEventListener("click",()=>{
    let temps=travail*60;
    
    setInterval(() => {
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


});