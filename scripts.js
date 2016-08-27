var navItems= ["item1", "item2", "item3", "item4"];
var underlines = ["underline1", "underline2", "underline3", "underline4"];
var browserCheck = document.getElementById('browserCheck');

var browser = navigator.sayswho= (function(){
    var ua= navigator.userAgent, tem,
    M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if(/trident/i.test(M[1])){
        tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE '+(tem[1] || '');
    }
    if(M[1]=== 'Chrome'){
        tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
        if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
    }
    M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
    return M.join(' ');
})();

browserCheck.innerHTML = "Browser check: "+browser;


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
