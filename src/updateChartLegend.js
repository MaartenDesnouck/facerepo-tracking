function updateChartLegend(HISTORY, PERCENT, row, kolom) {

    // history
    var waarde = getValue(row, kolom, HISTORY);
    var naam = getValue(2, kolom, HISTORY);
    setValue(3, kolom, HISTORY, '[' + kolom + '] ' + naam + ' (' + waarde + ')');

    // percentage
    waarde = getValue(row, kolom, PERCENT);
    naam = getValue(2, kolom, PERCENT);
    setValue(3, kolom, PERCENT, '[' + kolom + '] ' + naam + ' (' + waarde + ')');
}
