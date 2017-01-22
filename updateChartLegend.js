function updateChartLegend(HISTORY, PERCENT, row, column) {

    // history
    var waarde = GoogleSheet.getValue(row, column, HISTORY);
    var naam = GoogleSheet.getValue(2, column, HISTORY);
    GoogleSheet.setValue(3, column, HISTORY, '[' + column + '] ' + naam + ' (' + waarde + ')');

    // percentage
    waarde = GoogleSheet.getValue(row, column, PERCENT);
    naam = GoogleSheet.getValue(2, column, PERCENT);
    GoogleSheet.setValue(3, column, PERCENT, '[' + column + '] ' + naam + ' (' + waarde + ')');
}
