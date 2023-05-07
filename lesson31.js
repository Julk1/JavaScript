constcountdownTimer=document.getElementById('countdown-timer');
constpage=document.querySelector('.page');
consttext=document.querySelector('.page-main-content');




page.style.width='100%';
page.style.height='670px';
page.style.background='red';


text.style.textAlign='center';
text.style.paddingTop='150px';
text.style.marginBottom='100px';
text.style.textTransform='uppercase';
text.style.fontWeight='bold';
text.style.letterSpacing='5px';
text.style.textDecoration='underline';




consttargetDate=newDate('January 1, 2024 00:00:00').getTime();


function updateTimer() {


  constnow=newDate().getTime();


  constdifference=targetDate-now;


  constdays=Math.floor (difference/(1000*60*60*24));
  consthours=Math.floor ((difference % (1000 * 60*60*24))/(1000*60*60));
  constminutes=Math.floor((difference %(1000*60*60))/(1000*60));
  constseconds=Math.floor((difference %(1000*60))/1000);


  countdownTimer.style.textAlign='center';
  countdownTimer.style.fontWeight='bold';
  countdownTimer.style.fontSize='32px';
  countdownTimer.innerHTML= `${days}д. ${hours}год. ${minutes}хв. ${seconds}сек.`;
  
  if(difference<0){
    countdownTimer.innerHTML="Новим роком!"; 

    }
}
  

setInterval( updateTimer, 1000);