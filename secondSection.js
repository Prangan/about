var sectionScroll = document.body.scrollTop;
var secondSectionOne = document.getElementById('secondSectionOne');
var secondSectionTwo = document.getElementById('secondSectionTwo');

window.onscroll = function(){
  sectionScroll = document.body.scrollTop;
  if (sectionScroll > 380){
    secondSectionOne.className = "sectionShowing";
  }
  if (sectionScroll > 420){
    secondSectionTwo.className = "sectionShowing";
  }
}
