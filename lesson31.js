const countdownTimer = document.getElementById('countdown-timer');
const page = document.querySelector('.page');
const text = document.querySelector('.page-main-content');




page.style.width='100%';
page.style.height='680px';
page.style.background='AFD0D6';


text.style.textAlign='center';
text.style.paddingTop='150px';
text.style.marginBottom='100px';
text.style.textTransform='uppercase';
text.style.fontWeight='bold';
text.style.letterSpacing='5px';
text.style.textDecoration='double';




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