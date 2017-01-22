function endOfResults(page) {
    HTML = getWebpage('https://facerepo.com/app/search/results/?sortOrder=downloaded-most&compatibleIncluded=true&page=' +
        page);
    var lijst = [];
    lijst = split(HTML, '<div class="secondary-text">');
    var lijst2 = [];

    for (var i = 1; i < 24 + 1; i++) {
        if (lijst[i] == undefined) {
            return i
        }
    }
    return 0
}
