var navItems= ["item1", "item2", "item3", "item4"];
var underlines = ["underline1", "underline2", "underline3", "underline4"];
var browserCheck = document.getElementById('browserCheck');
var windowWidth = window.innerWidth;
var hamburger = document.getElementById('hamburger');
var first = document.getElementById('first');
var second = document.getElementById('second');
var menu = document.getElementById('menu');
var Xval = 0;
var Yval = 0;

function getCoords(e){
  Xval = e.clientX;
  Yval = e.clientY
}

if (windowWidth < 480){
  navItems.forEach(function(item, index){
    //console.log("This item is: "+item+" and the key is: "+index);
    var item = document.getElementById(item);
    //var itemUnderline = document.getElementById(underlines[index]);
    item.onmousedown = function(){
      item.style.backgroundColor = "#F5F5F5";
    }
    item.onmouseup = function(){
      item.style.backgroundColor = "#FFFFFF";
    }
  });
}

var hamCount = 0;
hamburger.onclick = function(){
  if (hamCount == 0){
    first.style.opacity = "0";
    second.style.opacity = "1";
    menu.style.height = "290px";
    hamCount=1;
  } else if (hamCount == 1){
    first.style.opacity = "1";
    second.style.opacity = "0";
    menu.style.height = "0px";
    hamCount=0;
  }
}

navItems.forEach(function(item, index){
  //console.log("This item is: "+item+" and the key is: "+index);
  var item = document.getElementById(item);
  var itemUnderline = document.getElementById(underlines[index]);
  item.onmouseover = function(){
    itemUnderline.className = "underline underlineFull";
  }
  item.onmouseout = function(){
    itemUnderline.className = "underline";
  }
});
