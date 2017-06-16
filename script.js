(function(){
  var url = location.href;
  
  var domain = url.split("/")[2];
  if (domain === "manage.conoha.jp") {
    var ele = document.createElement("style");
    var str = document.createTextNode('.wrap {background: none}\
                                      ');
    ele.appendChild(str);
    document.body.appendChild(ele);
  }
})();
