var windowScroll = document.body.scrollTop;
var mainLogo = document.getElementById('mainLogo');
var schoolLogo = document.getElementById('SevSchoolLogo');
var info = document.getElementById('info');


window.onscroll = function(){
  windowScroll = document.body.scrollTop;
  mainLogo.style.top = ((windowScroll/8)-10) + "%";
  info.style.top = ((windowScroll/11)+65)+"%";
  schoolLogo.style.top = ((windowScroll/8)*-1) + "%";
}

window.onload = function(){
  mainLogo.className = "minLogo";
  info.className = "info";
  schoolLogo.className = "SevSchoolLogo";
  setTimeout(function(){
    mainLogo.style.transition = "0ms";
    info.style.transition = "0ms";
    schoolLogo.style.transition = "0ms";
  },700);
}
