function findGrens(page, grens) {
    HTML = getWebpage('https://facerepo.com/app/search/results/?sortOrder=downloaded-most&compatibleIncluded=true&page=' +
        page);
    var lijst = [];
    lijst = split(HTML, '<div class="secondary-text">');
    var lijst2 = [];

    for (var i = 24; i > 0; i--) {
        lijst2 = split(lijst[i], ">");
        if (lijst2[23].substring(6, lijst2[23].length - 4) == grens) {
            return i;
        }
    }
    return '-1'
}
