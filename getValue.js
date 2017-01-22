function getValue(x, y, blad) {
    var data = blad.getDataRange().getValues();

    if (blad.getDataRange().getNumRows() < x + 1) {
        return undefined;
    } else {
        return data[x][y];
    }
}
