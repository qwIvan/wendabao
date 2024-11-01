setTimeout(function(){
  if (window.location.hostname==="ai.wendabeta.net") {
      var iconSpan = document.querySelector('span.n-button__icon');
      if (iconSpan) {
          var parentElement = iconSpan.parentElement;
          parentElement.addEventListener('click', function() {
              var link = document.createElement('a');
              link.href = 'https://ai.wendabao-a.net/?utm_source=beta';
              link.target = '_blank';
              link.click();
          });
      }
      var switchPanel = document.querySelector('div.switch-panel');
      if (switchPanel) {
          switchPanel.addEventListener('click', function(e) {
              e.stopPropagation();
              var link = document.createElement('a');
              link.href = 'https://ai.wendabao-a.net/?utm_source=beta';
              link.target = '_blank';
              link.click();
          });
            switchPanel.querySelectorAll('div').forEach(item=>item.style.pointerEvents = "none")
      }
  }
}, 10000)
