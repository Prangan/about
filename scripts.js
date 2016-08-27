var navItems= ["item1", "item2", "item3", "item4"];
var underlines = ["underline1", "underline2", "underline3", "underline4"];
var browserCheck = document.getElementById('browserCheck');
var windowWidth = window.innerWidth;
var hamburger = document.getElementById('hamburger');
var first = document.getElementById('first');
var second = document.getElementById('second');
var menu = document.getElementById('menu');
var navigation = document.getElementById('elevatedContent');

var scrollTop = document.body.scrollTop;
var scrollDirection = 0;
var oldScroll = 0;
var clickCatcher = document.getElementById('clickCatcher');
clickCatcher.style.display = "none";

if(typeof window.orientation == 'undefined'){
  document.onscroll = function(){
    scrollTop = document.body.scrollTop;
    if (scrollTop > oldScroll){
      navigation.className = "elevatedContent navSmaller";
    }
    if (scrollTop < oldScroll){
      navigation.className = "elevatedContent";
    }
    oldScroll = scrollTop;
  }
  navigation.onclick = function(){
    navigation.className = "elevatedContent";
  }
  clickCatcher.onclick = function(){
    first.style.opacity = "1";
    second.style.opacity = "0";
    menu.className = "menu menuHidden";
    clickCatcher.className = "clickCatcher";
    setTimeout(function(){
      clickCatcher.style.display = "none";
    },300);
  }
  clickCatcher.onmousedown = function(){
    first.style.opacity = "1";
    second.style.opacity = "0";
    menu.className = "menu menuHidden";
    clickCatcher.className = "clickCatcher";
    setTimeout(function(){
      clickCatcher.style.display = "none";
    },300);
  }
}


var hamCount = 0;
hamburger.onclick = function(){
  if (hamCount == 0){
    first.style.opacity = "0";
    second.style.opacity = "1";
    if(typeof window.orientation !== 'undefined'){
      menu.className = "menu menuShowing";
    } else {
      menu.className = "menu";
      clickCatcher.style.display = "block";
      setTimeout(function(){
        clickCatcher.className = "clickCatcher catcherShowing";
      },1);
    }
    hamCount=1;
  } else if (hamCount == 1){
    first.style.opacity = "1";
    second.style.opacity = "0";
    if(typeof window.orientation !== 'undefined'){
      menu.style.height = "0px";
    } else {
      menu.className = "menu menuHidden";
      clickCatcher.className = "clickCatcher";
      setTimeout(function(){
        clickCatcher.style.display = "none";
      },300);
    }
    hamCount=0;
  }
}

navItems.forEach(function(item, index){
  var item = document.getElementById(item);
  var itemUnderline = document.getElementById(underlines[index]);
  item.onmouseover = function(){
    itemUnderline.className = "underline underlineFull";
  }
  item.onmouseout = function(){
    itemUnderline.className = "underline";
  }
});
