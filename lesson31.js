

const countdownTimer=document.getElementById('countdown-timer');


const targetDate= new Date('January 1, 2024 00:00:00').getTime();


function updateTimer() {


  const now = new Date().getTime();


  const difference =  targetDate-now;


  const days = Math.floor (difference/(1000*60*60*24));
  const hours = Math.floor ((difference % (1000 * 60*60*24))/(1000*60*60));
  const minutes = Math.floor ((difference %(1000*60*60))/(1000*60));
  const seconds = Math.floor ((difference %(1000*60))/1000);


  countdownTimer.style.textAlign='center';
  countdownTimer.style.fontWeight='bold';
  countdownTimer.style.fontSize='32px';
  countdownTimer.innerHTML= `${days}д. ${hours}год. ${minutes}хв. ${seconds}сек.`;
  
  if(difference <0) {
    countdownTimer.innerHTML="Новий рік!"; 

    }
}
  

setInterval (updateTimer, 1000);