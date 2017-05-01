var rankingNamen = [];
var rankingScores = [];

function main() {
    var DATA = '1l9yVXgBg-etNtzsybBVY3nfsiDIwWGayJXBKdCZ5W4Y';
    var data = SpreadsheetApp.openById(DATA);

    var BUFFER = data.getSheets()[0];
    var FaceRepo_META = data.getSheets()[1];
    var FaceRepo_HISTORY = data.getSheets()[2];
    var PERCENT = data.getSheets()[3];

    var HISTORY = FaceRepo_HISTORY;
    var META = FaceRepo_META;

    var STARTDATUM = new Date("November 24, 2015 0:00:00");
    var progstart = new Date();
    var timezone = 'GMT';

    var date = Utilities.formatDate(progstart, timezone, 'dd-MM-yyyy');
    var row = dayDiff(STARTDATUM, progstart) + 1;

    updateHistory(HISTORY, META, row, date, 1);
    updateChartLegend(HISTORY, PERCENT, row, 1);

    updateHistory(HISTORY, META, row, date, 2);
    updateChartLegend(HISTORY, PERCENT, row, 2);

    updateMax(HISTORY, META, row, date, 3);
    updateChartLegend(HISTORY, PERCENT, row, 3);

    for (var kolom = 4; kolom < 14; kolom++) {
        updateGrens(HISTORY, META, row, date, kolom);
        updateChartLegend(HISTORY, PERCENT, row, kolom);
    }

    GoogleSheet.setValue(0, 1, META, Utilities.formatDate(new Date(), timezone,
        "yyyy-MM-dd' at 'HH:mm:ss' (" + timezone + ")'"));

}
