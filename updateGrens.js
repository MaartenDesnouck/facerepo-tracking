function updateGrens(HISTORY, META, row, date, column) {
    var page = getValue(0, column, HISTORY);
    var currentPage = page;
    var offset = 0;
    var found = false;
    var onPage = 0;
    var grens = getValue(1, column, HISTORY);

    // find op welke pagina hij te vinden is;
    while (!found && offset < 10) {
        currentPage = page + offset;
        onPage = findGrens(currentPage, grens);

        if (onPage != 24 && onPage != -1) {
            found = true;
        } else {
            currentPage = page - offset;
            if (currentPage < 2) {
                currentPage = 1;
            }
            onPage = findGrens(currentPage, grens);
        }

        if (onPage != 24 && onPage != -1) {
            found = true;
        } else {
            offset = offset + 1;
        }
    }

    if (offset < 10) {
        // schrijf bovenaan kolom welke pagina dat was
        setValue(0, column, HISTORY, currentPage);

        // reken uit welke positie dat is
        var rank = 24 * (currentPage - 1) + onPage;

        // zet positie op juiste row
        setBackgroundColor(row, column, HISTORY, "white");
        setValue(row, column, HISTORY, rank);

        // setValue(row+1,kolom,HISTORY,onPage);
        // setValue(row+2,kolom,HISTORY,offset);

    } else {
        // reken uit welke positie dat is
        var rank = 24 * (page);

        // zet positie op juiste row
        setBackgroundColor(row, column, HISTORY, "orange");
        setValue(row, column, HISTORY, rank);

    }
}
