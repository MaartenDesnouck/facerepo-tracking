function setValue(x, y, blad, value) {
    if (blad.rows < x + 1) {
        var rij = [];
        rij.push(value);
        blad.appendRow(rij);
    } else {
        var cell = blad.getRange('a1');
        cell.offset(x, y).setValue(value);

    }
}

function setValueColor(x, y, blad, value, backgroundcolor) {
    if (blad.rows < x + 1) {
        var rij = [];
        rij.push(value);
        blad.appendRow(rij);
    } else {
        var cell = blad.getRange('a1');
        cell.offset(x, y).setValue(value);
        cell.offset(x, y).setBackground(backgroundcolor);
    }
}

function setValueFullColor(x, y, blad, value, backgroundcolor, fontcolor) {
    if (blad.rows < x + 1) {
        var rij = [];
        rij.push(value);
        blad.appendRow(rij);
    } else {
        var cell = blad.getRange('a1');
        cell.offset(x, y).setValue(value);
        cell.offset(x, y).setBackground(backgroundcolor);
        cell.offset(x, y).setFontColor(fontcolor);
    }
}
