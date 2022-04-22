const months=[
    "january",
    "febuary",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
]

const weekdays=[
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
]

// set variables
const times=document.querySelectorAll(".time");
const lastDay=document.querySelector(".away");
const deadLine=document.querySelector(".countdown");

let futureDate= new Date(2022,11,23,11,30,0);

const year=futureDate.getFullYear();
const date=futureDate.getDate();
const minutes=futureDate.getMinutes();
const hours=futureDate.getHours();
const seconds=futureDate.getSeconds();

const month=months[futureDate.getMonth()]
const weekday=weekdays[futureDate.getDay()]

lastDay.innerHTML=`Giveaway ends on ${weekday}, ${date} ${month} ${year}, ${hours}:${minutes}am`

//time value in ms
//1sec=1000
//1min=60*1000
//1hr=60*60*1000
//1day=24*60*60*1000

//all values in ms
const oneDay=24*60*60*1000
const oneHour=60*60*1000
const oneMin=60*1000
const oneSec=1000

function getRemianingTime(){
    let today=new Date();

   const futureTime=futureDate.getTime();
   const todayTime=today.getTime();
  //time diff in ms
  const showTime=futureTime-todayTime;

  const day=Math.floor(showTime/oneDay);
  const hour=Math.floor((showTime%oneDay)/oneHour);
  const mins=Math.floor((showTime%oneHour)/oneMin);
  const secs=Math.floor((showTime%oneMin)/1000);

  function format(time){
      if(time<10){
        return time=`0${time}`
      }return time
  }

  const value=[day,hour,mins,secs]
  times.forEach(function(time, index){
    time.innerHTML=format(value[index])
  })
  
  if(showTime<0){
    clearInterval(countDown)
    deadLine.innerHTML=`<h4 class="tanke">Giveaway has expired<h4>`
  }
  
}
let countDown=setInterval(getRemianingTime,1000)
getRemianingTime()