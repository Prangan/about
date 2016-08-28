var sectionScroll = document.body.scrollTop;
var secondSectionOne = document.getElementById('secondSectionOne');
var secondSectionTwo = document.getElementById('secondSectionTwo');
var cardContainer = document.getElementById('cardContainer');

window.onscroll = function(){
  sectionScroll = document.body.scrollTop;
  if (sectionScroll > 380){
    secondSectionOne.className = "sectionShowing sectionFirst";
  }
  if (sectionScroll > 420){
    secondSectionTwo.className = "sectionShowing sectionSecond";
  }
  if (sectionScroll > 1200){
    cardContainer.className = "cardContainer";
  }
}
