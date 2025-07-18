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

function redirTo(dstHost, mark, newTab) {
    var dst = window.location.href.replace(window.location.hostname, dstHost)
    if (mark) {
        const dstUrl = new URL(dst)
        const params = new URLSearchParams(dstUrl.search);
        if (!params.has('utm_source')) {
            params.append('utm_source', dstHost+(newTab?"betanewtab":"betaredir"))
        }
        dstUrl.search = params.toString();
        dst = dstUrl.toString();
        dst = 'https://ai.wendabao.net/api/v2/mark-redir?url=' + encodeURIComponent(dst)
    }
    if (newTab) {
        window.open(dst, "_blank")
    } else {
        window.location.href = dst
    }
};


function goNew(newTab) {
    if (confirm("当前网址已停用，是否前往新网址继续使用？")) {
        redirTo('ai.wendabao-f.net', true, newTab)
    }
}

if (window.location.hostname==="ai.wendabao-d.net") {
    goNew()

    setTimeout(function(){
        var iconSpan = document.querySelector('span.n-button__icon');
        if (iconSpan) {
          var parentElement = iconSpan.parentElement;
          parentElement.addEventListener('click', function() {
              goNew(true);
          });
        }
        var switchPanel = document.querySelector('div.switch-panel');
        if (switchPanel) {
          switchPanel.addEventListener('click', function(e) {
              goNew(true);
          });
        }
    }, 10000)
}
