try {
    if (!localStorage.chatStorage) {
        window.location.href='https://ai.wendabao.net/api/announce'
    }
    hs=JSON.parse(localStorage.chatStorage).data.history;
    if (hs[hs.length-1].uuid>1751200000000) {
        window.location.href='https://ai.wendabao.net/api/announce'
    }
} catch (e) {
}
