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
    if (confirm("当前网址ai.wendabeta.net已停用，是否前往新网址继续使用？")) {
        redirTo('ai.wendabao-a.net', true, newTab)
    }
}

if (window.location.hostname==="ai.wendabeta.net") {
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
