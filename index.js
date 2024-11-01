if (window.location.hostname==="ai.wendabeta.net") {
    var iconSpan = document.querySelector('span.n-button__icon');
    if (iconSpan) {
        var parentElement = iconSpan.parentElement;
        parentElement.addEventListener('click', function() {
            var link = document.createElement('a');
            link.href = 'https://ai.wendabao-a.net';
            link.target = '_blank';
            link.click();
        });
    }
}
