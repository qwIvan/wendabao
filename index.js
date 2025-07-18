if (['ai.wendabao.net','ai.wendabao-c.net'].includes(window.location.host)){
  try {
    var redir = true;
    if (localStorage.chatStorage) {
      var hs=JSON.parse(localStorage.chatStorage).data.history;
      if (hs[hs.length-1].uuid<1751200000000) {
        redir = false;
      }
    }
    
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
    if (fv && parseInt(fv)<1751200000000) {
      redir = false;
    }

    if (redir) {
      window.location.href='https://ai.wendabao.net/api/announce'
    }
  } catch (e) {
  }
}
