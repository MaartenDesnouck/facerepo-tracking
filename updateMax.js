function updateMax(HISTORY, META, row, date, column) {
    var page = getValue(0, column, HISTORY);
    var currentPage = page;
    var offset = 0;
    var found = false;
    var onPage = 0;

    // find op welke pagina hij te vinden is;
    while (!found) {
        currentPage = page + offset;
        onPage = endOfResults(currentPage);
        if (onPage != 0) {
            found = true;
        } else {
            currentPage = page - offset;
            if (currentPage < 2) {
                currentPage = 1;
            }
            onPage = endOfResults(currentPage);
        }

        if (onPage != 0) {
            found = true;
        } else {
            offset = offset + 1;
        }
    }

    // schrijf bovenaan kolom welke pagina dat was
    setValue(0, column, HISTORY, currentPage);

    // reken uit welke positie dat is
    var rank = 24 * (currentPage - 1) + onPage;

    // zet positie op juiste row
    setValue(row, column, HISTORY, rank);

}
