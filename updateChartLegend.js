function updateChartLegend(HISTORY, PERCENT, row, column) {

    // history
    var waarde = getValue(row, column, HISTORY);
    var naam = getValue(2, column, HISTORY);
    setValue(3, column, HISTORY, '[' + column + '] ' + naam + ' (' + waarde + ')');

    // percentage
    waarde = getValue(row, column, PERCENT);
    naam = getValue(2, column, PERCENT);
    setValue(3, column, PERCENT, '[' + column + '] ' + naam + ' (' + waarde + ')');
}
