function goNew(newTab) {
    if (confirm("当前网址ai.wendabeta.net已停用，是否前往继续使用？")) {
        if (newTab){
            window.open('https://ai.wendabao-a.net/?utm_source=betanewtab#/?role=PLUS', "_blank")
        } else {
            window.location.href = 'https://ai.wendabao-a.net/?utm_source=betaredir#/?role=PLUS'
        }
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
