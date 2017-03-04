function getWebpage(pagina) {
    var HTML = UrlFetchApp.fetch(pagina).getContentText();
    return HTML;
}

