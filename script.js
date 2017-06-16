(function(){
  var url = location.href;
  
  var domain = url.split("/")[2];
  if (domain === "manage.conoha.jp") {
    var ele = document.createElement("style");
    var str = document.createTextNode('.wrap {background: none}\
                                      .title-area, .refine, .edit, .chosen-container,.btn-pager {background: rgba(255,255,255,0.7);}\
                                      ');
    ele.appendChild(str);
    document.body.appendChild(ele);
  }
})();
