var navItems= ["item1", "item2", "item3", "item4"];
var underlines = ["underline1", "underline2", "underline3", "underline4"];

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
