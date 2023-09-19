let play= document.getElementById("play");
let reset=document.getElementById("reset");
let timer=document.getElementById("timer");
let travailH=document.getElementById("travail");
let pauseH=document.getElementById("pause");
let travailR=document.getElementById("travailRange");
let pauseR=document.getElementById("pauseRange");


travailR.addEventListener("input",()=>{
    console.log(travailR.value);

});




timer.textContent= "";

reset.style.display='none';

let travail=25;
let pause= 5;
// timer.textContent=travail+":"+sec;

let bbreak=false;
let  temps=travail*60;
    let minutes = parseInt(temps / 60, 10)
    let secondes = parseInt(temps % 60, 10)
    if (minutes<10){
        minutes="0"+minutes;
    }
    if(secondes<10){
        secondes="0"+secondes;
    }
    timer.textContent = `${minutes}:${secondes}`;

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
    play.style.display='none';
   reset.style.display='block';
          passerTemps();
});