var countdownTime = 1497398400*1000;
var daysEntry = document.getElementById('days');
var hoursEntry = document.getElementById('hours');
var minEntry = document.getElementById('min');
var secEntry = document.getElementById('seconds');
var daysLabel = document.getElementById('daysLabel');
var hoursLabel = document.getElementById('hoursLabel');
var minutesLabel = document.getElementById('minutesLabel');
var secondsLabel = document.getElementById('secondsLabel');
var timeContainer = document.getElementById('timeContainer');

window.onload = function(){
  setTimeout(function(){
    timeContainer.className = "timeContainer";
  }, 1000);
}

setInterval(function(){
  var temp = new Date();
  var currentTime = Number(temp);
  var interTime = countdownTime - currentTime;
  interTime = Math.abs(interTime);
  days = interTime/86400000;
  interTime = interTime-(Math.floor(days)*86400000);
  hours = interTime/3600000;
  interTime = interTime-(Math.floor(hours)*3600000);
  minutes = interTime/60000
  interTime = interTime-(Math.floor(minutes)*60000);
  seconds = Math.floor(interTime/1000);
  daysEntry.innerHTML = Math.floor(days);
  if (Math.floor(days) == 1){
    daysLabel.innerHTML = "day";
  } else {
    daysLabel.innerHTML = "days";
  }
  hoursEntry.innerHTML = Math.floor(hours);
  if (Math.floor(hours) == 1){
    hoursLabel.innerHTML = "hour";
  } else {
    hoursLabel.innerHTML = "hours";
  }
  minEntry.innerHTML = Math.floor(minutes);
  if (Math.floor(minutes) == 1){
    minutesLabel.innerHTML = "minute";
  } else{
    minutesLabel.innerHTML = "minutes";
  }
  secEntry.innerHTML = Math.floor(seconds);
  if (Math.floor(seconds) == 1){
    secondsLabel.innerHTML = "second";
  } else{
    secondsLabel.innerHTML = "seconds";
  }
  //console.log("Time remaining: "+Math.floor(days)+" : "+Math.floor(hours)+" : "+Math.floor(minutes)+" : "+Math.floor(seconds));
},1000);
